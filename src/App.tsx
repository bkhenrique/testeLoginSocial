import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  // Configurações do Microsoft OAuth
  const clientId = import.meta.env.VITE_MICROSOFT_CLIENT_ID || '';
  const redirectUri = window.location.origin;
  const authEndpoint = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize';
  const scope = 'openid profile email';
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

  // Iniciar o fluxo de login com Microsoft
  const handleMicrosoftLogin = () => {
    // Verificar se o clientId foi configurado
    if (!clientId) {
      setError('Você precisa configurar o Client ID da Microsoft no arquivo .env');
      setShowInstructions(true);
      return;
    }
    
    const authUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&response_mode=fragment`;
    window.location.href = authUrl;
  };

  // Verificar se há um token na URL (após redirecionamento)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Extrair o token de acesso da URL
      const tokenMatch = hash.match(/access_token=([^&]*)/);
      if (tokenMatch) {
        const accessToken = tokenMatch[1];
        setToken(accessToken);
        sendTokenToBackend(accessToken);
      }
    }
  }, []);

  // Enviar o token para o back-end
  const sendTokenToBackend = async (accessToken: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/auth/microsoft`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ microsoftToken: accessToken }),
      });

      if (!response.ok) {
        throw new Error('Falha ao autenticar com o servidor');
      }

      const data = await response.json();
      console.log('Autenticação bem-sucedida:', data);
      setSuccess(true);
    } catch (err) {
      console.error('Erro ao enviar token:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  // Enviar token manualmente (para testes)
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token) {
      sendTokenToBackend(token);
    }
  };

  // Alternar exibição das instruções
  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="app-container">
      <h1>Login de Teste</h1>
      
      <button 
        className="instructions-toggle-button"
        onClick={toggleInstructions}
      >
        {showInstructions ? 'Ocultar Instruções' : 'Mostrar Instruções de Configuração'}
      </button>
      
      {showInstructions && (
        <div className="instructions-container">
          <h2>Instruções para Configurar o Aplicativo Microsoft</h2>
          <ol>
            <li>Acesse o <a href="https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade" target="_blank" rel="noopener noreferrer">Portal de Registro de Aplicativos da Microsoft</a></li>
            <li>Clique em "Novo registro"</li>
            <li>Preencha o nome do seu aplicativo</li>
            <li>Em "Tipos de conta com suporte", selecione "Contas em qualquer diretório organizacional e contas pessoais da Microsoft"</li>
            <li>Em "URI de Redirecionamento", selecione "Web" e insira: <code>{redirectUri}</code></li>
            <li>Clique em "Registrar"</li>
            <li>Após o registro, copie o "ID do aplicativo (cliente)" mostrado na página de visão geral</li>
            <li>Crie um arquivo <code>.env</code> na raiz do projeto baseado no <code>.env.example</code></li>
            <li>Adicione seu Client ID ao arquivo <code>.env</code>: <code>VITE_MICROSOFT_CLIENT_ID=seu_client_id_aqui</code></li>
            <li>Reinicie o aplicativo</li>
          </ol>
        </div>
      )}
      
      {!token && !success && (
        <div className="login-container">
          <h2>Faça login com sua conta Microsoft</h2>
          <button 
            className="microsoft-login-button"
            onClick={handleMicrosoftLogin}
          >
            Login com Microsoft
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}

      {token && !success && (
        <div className="login-container">
          <h2>Token obtido da Microsoft</h2>
          <p className="token-display">{token.substring(0, 20)}...</p>
          
          <form onSubmit={handleManualSubmit}>
            <button 
              type="submit" 
              className="submit-token-button"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Token para o Back-end'}
            </button>
          </form>
          
          {error && <p className="error-message">{error}</p>}
        </div>
      )}

      {success && (
        <div className="login-container success">
          <h2>Autenticação Concluída!</h2>
          <p>Você foi autenticado com sucesso.</p>
        </div>
      )}
    </div>
  )
}

export default App

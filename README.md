# 🔐 Teste de Login com Microsoft

Interface React simples para testar autenticação OAuth com Microsoft e integração com backend.

## 📋 Descrição

Este projeto fornece uma implementação pronta para uso da autenticação Microsoft OAuth em aplicações React. Desenvolvido para testar a integração com um backend que recebe e valida tokens de acesso da Microsoft.

## ✨ Características

- Fluxo completo de autenticação OAuth com Microsoft
- Obtenção do token de acesso e envio para backend
- Interface responsiva e amigável
- Configuração segura via variáveis de ambiente
- Instruções detalhadas para configuração no Azure Portal

## 🚀 Tecnologias

- React 18
- TypeScript
- Vite 6
- OAuth 2.0

## 🔧 Configuração do Aplicativo no Azure Portal

Para que o login com Microsoft funcione, você precisa registrar um aplicativo no Azure Portal:

1. Acesse o [Portal de Registro de Aplicativos da Microsoft](https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)
2. Clique em "Novo registro"
3. Preencha o nome do seu aplicativo
4. Em "Tipos de conta com suporte", selecione "Contas em qualquer diretório organizacional e contas pessoais da Microsoft"
5. Em "URI de Redirecionamento", selecione "Web" e insira o URL do seu aplicativo (ex: `http://localhost:5173`)
6. Clique em "Registrar"
7. Após o registro, copie o "ID do aplicativo (cliente)" mostrado na página de visão geral

## ⚙️ Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para configuração. Siga os passos abaixo:

1. Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env.example`
2. Preencha as variáveis com seus valores:

```
# Configurações do Microsoft OAuth
VITE_MICROSOFT_CLIENT_ID=seu_client_id_aqui
VITE_API_URL=http://localhost:3001/api/v1
```

**Importante**: O arquivo `.env` contém informações sensíveis e não deve ser compartilhado ou enviado para o repositório. Ele já está incluído no `.gitignore`.

## 🚀 Como usar

1. Clone o repositório
   ```
   git clone https://github.com/bkhenrique/testeLoginSocial.git
   cd testeLoginSocial
   ```

2. Instale as dependências
   ```
   npm install
   ```

3. Configure as variáveis de ambiente conforme instruções acima

4. Inicie o servidor de desenvolvimento
   ```
   npm run dev
   ```

5. Acesse `http://localhost:5173` no seu navegador

## 🔄 Fluxo de autenticação

1. O usuário clica no botão "Login com Microsoft"
2. É redirecionado para a página de login da Microsoft
3. Após autenticação bem-sucedida, a Microsoft redireciona de volta para o aplicativo com o token de acesso na URL
4. O aplicativo extrai o token da URL e o exibe parcialmente
5. O token é enviado para o backend via POST para `http://localhost:3001/api/v1/auth/microsoft`
6. O backend valida o token e retorna uma resposta
7. O aplicativo exibe o resultado da autenticação

## 📁 Estrutura do projeto

- `src/App.tsx` - Componente principal com a lógica de autenticação
- `src/App.css` - Estilos da aplicação
- `.env.example` - Modelo para configuração das variáveis de ambiente
- `.env` - Arquivo de configuração local (não versionado)

## 🔗 Links úteis

- [Documentação OAuth da Microsoft](https://docs.microsoft.com/pt-br/azure/active-directory/develop/v2-oauth2-auth-code-flow)
- [Portal de Registro de Aplicativos](https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

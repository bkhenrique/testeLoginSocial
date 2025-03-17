# Teste de Login com Microsoft

Este é um projeto simples em React para testar a autenticação com Microsoft através de um backend.

## Funcionalidades

- Interface para autenticação com Microsoft via OAuth
- Obtenção do token de acesso da Microsoft
- Envio do token para o backend via POST
- Feedback visual do processo de autenticação
- Design responsivo e amigável

## Requisitos

- Node.js (versão 14 ou superior)
- Backend configurado para receber tokens Microsoft em `http://localhost:3001/api/v1/auth/microsoft`
- Aplicativo registrado no Azure Portal (para obter o Client ID)

## Configuração do Aplicativo no Azure Portal

Para que o login com Microsoft funcione, você precisa registrar um aplicativo no Azure Portal:

1. Acesse o [Portal de Registro de Aplicativos da Microsoft](https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)
2. Clique em "Novo registro"
3. Preencha o nome do seu aplicativo
4. Em "Tipos de conta com suporte", selecione "Contas em qualquer diretório organizacional e contas pessoais da Microsoft"
5. Em "URI de Redirecionamento", selecione "Web" e insira o URL do seu aplicativo (ex: `http://localhost:5173`)
6. Clique em "Registrar"
7. Após o registro, copie o "ID do aplicativo (cliente)" mostrado na página de visão geral

## Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para configuração. Siga os passos abaixo:

1. Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env.example`
2. Preencha as variáveis com seus valores:

```
# Configurações do Microsoft OAuth
VITE_MICROSOFT_CLIENT_ID=seu_client_id_aqui
VITE_API_URL=http://localhost:3001/api/v1
```

**Importante**: O arquivo `.env` contém informações sensíveis e não deve ser compartilhado ou enviado para o repositório. Ele já está incluído no `.gitignore`.

### Solução de Problemas Comuns

- **Erro "unauthorized_client"**: Verifique se o Client ID está correto e se o aplicativo está registrado corretamente.
- **Erro de redirecionamento**: Certifique-se de que o URI de redirecionamento no Azure Portal corresponde exatamente ao URL do seu aplicativo.
- **Erro de escopo**: Verifique se os escopos solicitados estão configurados no Azure Portal.

## Como executar

1. Clone este repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Configure as variáveis de ambiente conforme instruções acima
4. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
5. Acesse `http://localhost:5173` no seu navegador

## Fluxo de autenticação

1. O usuário clica no botão "Login com Microsoft"
2. É redirecionado para a página de login da Microsoft
3. Após autenticação bem-sucedida, a Microsoft redireciona de volta para o aplicativo com o token de acesso na URL
4. O aplicativo extrai o token da URL e o exibe parcialmente
5. O token é enviado para o backend via POST para `http://localhost:3001/api/v1/auth/microsoft`
6. O backend valida o token e retorna uma resposta
7. O aplicativo exibe o resultado da autenticação

## Estrutura do projeto

- `src/App.tsx` - Componente principal com a lógica de autenticação
- `src/App.css` - Estilos da aplicação
- `.env.example` - Modelo para configuração das variáveis de ambiente
- `.env` - Arquivo de configuração local (não versionado)

## O que foi feito

- Criação de um projeto React com Vite e TypeScript
- Implementação do fluxo de autenticação OAuth com Microsoft
- Extração do token de acesso da URL após redirecionamento
- Envio do token para o backend via POST
- Feedback visual do processo de autenticação
- Estilização da interface para melhor experiência do usuário
- Adição de instruções detalhadas para configuração do aplicativo no Azure Portal
- Configuração de variáveis de ambiente para maior segurança

## O que falta fazer

- Implementar armazenamento do token em localStorage ou cookies
- Adicionar página de perfil do usuário após login bem-sucedido
- Implementar refresh token
- Adicionar opção de logout
- Melhorar o tratamento de erros

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS
- OAuth 2.0

# Instruções para Criar o Repositório no GitHub

Siga estas instruções para criar um novo repositório no GitHub e fazer o upload do seu projeto.

## 1. Criar um novo repositório no GitHub

1. Acesse [GitHub](https://github.com/) e faça login na sua conta
2. Clique no botão "+" no canto superior direito e selecione "New repository"
3. Preencha as informações do repositório:
   - **Nome do repositório**: `react-microsoft-login` (ou outro nome de sua preferência)
   - **Descrição**: Copie o conteúdo do arquivo `GITHUB_DESCRIPTION.md`
   - **Visibilidade**: Public
   - **Inicializar com**: Não selecione nada (vamos fazer upload do código existente)
4. Clique em "Create repository"

## 2. Preparar o projeto local

1. Abra o terminal na pasta do seu projeto
2. Inicialize um repositório Git (se ainda não tiver feito):
   ```
   git init
   ```
3. Adicione todos os arquivos ao staging:
   ```
   git add .
   ```
4. Faça o commit inicial:
   ```
   git commit -m "Commit inicial"
   ```

## 3. Conectar e enviar para o GitHub

1. Adicione o repositório remoto (substitua `seu-usuario` pelo seu nome de usuário do GitHub):
   ```
   git remote add origin https://github.com/seu-usuario/react-microsoft-login.git
   ```
2. Envie o código para o GitHub:
   ```
   git push -u origin main
   ```
   (Se estiver usando a branch `master` em vez de `main`, substitua no comando acima)

## 4. Verificar o repositório

1. Acesse seu repositório no GitHub para verificar se todos os arquivos foram enviados corretamente
2. Verifique se o arquivo `.env` não foi enviado (ele deve estar no `.gitignore`)
3. Confirme se o README.md está sendo exibido corretamente na página inicial do repositório

## 5. Configurações adicionais (opcional)

1. Vá para a aba "Settings" do seu repositório
2. Configure tópicos relevantes (React, OAuth, Microsoft, Authentication, etc.)
3. Ative o GitHub Pages se desejar uma demonstração online
4. Configure proteção de branch se for um projeto colaborativo 
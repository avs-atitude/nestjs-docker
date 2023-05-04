# Define a imagem base
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /home/node/app

# Instala o Yarn
RUN apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

# Define o caminho para o Yarn
ENV PATH="/root/.yarn/bin:${PATH}"

# Copia os arquivos de dependências do projeto
COPY package*.json ./

# Copia todo o conteúdo do diretório do projeto
COPY . .

# Define a porta padrão que será utilizada pela aplicação
EXPOSE 3000
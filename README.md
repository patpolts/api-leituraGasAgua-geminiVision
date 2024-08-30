# API Teste de leitura de imagem de medidor de água e gá com Gemini Vision  
API Feita em node.js que utiliza alguns príncipios SOLID e de Clean Code, com integração à API do Google Gemini Vision e com o banco de dados MongoDB

## Instalação 
 - Fork do repositório
 - Copiar `env_example` para `.env` e alterar variáveis da base de dados e GEMINI API KEY  
 - Rodar imagem do docker: `docker-compose up --build`  


## Rotas  
 * POST /upload  
   Lê a imagem base64 da requisição, faz o upload no gemini, obtém os dados de leitura contidos na imagem e salva as informações no mongoDB  
 * PATCH /confirm  
   Atualiza, se necessário, os dados de leitura da imagem no mongoDB  
 * GET /{customer_code}/list  
   lista os dados salvos no mongoDB
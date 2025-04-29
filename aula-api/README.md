
# CRUD API no Next.Js

**Por Vinicius S. Penedo**

Nesse documento vamos aprender a criar uma API em NEXT.js! Portanto, antes de criar um novo projeto, verifique se o Node.js está instalado utilizando o comando:

```bash
node -v
```

Lembre-se de sempre manter a versão do Node.js o mais atualizada possível! Tendo isso em mente, vamos criar o nosso projeto com as seguintes opções usando o comando:

```bash
npx create-next-app@latest
```

Após criar, abra o projeto com o VS Code usando os seguintes comandos:

```bash
cd nome-do-projeto
code .
```

Instale também o driver mysql2 com o comando:

```bash
npm install mysql2
```

Com isso você verá a seguinte estrutura de pastas:


Agora, estamos prontos para criar uma API. Para criar uma API, primeiro crie uma pasta chamada `pages` e, dentro dela, crie outra pasta chamada `api`.

Dentro do diretório `api`, crie quatro arquivos:

- `create.js`
- `read.js`
- `update.js`
- `delete.js`

Vamos iniciar o XAMPP para o uso de banco de dados no projeto e criar um banco de dados chamado `teste-api`.


Vamos criar a seguinte tabela:


Agora, vamos editar o arquivo `read.js` com o seguinte código:

```javascript
// Exemplo de conteúdo para read.js
```

Para testar o código, vamos usar o software [Postman](https://www.postman.com/downloads/). Com o servidor do Next.js iniciado (`npm run dev`) e alguns dados cadastrados, podemos executar nele da seguinte maneira:


O próximo será o `create.js`:

```javascript
// Exemplo de conteúdo para create.js
```

No Postman o teste fica assim:


Hora do `update.js`:

```javascript
// Exemplo de conteúdo para update.js
```

Para testar:


E por último o `delete.js`:

```javascript
// Exemplo de conteúdo para delete.js
```

No Postman:


---

Com isso, concluímos a criação de um CRUD básico no Next.js! Espero que tenham gostado!
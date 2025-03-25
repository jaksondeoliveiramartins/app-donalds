link do repositorio Github: aula -2
https://github.com/fullstackclubeducacao/fullstackweek-donalds

link do repositorio Github: aula -3
https://github.com/fullstackclubeducacao/fullstackweek-donalds/tree/aula-03

link do repositorio Github: aula -4
https://github.com/fullstackclubeducacao/fullstackweek-donalds/tree/aula-04

Link do Repositorio Github: aula -5
https://github.com/fullstackclubeducacao/fullstackweek-donalds/tree/aula-05

link - figma
https://www.figma.com/design/sJtDO8WNiDcehboerUdlRq/FSW-Donald%E2%80%99s?node-id=440-199&p=f&t=cMTj9r1TSPP9cXwL-0

passo - 1 - npx create-next-app@15.1.6 .

passo - 2 - npm install prisma@6.2.1

passo - 3 - npm install @prisma/client@6.2.1

passo - 4 - npx prisma init

passo - 5 - criar tabelas para o banco

passo - 6 - formataçao=> npx prisma format

passo - 7 - criar uma conta na neondb

passo - 8 - pegar a url do neondb e colar no arquivo .env

passo - 9 - usar comando => npx prisma migrate dev

passo - 10 nome para a nova migração => add_initial_tables

passo - 11 criar o arquivo seed.ts dentro da pasta do prisma depois ir ate o repositorio e copiar o arquivo seed.ts.

passo 12 voltar no arquivo schema.prisma e add Cascate deletion.

passo 13 instalar=> npm install -D ts-node@10.9.2

passo 14 - ir ate ao arquivo package.json, abaixo de script vou colocar prisma:{"seed":'ts-node ./prisma/seed.ts'} cuidado ao digitar ts-node ./prisma/seed.ts pois ele nao poder ser muito junto => ou seja aqui estou falando este daqui é o script de seed quando ele rodar execute o ts-node.

passo - 15- rodar o seed.ts no banco => npx prisma db seed

### Ferrammentas:

* conventional commits

* shadcn instalar o shadcn => npx shadcn@2.3.0 init

* adicionar => npx shadcn@2.3.0 add card 

* https://www.npmjs.com/package/prettier-plugin-tailwindcss/v/0.0.0-insiders.d539a72 



## configurar o Eslint:

* 1 - passo : instalar plugin => npm install -D eslint-plugin-simple-import-sort@12.1.1

* 2 - passo : ir ate ao arquivo eslint.config.mjs do projeto local importar import simpleImportSort from "eslint-plugin-simple-import-sort"
e no repositorio remoto tem a configuração que iremos usar:
{
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },

  * 3 passo - vamos criar uma  pasta .vscode com o arquivo settings.json para nao ser necessário ficar  usando ctrl + "." .

  * 4 - passo instalar => npm install -D prettier-plugin-tailwindcss@0.6.5 e  criar o arquivo .prettierrc.json no projeto local.

 <https://www.npmjs.com/package/prettier-plugin-tailwindcss/v/0.0.0-insiders.d539a72>
 instalar => npm install -D prettier-plugin-tailwindcss@0.6.5
 <https://www.npmjs.com/package/prettier-plugin-tailwindcss/v/0.0.0-insiders.d539a72>
## use client
  
no client posso importar para o service components ja do service components nao posso importar para o client components.

Nao é semântico usar o atributo dentro da tag pois assim vai dar erro no html.Para corrigir isso usamos o asChildren para que aplique o estilo da tag button ao link
  
server components - renderizados no servidor

podem ser async.

podem chamar recursos do back-end (banco de dados).

nao pode usar hooks.

Comandos do prisma
# Comandos do prisma

*npx prisma migrate dev

*npx prisma format

*npx prisma generate

*npm install prisma@6.2.1

*npx prisma init

Comandos Next
## Comandos Next

npx next -v

npm list next

juntar tabelas usamos o include
## juntar tabelas usamos o include

const restaurant = await db.restaurant.findUnique({ where: { slug }, include: { menuCategories: { include: { products: true }, }, }, });
    },
Executado no servidor
console.log(restaurant) console.log(restaurant?.menuCategories)

Usar uma mascara para caracteres no cpf
npm i react-number-format@5.4.3

Server Actions
Funções que são executadas no servidor, mas podem ser chamadas de client components

consumptionMethod
Para corrigir esse problema, você precisa garantir que o valor consumptionMethod não seja nulo antes de atribuí-lo ao campo consumptionMethod no modelo Order. Você pode fazer isso adicionando uma verificação nula ou fornecendo um valor padrão. Aqui está um exemplo de como você pode corrigir esse problema:

consumptionMethod: input.consumptionMethod ?? "DINE_IN", // provide a default value

package.json
no arquivoo do package.json em script adicionar; "postinstall": "prisma generate"
Para corrigir esse problema, você precisa garantir que o valor consumptionMethod não seja nulo antes de atribuí-lo ao campo consumptionMethod no modelo Order. Você pode fazer isso adicionando uma verificação nula ou fornecendo um valor padrão.
vercel
*lembrar de copiar a url do seu banco de dados , se encontra no arquivo .env

Erros de Eslint
*abra o terminal e faça um build para fix doos imports dos Eslint.

#  Deployment:
## Vercel:
Em environment Variables iremos cola a url do  nosso banco de dados neondb que esta  no arquivo .env

## Stripe
no arquivoo do package.json em script adicionar;
abrir o arquivo .env e colocar a  chave secreta  do  stripe:
DATABASE_URL=""
STRIPE_SECRET_KEY= ""
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= ""

## FAZER UM FORWARD:
* stripe listen --forward-to http://localhost:3000/api/webhooks/stripe

criar  uma variavel DENTRO DO ARQUIVO .env => STRIPE_WEBHOOK_SECRET_KEY= "" 
webhooks=> 4ad919546106f3058c82d68f8924 
## instalar a versão:

npm i stripe@17.7.0
## Erros de Eslint

*abra  o terminal  e faça um build para fix dos imports  dos Eslint.

stop em 1:19 
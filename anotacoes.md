## link do repositorio Github: aula -2
https://github.com/fullstackclubeducacao/fullstackweek-donalds

## link do repositorio Github: aula -3
https://github.com/fullstackclubeducacao/fullstackweek-donalds/tree/aula-03

## link do repositorio Github: aula -4

https://github.com/fullstackclubeducacao/fullstackweek-donalds/tree/aula-04

## Link do Repositorio Github: aula -5

https://github.com/fullstackclubeducacao/fullstackweek-donalds/tree/aula-05

## link - figma: 

https://www.figma.com/design/sJtDO8WNiDcehboerUdlRq/FSW-Donald%E2%80%99s?node-id=440-199&p=f&t=cMTj9r1TSPP9cXwL-0

passo - 1 - npx create-next-app@15.1.6 .

passo - 2 - npm install prisma@6.2.1

passo - 3 - npm install @prisma/client@6.2.1

passo - 4 - npx prisma init

passo - 5 - criar tabelas para o banco

passo - 6 - formataçao=> npx prisma format

passo - 7 - criar uma conta na neondb

passo - 8 - pegar a url do neondb e colar no arquivo .env

passo - 9 - usar  comando =>  npx prisma migrate dev

passo - 10 nome para a nova migração => add_initial_tables

passo - 11 criar  o arquivo seed.ts dentro  da pasta do prisma depois ir ate o repositorio e copiar o arquivo  seed.ts.

passo 12 voltar  no arquivo schema.prisma e add Cascate deletion.

passo 13  instalar=> npm install -D ts-node@10.9.2


passo 14 - ir  ate  ao arquivo package.json, abaixo de script  vou colocar  prisma:{"seed":'ts-node ./prisma/seed.ts'}    => ou seja aqui estou falando este daqui é o script de seed quando ele rodar  execute o ts-node.

passoo - 15- rodar  o seed.ts no banco => npx  prisma db seed

# Ferrammentas:
- conventional commits
 - shadcn
 instalar o shadcn => npx shadcn@2.3.0 init
 adicionar => npx shadcn@2.3.0 add card
 instalar plugin =>npm install -D eslint-plugin-simple-import-sort@12.1.1
 
 https://www.npmjs.com/package/prettier-plugin-tailwindcss/v/0.0.0-insiders.d539a72
 instalar => npm install -D prettier-plugin-tailwindcss@0.6.5

 # use client 
 no client posso importar para o service components ja do service components nao posso importar para o client components.

## Nao é semântico usar o atributo <a></a> dentro da tag <button></button> pois assim vai dar erro no html.Para corrigir  isso usamos o asChildren para que aplique o estilo  da tag button ao link.

### server components - renderizados no servidor
* podem ser async.

* podem chamar recursos do back-end  (banco de dados).

* nao pode usar hooks.

# Comandos do prisma 
*npx prisma migrate dev

*npx prisma format

*npx prisma generate

*npm install prisma@6.2.1

*npx prisma init

*npm install @prisma/client@6.2.1

## Comandos Next

*npx create-next-app@15.1.6 .

* npx next -v

* npm list next

## juntar tabelas usamos o include

exemplo 


const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: {
      menuCategories: {
        include: { products: true },
      },
    },
  });

## Executado no servidor.

console.log(restaurant)
console.log(restaurant?.menuCategories)

# Usar uma mascara para  caracteres  no cpf

 npm i react-number-format@5.4.3

# Server Actions

Funções que são executadas no servidor, mas podem ser chamadas de  client components

# consumptionMethod:

Para corrigir esse problema, você precisa garantir que o valor consumptionMethod não seja nulo antes de atribuí-lo ao campo consumptionMethod no modelo Order. Você pode fazer isso adicionando uma verificação nula ou fornecendo um valor padrão.
Aqui está um exemplo de como você pode corrigir esse problema:

consumptionMethod: input.consumptionMethod ?? "DINE_IN", // provide a default value

# Fundamentos de React

## 09-gerenciamento de-estados-dos-componentes

`Estado` ou `states` é uma propriedade especial de um componente que pode ser alterada ao longo do tempo. Por exemplo, um componente que exibe contador de **likes** precisa de um gerenciamento de `states` para controlar a quantidade de **likes** recebidos

O uso de `states` permite ao React reagir as mudanças de renderização dos componentes.

### Exemplo de mudanças que podem ser gerenciados por states

- Captura de dados de formulário
- Visibilidade de componentes
- Filtros e buscas de daddos
- Contadores
- Temas/Estilos
- Pontuação/Vida de um jogador num jogo

## 06-props

São parametros/argumentos com valores/expressões passadas para os componentes React, normalmente usados para injeção de dados dinâmicos. As `props` funcionam como objetos, e cada `prop` driada por você passa a ter propriedades deste objeto.

As `props` são criadas manualmente, embora também exista uma `prop` especial chamada `children` que permite ler/transmitir o conteúdo que fica entre as tags de abertura/fechamento de um componente.

## 05-styled-components

`npm install styled-components`

## Resumo/Revisão

JSX -> HTML + JS para criar componentes

- App.jsx (Componente PRINCIPAL)
- main.jsx (Inicialização do React)
- index.html (elemento raíz e chamada do script)

## 04-estilos

### CSS in JS

- CSS inline: aplicado via atributo style da tag usando sintaxe JS, ou seja, objeto com propriedades.

- CSS externo e global usando arquivo.css e importando no main.jsx

- CSS Module: arquivo CSS especial relacionado ao componente que desejamos estilizar. Normalmente, nomeia-se o arquivo como "NomeComponente.module.css". A vantagem de usar CSS Modules é criar um escopo de estilização evitando conflitos de classes com mesmo nome.

---

## 00-projeto-resetado

### Informações gerais

A renderização ocorre na seguinte sequencia:

index.html <- main.jsx <- App.jsx
`npm run dev -- --host`
`npm run dev -- --open`

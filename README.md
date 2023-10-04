# Boas-vindas

Seja <strong>bem-vindo</strong>! Esse é o meu Portfólio pessoal para armazenar os meus projetos e contar um pouco mais sobre mim.

# Sobre

## Projeto criado com typescript usando o seguinte comando:

```
npx create-react-app alura-studies --template typescript --use-npm
```

## Foi usado SASS (.scss) para a estilização, seguindo os passos:

<i>[Link de Explicação do sass](https://www.npmjs.com/package/sass)</i>

### Comando de instalação
```
npm install --save-dev sass
```

## Usei o typescript-plugin-css-modules

### O que é?
é uma abordagem que permite encapsular estilos em módulos separados, de modo que as classes CSS definidas em um módulo não afetem outros módulos. Cada módulo CSS possui um escopo isolado. <br/>
Não é tão necessário em um projeto pequeno como esse mas usei para treinar.

<i>[Link de Explicação do typescript-plugin-css-modules](https://www.npmjs.com/package/typescript-plugin-css-modules)</i>

### Código de instalação

```
npm install -D typescript-plugin-css-modules
```

### Preparação para usar o plugin

- Adicionei a seguinte linha de código dentro do tsconfig.json
```json
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```

### Como foi usado no meu código
- Nome da extensão fica da seguinte forma:<br/>
-> `Name.module.scss`

- Importar a classe como uma função da seguinte forma:<br/>
-> `import style from './Name.module.scss';`

- Usar o nome da classe da seguinte fomra:<br/>
-> `<div className={style.Name}>`<br/>
ou <i>(para casos de caracteres especiais em sua classe)</i><br/>
-> `<div className={style["Name-name"]}>`

### Resultado

Dessa forma cada classe vai ficar com um nome único em seu navegador como:<br/>
`class="Name__+2cMi"`
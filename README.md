Layout Usado no site Principal
==============================

Este Layout é baseado no trabalho de [Naveeshaji chamado Material](http://naveenshaji.github.io/material) e está sendo adaptado para ser o layout da página principal da primeira versão de nosso APP que estará disponível no link: https//:streetpet.web.app

## Usando Subtree

Os comandos abaixo são para memória apenas, e podem ser ajustados para uso em outras pastas como foi adaptado para uso na pasta `img\`

### Adicionado a Pasta "_posts"

```
git remote add BlogPosts https://github.com/StreetPet/BlogPosts
$ git subtree add --squash --prefix=_posts/ BlogPosts StreetPet
```

### Atualizando a Pasta "_posts"

```
$ git subtree pull --squash 
```

### Enviando alterações da Pasta "_posts"


```
git subtree push --prefix=_posts/ BlogPosts StreetPet
```

# BaseImages

Todos os arquivos de Imagens usados no projeto, os fontes destas imagens estão no Branch RAW, que deve ser independente dos demais branchs.

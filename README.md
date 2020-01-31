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
BaseImages
==========

Todos os arquivos de Imagens usados no projeto, os fontes destas imagens estão no Branch RAW, que deve ser independente dos demais branchs.

## Estruturas de Pasta

Em todos os branchs deve conter apenas as imagens em formatos correspondente e adequados ao uso no projeto que importa este repositório, porém há um branch especial chamado SRC_RAW que contém os fontes das imagens e estes devem ser armazenados em diretórios adequados a aplicação que a manipula, porém sempre junto com a imagem final, seja Photoshop, Correl, Ilustrator, ou outro qualquer.

## Projetos que Usam este repositórios

Abaixo estão os projetos que utilizam este repositório, observe que alguns projetos podem usar mais imagens que outro, por isso os branchs são todos criados a partir do zero, sem relações um com os outros, a não ser que o uso de todas as imagens sejam necessário, isso se dá para evitar a duplicação das imagens, e facilitar a atualização de todas elas em um único lugar.

| Projeto | Pasta | Brach | Observação |
| ------- | ----- | ----- | ---------- |
| [Angular](https://github.com/StreetPet/Angular) | ./images | Angular | Imagens serão utilizadas nos projetos de applicativos em Angular |
| [Jekyll Theme - Naveeshaji Material](https://github.com/StreetPet/jekyll-theme-naveenshaji-material) | ./img |Jekyll_NaveeshajiMaterial | Imagens utilizadas no projeto de site principal feito com o SSG Jekyll acessível em https://streetpet.web.app e demais aplicações Angular https://streetpet.web.app/app, as imagens dos posts também estão armazenadas neste diretório e seus subdiretórios |


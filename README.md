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

## Como importar o projeto Usando Git Subtree

### Adicionado o repositório

O comando abaixo adiciona a pasta de trabalho onde será importado o repositório como SubTree, uma referência remota ao repositório, logo em seguida executa o fetch para que as ultimas atualizações estejam disponíveis localmente

``` Bash
$ git remote add BaseImages https://github.com/StreetPet/BaseImages
$ git fetch BaseImages
```

Veja ele irá criar um branch especifico para armazenar somente as imagens, evite mecher neste branch diretamente a não ser que tenha certeza do que está fazendo.


### Criando a pasta

Agora certifique-se que a pasta ainda não existe no seu clone local, e que ele esteja limpo com todas as alterações depositadas adequadamente. Execute o comando abaixo na pasta base da repositório que conterá o subtree.

```Bash
$ git subtree add --squash --prefix=images/ BaseImages SeuBranchParaEsteRepositorio
```

Como pode ver ele irá criar uma pasta chamda images  onde você executou o comando, procure executa-lo no Raiz, da pasta de trabalho, de seu repositório local.

Então ele usára a referência ao repostório remoto para obter os arquivos, veja que ele informa o Branch respectivo aos seu material de trablaho, portanto este branch deve já ter sido criado e atualizado localmente com o comando `git fetch`

### Atualizando a Pasta

Sempre que precisar obter novas imagens que foram adicionadas ao repositório use o comando na raiz de seu workspace do repositórioe em questão.

```
$ git subtree pull --squash  --prefix=images/ BaseImages SeuBranchParaEsteRepositorio
```

### Enviando alterações da Pasta

O envio de novas imagens ou alteração deve somente ser feito pelos Designers e WebDesigners, veja com a liderança do projeto detalhes sobre tal procedimento.

O comando é o seguinte:

```
git subtree push --prefix=images/ BaseImages SeuBranchParaEsteRepositorio
```

Claro que antes você deve ter feito o procedimento padrão com `git add arquivo` e `git commit` dentro da pasta `images/` para cada arquivo que alterou ou está adicionando.
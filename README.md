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

BaseImages
==========

Todos os arquivos de Imagens usados no projeto, os fontes destas imagens estão no Branch RAW, que deve ser independente dos demais branchs.

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
$ git subtree add --squash --prefix=imgs/ BaseImages SeuBranchParaEsteRepositorio
```

Como pode ver ele irá criar uma pasta chamda images  onde você executou o comando, procure executa-lo no Raiz, da pasta de trabalho, de seu repositório local.

Então ele usára a referência ao repostório remoto para obter os arquivos, veja que ele informa o Branch respectivo aos seu material de trablaho, portanto este branch deve já ter sido criado e atualizado localmente com o comando `git fetch`

### Atualizando a Pasta

Sempre que precisar obter novas imagens que foram adicionadas ao repositório use o comando na raiz de seu workspace do repositórioe em questão.

```
$ git subtree pull --squash  --prefix=imgs/ BaseImages SeuBranchParaEsteRepositorio
```

### Enviando alterações da Pasta

O envio de novas imagens ou alteração deve somente ser feito pelos Designers e WebDesigners, veja com a liderança do projeto detalhes sobre tal procedimento.

O comando é o seguinte:

```
git subtree push --prefix=imgs/ BaseImages SeuBranchParaEsteRepositorio
```

Claro que antes você deve ter feito o procedimento padrão com `git add arquivo` e `git commit` dentro da pasta `images/` para cada arquivo que alterou ou está adicionando.

# Material

Take a sneak peek [here](http://naveenshaji.github.io/material)

Material is a website/blog frontend based on Material Design.

## Usando Subtree

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
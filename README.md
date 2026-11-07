# Reino da Saudade 💛

Um site de memórias, um cantinho de conforto pra matar a saudade de alguém enquanto essa pessoa está viajando.

## O que tem

- **Contagem regressiva** até a volta, com um aviãozinho que anda pela barra de progresso da viagem
- **Relógio "aqui" e "lá"**, mostrando a hora no destino e o que a pessoa deve estar fazendo
- **Recado do dia**, que muda sozinho todo dia
- **Linha do tempo de memórias** em polaroids
- **Cartas "Abra quando…"**: o site lembra quais já foram lidas
- **Pote de motivos**: tira um papelzinho aleatório
- **Abraço de emergência**: segura o botão e solta coraçõezinhos

## Como personalizar

Edite **só o arquivo `dados.js`**: nome, datas, destino/fuso, memórias, cartas e motivos.

Para as fotos, coloque os arquivos na pasta `fotos/` (ex.: `fotos/01.jpg`) e use o mesmo nome em `dados.js`.
Enquanto não houver foto, aparece um cartão colorido com o emoji da memória.

## Como abrir

Basta abrir o `index.html` no navegador. Para ver num servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse http://localhost:8000.

## Publicar de graça

Qualquer hospedagem estática serve: GitHub Pages, Netlify ou Vercel. É só subir a pasta inteira.

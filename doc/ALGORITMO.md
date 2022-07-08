---
Cod3r
Curso Logica de Programação
---
# Curso de Logica de programação

## Algoritmo

- **Visão Geral**

E uma sequência de passos.

Exemplo 1:

```text
Tem DOC?
Se tiver DOC?
    Assina
Se não
    Pula para próxima pilha de documento.
```

Exemplo 2:

```text
Se a nota do aluno for maior ou igual 7
    Aprovado
Se não for
    Reprovado
```

O algoritmo pode ter decisão, repetição ou pode executar de forma sequencia ou repeti varias vezes mesmo passo.

Exemplo 3: *Algoritmo vestir v1*

> cueca -> meia -> sapato -> calça -> camisa

Resposta: Ele Colocou cueca, meia, ***sapato***, ***calça*** e a camisa. Sabendo que colocar a calça depois de ter colocado o sapato vai ser mais difícil, não esta errado só que não e um algoritmo otimizado.

Exemplo 4: *Algoritmo vestir v2*

> calça -> meia -> sapato -> cueca -> camisa

Resposta: Ele colocou calça, meia, sapato, ***cueca*** e camisa. Sabendo que ele colocou a cueca por cima da calça, Algoritmo esta BUG.

Exemplo 5: *Algoritmo vestir v3*

> cueca -> calça -> meia -> sapato -> camisa

Resposta: Algoritmo correto.

- Conceito

Algoritmo e dados tem uma integração, imagine algoritmo como sendo processamento(***Ação o Verbo***) e os dados sendo como as entradas que vão alimentar os algoritmo.

Exemplo:
> A soma de 2 valores, sendo que valores são as entradas e soma e ação de somar de 2 valores(algoritmo).

Tem algoritmo tem entradas e não gerar uma saída, e tem algoritmo que não recebe nenhuma entrada e gera uma saída.

Exemplo:
> Algoritmo de Hora certa se não receber nada ele devolver uma saída.

Exemplo c/pseudo-linguagem:

```txt
ALGORITMO 'SomaDoisValores'
DECLARE
    soma, a, b: inteiro
INICIO
    escreva('Digite dois números: ')
    leia(a, b)
    soma <- a + b
    escreva(soma)
FIM
```

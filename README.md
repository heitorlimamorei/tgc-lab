# TGC Lab — Missões de Grafos

Plataforma **HTML5/CSS/JavaScript**, offline e sem dependências, para estudar **Teoria dos Grafos e Computabilidade (TGC)** com trilhas, diagnóstico, perguntas comentadas e revisão espaçada.

_Capturas de tela poderão ser adicionadas posteriormente._

## Demonstrações visuais

As 48 etapas teóricas têm um percurso visual com quatro quadros: situação inicial, investigação, transformação e demonstração. É possível avançar/retroceder, desmontar e reconstruir arestas e observar métricas de vértices, arestas, componentes e grau; os quadros são esquemáticos, e alterações manuais são experimentos independentes da prova formal. O estado visual é salvo no progresso local.

## Funcionalidades

- 12 trilhas: planaridade, conjuntos independentes e cobertura, coloração, Euler/Hamilton, grafos de linha, árvores/AGM, caminhos mínimos, bipartidos e graus, matchings, sequências gráficas, modelagem por conflitos e fluxo.
- Diagnóstico inicial, perguntas com justificativa, XP, níveis e checkpoints (80%).
- Painel de domínio por assunto, progresso explícito e distinção entre **não avaliado** e **em reforço**.
- Revisão espaçada dos erros e retomada automática da última etapa.
- Laboratório com grafos interativos para praticar coloração.
- Backup do progresso via exportação/importação JSON.
- Responsivo, sem cadastro, backend, dependências externas ou rastreamento.

## Executar

Abra [`index.html`](index.html) no navegador. Não é necessário instalar dependências ou servidor.

Alternativamente, abra [`TGC-Lab-abrir.html`](TGC-Lab-abrir.html), versão independente em um único arquivo.

## Publicar no GitHub Pages

1. Crie um repositório GitHub e envie os arquivos da pasta (não o ZIP fechado).
2. No GitHub, acesse **Settings → Pages**.
3. Em *Build and deployment*, escolha **Deploy from a branch**, selecione `main` e a pasta `/ (root)`.
4. Salve. Quando a publicação estiver disponível, o endereço padrão será `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

> Disponibilidade de Pages para repositórios privados depende do plano/configuração GitHub. Se não estiver disponível, você pode continuar usando a versão offline. **Não torne o repositório público apenas para conseguir hospedagem sem revisar os arquivos e as permissões.**

## Progresso do aluno

Os dados são guardados em `localStorage`, no navegador e origem onde a plataforma foi aberta. O progresso local do HTML avulso **não é automaticamente transferido** para o GitHub Pages. Antes de mudar de endereço, use **Exportar JSON** na plataforma antiga e **Importar JSON** na nova.

## Referências acadêmicas

O conteúdo foi desenvolvido a partir dos slides de Teoria dos Grafos e Computabilidade do professor Silvio Jamil F. Guimarães (PUC Minas) e dos temas cobrados em provas P3 2025/1 e 2026/1 fornecidas para estudo. As questões são autorais; anotações manuscritas nas provas não foram consideradas gabarito.

**Os PDFs originais e as imagens das provas não estão incluídos neste repositório.** Use somente arquivos que tenha autorização para redistribuir. A plataforma exibe as referências aos PDFs e, em uso offline, permite abri-los quando forem adicionados à pasta `slides/`.

Alguns tópicos complementares, como Havel–Hakimi e o teorema de Kőnig, são extensões pedagógicas e não necessariamente citações diretas dos slides.

## Estrutura

```text
index.html             Página principal
styles.css             Estilos e responsividade
content.js             Trilhas, questões e conteúdo
app.js                 Avaliações, progresso e laboratório
TGC-Lab-abrir.html     Versão portátil, arquivo único
slides/README.md       Instruções de referências locais
screenshots/           Capturas de tela (opcional)
```

## Notas

Projeto para estudo pessoal. Não há uma licença de software adicionada automaticamente; o titular pode decidir as condições de redistribuição posteriormente.
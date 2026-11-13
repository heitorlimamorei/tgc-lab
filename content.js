
/* TGC Lab - base pedagógica orientada pelos slides do Prof. Silvio Jamil F. Guimarães
   e pelas provas P3 2025/1 e P3 2026/1 enviadas nesta conversa.
   Itens são originais, não uma transcrição literal das avaliações. */
const Q=(stem,options,answer,why,hint='',difficulty=2)=>({stem,options,answer,why,hint,difficulty});
const TF=(stem,truth,why,hint='',difficulty=2)=>Q(stem,['Verdadeiro','Falso'],truth?0:1,why,hint,difficulty);
const MODULES=[
{
 id:'planar',name:'Planaridade sem achismo',icon:'⬡',tier:'Prioridade máxima',blurb:'De um desenho cruzado à prova de (não) planaridade.',source:'13-graphs-planarity.pdf',pages:'20–46, 48–57',exam:'2025: Q1 · 2026: Q6, Q16, Q17, Q21',tags:['Kuratowski','Wagner','Euler'],
 lessons:[
 ['O que significa planar?','G é planar quando existe ao menos uma representação no plano sem cruzamentos entre arestas, exceto nas extremidades comuns. Um desenho atual cruzado não é prova de não planaridade.','Teste mental: antes de concluir, tente deslocar os vértices e redesenhar as arestas.'],
 ['Euler + limites','Para grafo planar conexo: v − e + f = 2. Em grafo simples planar com v ≥ 3, e ≤ 3v − 6. Se também for bipartido, e ≤ 2v − 4. Exceder um limite prova não planaridade; respeitá-lo NÃO prova planaridade.','Verifique se o grafo é simples e, no limite bipartido, se não existem ciclos ímpares.'],
 ['Kuratowski e Wagner','Kuratowski: não planar ⇔ contém uma subdivisão de K₅ ou K₃,₃. Wagner: não planar ⇔ possui K₅ ou K₃,₃ como menor (pode apagar/contrair arestas). Subdividir introduz vértices de grau 2; contrair funde extremos.','Homeomorfismo e menor são operações diferentes. Não confunda com mero desenho isomorfo.'],
 ['Dual geométrico','Em um desenho planar, cada face vira vértice do dual e cada aresta original liga suas faces correspondentes no dual. O dual também é planar. Para grafos planares conexos, o dual do dual é isomorfo ao original.','Faces incluem a região exterior.']
 ],
 example:{title:'Por que K₃,₃ não é planar?',steps:['K₃,₃ é bipartido simples, com v=6 e e=9.','Se fosse planar, satisfaria e ≤ 2v−4 = 8.','Como 9 > 8, a hipótese de planaridade é impossível.']},
 trap:'Um grafo com 8 vértices e 12 arestas satisfaz e ≤ 3v−6, mas ainda pode ser não planar. A desigualdade não é um teste de suficiência.',
 questions:[
 TF('Um grafo simples desenhado com cruzamentos é necessariamente não planar.',false,'Planaridade considera a existência de ALGUM desenho sem cruzamentos; o desenho exibido pode ser ruim.','Tente separar a propriedade abstrata do modo de desenhar.',1),
 Q('Para um grafo planar, conexo e simples com 6 vértices e 9 arestas, quantas faces há?', ['3','4','5','6'],2,'Pela fórmula de Euler, f = 2−v+e = 2−6+9 = 5.','Isole f na igualdade de Euler.'),
 Q('Qual conclusão é válida para um grafo bipartido simples com 6 vértices e 9 arestas?', ['Ele é planar porque e ≤ 3v−6.','Ele é não planar porque e > 2v−4.','Ele é uma árvore.','Não existe como grafo bipartido.'],1,'Em grafo planar bipartido simples, 9 ≤ 2·6−4 = 8 seria necessário. Logo é não planar. O K₃,₃ é um exemplo.','Use o limite mais forte permitido pela hipótese bipartida.',3),
 Q('Qual operação é usada na definição de menor de um grafo?', ['Somente renomear vértices.','Somente dividir uma aresta em duas.','Contrair uma aresta.','Somente inverter a orientação.'],2,'Um menor é obtido por exclusões de vértices/arestas e contrações de arestas. Divisão de arestas é a ideia de subdivisão/homeomorfismo.','Compare Wagner com Kuratowski.',3),
 TF('O dual geométrico de uma representação planar é também planar.',true,'O grafo dual pode ser desenhado com um vértice por face e uma aresta cruzando cada aresta primal, sem cruzamentos indevidos entre arestas duais.','Pense no vértice de cada face.',2),
 Q('Qual é o menor grafo não planar em número de arestas, entre os grafos simples?', ['K₄, com 6 arestas','K₅, com 10 arestas','K₃,₃, com 9 arestas','K₂,₃, com 6 arestas'],2,'K₃,₃ tem 9 arestas e é não planar; os dois obstáculos mínimos de Kuratowski são K₅ (10) e K₃,₃ (9).','Compare as quantidades de arestas dos dois obstáculos.',3)
 ]
},
{
 id:'sets',name:'Independência e cobertura',icon:'◈',tier:'Prioridade máxima',blurb:'Máximo, maximal, clique e cobertura sem confusão.',source:'14-graphs-sets.pdf',pages:'3–6, 11–14',exam:'2026: Q1, Q7, Q13, Q15',tags:['Independente','Cobertura','Complemento'],
 lessons:[
 ['Conjunto independente','S ⊆ V é independente se não há arestas entre pares de vértices de S. α(G) é a maior cardinalidade possível de um conjunto independente.','Não confunda conjunto de vértices sem arestas internas com subgrafo vazio de todo o grafo.'],
 ['Maximal versus máximo','Maximal: não é possível acrescentar outro vértice mantendo a independência. Máximo: tem a maior cardinalidade entre todos. Todo máximo é maximal; a recíproca é falsa.','Escolher repetidamente um vértice de menor grau pode produzir um conjunto maximal, mas não garante o máximo.'],
 ['Cobertura de vértices','C ⊆ V é cobertura de vértices se TODA aresta possui pelo menos um extremo em C. A menor cardinalidade é τ(G). A relação fundamental é C cobertura ⇔ V\\C independente. Logo α(G)+τ(G)=|V|.','Uma cobertura de vértices não é um conjunto que alcança todos os vértices; essa é outra noção.'],
 ['Complemento e clique','S é independente em G se, e somente se, os vértices de S formam uma clique no complemento de G. A clique reúne pares mutuamente adjacentes.','Uma clique no próprio G não é, em geral, independente em G.']
 ],
 example:{title:'Caminho P₄: independência e cobertura',steps:['Considere a−b−c−d. O conjunto {a,c} é independente e tem tamanho 2.','O conjunto {b,c} cobre as três arestas e tem tamanho 2.','Neste exemplo, α(P₄)=2, τ(P₄)=2 e α+τ=4.']},
 trap:'Um conjunto independente de tamanho 2 pode ser maximal em certo grafo, mesmo que exista outro conjunto independente de tamanho 3.',
 questions:[
 TF('Todo conjunto independente maximal é também máximo.',false,'Maximal significa que não se pode acrescentar mais um vértice; máximo exige a maior cardinalidade global.','Analise a diferença entre maximalidade local e ótima global.',1),
 Q('No caminho a−b−c−d, qual é um conjunto independente de tamanho 2?', ['{a,b}','{b,c}','{a,c}','{c,d}'],2,'a e c não são adjacentes; as demais opções contêm dois vértices consecutivos do caminho.','Conferir cada aresta interna dos conjuntos.'),
 TF('Se C é uma cobertura de vértices de G=(V,E), então V\\C é independente.',true,'Se dois vértices fora da cobertura fossem adjacentes, sua aresta não teria extremo algum em C, contrariando a definição.','Experimente assumir uma aresta com ambos os extremos fora de C.'),
 Q('Se um grafo possui 10 vértices e cobertura mínima de tamanho 4, qual seu número de independência α(G)?', ['4','5','6','10'],2,'A identidade α(G)+τ(G)=|V| fornece α=10−4=6.','Use a relação entre conjuntos complementares de vértices.'),
 Q('Qual afirmação sobre o algoritmo guloso que escolhe vértices de menor grau é válida em geral?', ['Sempre produz o conjunto independente máximo.','Pode encontrar um conjunto independente maximal sem garantir o máximo.','Produz necessariamente um conjunto dominante mínimo.','Encontra sempre uma clique máxima.'],1,'Essa estratégia é heurística: o conjunto construído tende a ser maximal, mas a escolha local de menor grau não certifica otimalidade.','Não confunda viabilidade com otimalidade.',3),
 TF('Um conjunto independente de G forma uma clique no complemento de G.',true,'No complemento, pares antes não adjacentes passam a ser adjacentes, criando uma clique sobre os vértices do conjunto.','O complemento inverte as adjacências entre vértices distintos.')
 ]
},
{
 id:'color',name:'Coloração e limite cromático',icon:'◉',tier:'Prioridade máxima',blurb:'Encontre χ(G) e demonstre que não dá para usar menos cores.',source:'13-graphs-planarity.pdf',pages:'66–98, 99–107',exam:'2026: Q8, Q12 · 2025: Q3',tags:['χ(G)','Clique','Guloso'],
 lessons:[
 ['Coloração própria','Uma coloração própria associa cores aos vértices e exige cores diferentes nos extremos de cada aresta. O menor número possível de cores é χ(G).','Vértices sem adjacência podem compartilhar a mesma cor.'],
 ['Limites úteis','ω(G) ≤ χ(G) ≤ Δ(G)+1, em que ω é o tamanho da maior clique e Δ é o maior grau. Em Kₙ, χ=n. Grafo bipartido com ao menos uma aresta tem χ=2.','Achar uma clique de 3 mostra pelo menos 3 cores. Só um colorimento válido prova no máximo 3.'],
 ['Algoritmo guloso','Escolha uma ordem dos vértices e dê a cada um a menor cor ainda não usada entre seus vizinhos já coloridos. O resultado depende da ordem e pode não ser ótimo.','Welsh–Powell é outra heurística; nenhuma delas garante sempre χ(G) exato.'],
 ['Coloração de arestas','Agora cores são atribuídas às arestas que compartilham extremidades, não aos vértices. O índice cromático é χ′(G), e χ′(G)=χ(L(G)).','Não confunda os dois problemas: χ e χ′ podem ter valores diferentes.']
 ],
 example:{title:'Por que C₅ precisa de 3 cores?',steps:['C₅ possui um ciclo ímpar: não admite bipartição e, portanto, não pode ser 2-colorido.','Colorindo sucessivamente seus cinco vértices com três cores, conseguimos uma coloração própria.','Temos χ(C₅)≥3 e χ(C₅)≤3. Logo χ(C₅)=3.']},
 trap:'Uma solução gulosa com quatro cores não demonstra χ(G)=4. Pode existir outra ordem ou coloração válida com três.',
 questions:[
 Q('Qual é χ(C₅), o número cromático do ciclo simples de cinco vértices?', ['2','3','4','5'],1,'Todo ciclo ímpar exige pelo menos 3 cores e é possível colori-lo com 3.','Use a paridade do ciclo.',2),
 TF('Encontrar uma clique de tamanho 4 prova que χ(G) é pelo menos 4.',true,'Os quatro vértices são dois a dois adjacentes e precisam receber cores distintas.','Todos os pares dentro de uma clique têm aresta.'),
 Q('Se uma heurística encontrou uma coloração própria com 5 cores, o que foi demonstrado?', ['χ(G)=5','χ(G)≥5','χ(G)≤5','χ(G)>5'],2,'Uma coloração válida com 5 cores prova apenas um limite superior: χ(G)≤5.','Uma solução viável fixa limite superior ou inferior?',3),
 Q('Para o grafo completo K₄, qual é o menor número de cores em uma coloração própria de vértices?', ['2','3','4','5'],2,'Em um completo K₄, cada par é adjacente; os quatro vértices têm de receber cores distintas.','Todos são vizinhos entre si.'),
 TF('A ordem dos vértices pode mudar a quantidade de cores usadas pelo algoritmo guloso.',true,'O guloso escolhe a menor cor disponível no momento, de modo que diferentes ordens podem gerar resultados diferentes.','A escolha depende dos vizinhos que já foram processados.'),
 Q('Se χ′(G)=3, o que isso representa?', ['Há exatamente três vértices.','São necessárias pelo menos três cores para arestas incidentes não compartilharem cor.','O grafo tem três componentes.','Há exatamente três faces.'],1,'χ′ é o número mínimo de cores para colorir arestas com arestas adjacentes de cores diferentes.','O símbolo com apóstrofo refere-se a arestas.')
 ]
},
{
 id:'euler',name:'Euler, Hamilton e armadilhas',icon:'⟳',tier:'Prioridade máxima',blurb:'Condições, conexidade e contraexemplos em afirmações V/F.',source:'08-graphs-traversing.pdf',pages:'98–134',exam:'2026: Q3, Q7, Q14',tags:['Euler','Hamilton','Pontes'],
 lessons:[
 ['Euler — olhar as arestas','Trilha euleriana usa cada aresta uma vez. Em grafo conexo (ignorando vértices isolados), existe circuito euleriano se todos os graus forem pares. Existe trilha aberta euleriana se exatamente dois vértices tiverem grau ímpar.','Trilha euleriana não precisa visitar vértices exatamente uma vez.'],
 ['Hamilton — olhar os vértices','Caminho hamiltoniano visita todos os vértices exatamente uma vez. Ciclo hamiltoniano retorna ao início, passando pelos demais vértices uma vez. Não existe critério simples de paridade equivalente ao de Euler.','Hamiltoniano não implica euleriano e vice-versa.'],
 ['Pontes e ciclos','Em grafo não direcionado, ponte é uma aresta cuja remoção aumenta o número de componentes. Uma aresta pertence a algum ciclo ⇔ não é ponte. Toda aresta de árvore com pelo menos dois vértices é uma ponte.','Para detectar pontes com DFS, use descobertas e low-link.'],
 ['Contraexemplos no estilo P3','Para negar uma afirmação do tipo “todo grafo”, basta um contraexemplo. A estrela K₁,₃ tem caminho euleriano? Não: possui 4 vértices ímpares. Já um ciclo C₄ é euleriano e hamiltoniano.','Na prova, escreva a hipótese usada e qual parte da conclusão falha.']
 ],
 example:{title:'O que acontece no caminho P₄?',steps:['P₄ tem graus (1,2,2,1): exatamente dois vértices ímpares.','Possui trilha euleriana aberta do primeiro ao último vértice.','Também possui caminho hamiltoniano, mas não circuito euleriano e não ciclo hamiltoniano.']},
 trap:'A frase “todos os vértices têm grau par” não basta para circuito euleriano se as arestas estiverem em componentes desconexas.',
 questions:[
 TF('Em um grafo não direcionado conexo com arestas, todos os graus pares garantem um circuito euleriano.',true,'Pelo critério de Euler, conexidade e graus pares são suficientes para percorrer cada aresta uma vez e retornar.','Lembre da condição de conexidade.',1),
 Q('Um caminho simples P₅ (cinco vértices) possui:', ['Circuito euleriano e ciclo hamiltoniano.','Trilha euleriana aberta e caminho hamiltoniano.','Ciclo hamiltoniano, mas não trilha euleriana.','Nenhuma trilha euleriana.'],1,'Os dois extremos têm grau 1 e o restante grau 2, logo há trilha euleriana aberta; a própria ordem do caminho visita todos os vértices uma vez.','Liste graus e percorra os vértices na ordem.'),
 TF('Todo grafo hamiltoniano é euleriano.',false,'O grafo completo K₄ tem ciclo hamiltoniano, mas seus vértices têm grau 3 (ímpar), logo não possui circuito euleriano.','Procure um completo com graus ímpares.',3),
 TF('Uma aresta de grafo não direcionado que pertence a um ciclo simples pode ser ponte.',false,'A outra parte do ciclo preserva uma conexão entre seus extremos após sua remoção; portanto, ela não é ponte.','Pense no caminho alternativo no mesmo ciclo.'),
 Q('Em grafo conexo com exatamente 2 vértices de grau ímpar, podemos garantir:', ['Circuito euleriano.','Trilha euleriana aberta.','Ciclo hamiltoniano.','Grafo completo.'],1,'Exatamente dois vértices ímpares caracterizam a existência de trilha euleriana aberta em grafo conexo.','Compare 0 ímpares e 2 ímpares.'),
 TF('Uma árvore com ao menos dois vértices possui pelo menos duas folhas.',true,'A árvore contém um caminho simples máximo e seus extremos têm grau 1, sendo folhas.','Considere os extremos de um caminho maximal.')
 ]
},
{
 id:'line',name:'Grafos de linha na prática',icon:'◇',tier:'Prioridade alta',blurb:'Transforme arestas em vértices e teste propriedades.',source:'13-graphs-planarity.pdf',pages:'99–107',exam:'2026: Q3, Q6',tags:['L(G)','χ′','Ciclos'],
 lessons:[
 ['Definição','No grafo de linha L(G), cada aresta de G corresponde a um vértice. Dois vértices de L(G) são adjacentes quando as arestas originais compartilham extremidade.','As arestas incidentes em um vértice de grau d de G formam uma clique K_d em L(G).'],
 ['Exemplos rápidos','L(P₄)=P₃; L(C₅)=C₅; L(K₁,₃)=K₃. Portanto, L(G) pode ter um ciclo mesmo quando G não tem ciclos.','Use três arestas com extremidade compartilhada para criar um triângulo em L(G).'],
 ['Planaridade não é preservada','Um grafo planar pode ter grafo de linha não planar. Considere a estrela K₁,₅ (planar). As 5 arestas geram uma clique K₅ no grafo de linha, que é não planar.','Sempre verifique graus altos antes de inferir planaridade de L(G).'],
 ['Coloração e Euler/Hamilton','Colorir arestas de G equivale a colorir vértices de L(G), logo χ′(G)=χ(L(G)). Se G é simples, conexo e euleriano, sua sequência de arestas em um circuito euleriano induz um ciclo hamiltoniano em L(G) (para ao menos três arestas). Além disso, L(G) também é euleriano.','A relação com semieulerianidade NÃO é automática: L(G) pode ter mais de dois vértices ímpares.']
 ],
 example:{title:'Estrela K₁,₄ → K₄',steps:['K₁,₄ tem quatro arestas, todas incidentes ao centro.','Em L(G), surgem quatro vértices, um para cada aresta.','Como todas as arestas compartilham o centro, todos os novos vértices são adjacentes: L(K₁,₄)=K₄.']},
 trap:'“G é uma árvore, então L(G) não tem ciclos” é falso: a estrela K₁,₃ vira um triângulo.',
 questions:[
 Q('O grafo de linha de uma estrela K₁,₃ é:', ['P₃','K₃','C₄','K₁,₃'],1,'As três arestas têm o centro em comum. Por isso, os três vértices correspondentes em L(G) são dois a dois adjacentes.','Faça uma correspondência aresta → vértice.'),
 TF('Se G é acíclico, então L(G) também é acíclico.',false,'K₁,₃ é árvore, mas seu grafo de linha é K₃, que contém ciclo.','Olhe as arestas de uma estrela.'),
 Q('Se G possui 8 arestas, quantos vértices possui L(G)?',['7','8','9','16'],1,'Por definição, cada aresta do original corresponde a exatamente um vértice no grafo de linha.','Use a transformação de conjuntos.'),
 TF('Todo grafo de linha de um grafo planar é planar.',false,'A estrela planar K₁,₅ tem grafo de linha K₅, que é não planar.','Considere um centro com grau 5.',3),
 Q('Qual igualdade sempre vale para grafos não direcionados simples?', ['χ(G)=χ(L(G))','χ′(G)=χ(L(G))','|E(G)|=|E(L(G))|','χ′(G)=|V(G)|'],1,'Colorir arestas de G equivale a colorir vértices de L(G), preservando quais pares não podem compartilhar cor.','Identifique qual elemento vira vértice do grafo de linha.'),
 TF('Se G é um grafo simples, conexo e euleriano com pelo menos três arestas, então L(G) possui ciclo hamiltoniano.',true,'Um circuito euleriano de G ordena todas as arestas sem repetições, em sequência cíclica de arestas incidentes. Isso se torna um ciclo hamiltoniano em L(G).','Pense em percorrer as arestas originais e convertê-las em vértices.'),
 TF('Se G é semieuleriano, então L(G) é necessariamente semieuleriano.',false,'Considere dois triângulos com um vértice central comum e uma folha ligada ao centro. G tem só dois vértices ímpares, mas L(G) tem quatro vértices de grau ímpar, logo não tem trilha euleriana aberta.','Conte os graus em L(G) das arestas ligadas a um vértice de grau 5.',3)
 ]
},
{
 id:'trees',name:'Árvores, pontes e AGM',icon:'♧',tier:'Revisão direcionada',blurb:'Reconhecer árvores e contar geradoras sem confundir mínimo.',source:'11-graphs-trees-spanning-trees.pdf',pages:'3–33, 37–69',exam:'2026: Q4, Q7, Q11, Q18',tags:['Árvore','Ponte','Kruskal'],
 lessons:[
 ['Três formas de reconhecer árvores','Para G simples não direcionado: (i) conexo e acíclico; (ii) existe exatamente um caminho simples entre quaisquer dois vértices; (iii) conexo com n−1 arestas. A condição e=n−1 sozinha não basta.','Uma floresta com k componentes tem n−k arestas.'],
 ['Pontes','Em uma árvore, remover qualquer aresta separa o grafo em duas partes. Em grafo conexo, uma aresta é ponte ⇔ ela não pertence a nenhum ciclo.','Ter ao menos uma ponte não significa que o grafo inteiro é uma árvore.'],
 ['Geradoras e número de soluções','Uma árvore geradora usa todos os vértices e tem n−1 arestas. Se pesos não são fornecidos, não há “menor custo” definido; com todos os pesos iguais, todas as árvores geradoras são mínimas.','Para contar árvores geradoras de grafos pequenos, enumere subconjuntos de n−1 arestas sem ciclo que conectem todos os vértices.'],
 ['Prim e Kruskal','Kruskal toma arestas de menor peso sem criar ciclos. Prim expande uma árvore escolhendo a menor aresta que cruza seu corte. Empates podem gerar MSTs diferentes, com o mesmo custo ótimo.','Em grafo desconexo, uma única árvore geradora não existe; procure floresta geradora mínima.']
 ],
 example:{title:'Um quadrado sem diagonal',steps:['C₄ tem 4 vértices e 4 arestas.','Toda árvore geradora exige 3 arestas.','Ao retirar qualquer uma das 4 arestas do ciclo, sobra um caminho com 4 vértices: existem 4 árvores geradoras.']},
 trap:'“G tem n−1 arestas, portanto é árvore” é falso sem exigir conexidade (ou aciclicidade).',
 questions:[
 TF('Um grafo simples não direcionado com n vértices e n−1 arestas é necessariamente árvore.',false,'Pode ser desconexo e conter ciclo; o requisito adicional de conexidade (ou ausência de ciclos) é essencial.','Procure uma componente cíclica e um vértice isolado.'),
 Q('Quantas arestas tem uma floresta com 12 vértices e 3 componentes?', ['8','9','10','11'],1,'Uma floresta com n vértices e k componentes contém n−k arestas, então 12−3=9.','Aplique n−1 a cada componente e some.'),
 TF('Toda aresta de uma árvore com pelo menos dois vértices é uma ponte.',true,'Ao remover uma aresta, o caminho único entre seus extremos desaparece e o grafo se desconecta.','Use a unicidade do caminho entre os extremos.'),
 Q('Quantas árvores geradoras diferentes há no ciclo C₅?', ['1','4','5','10'],2,'Remover qualquer uma das 5 arestas do ciclo deixa um caminho com os 5 vértices, uma árvore geradora.','Toda árvore geradora tem uma aresta a menos que o ciclo.'),
 TF('Com pesos iguais em todas as arestas, pode existir mais de uma árvore geradora mínima.',true,'Todas as árvores geradoras têm n−1 arestas e, sob pesos iguais, o mesmo custo.','Compare custos por número de arestas.'),
 Q('Em um grafo não direcionado desconexo, Kruskal pode produzir:', ['Uma árvore geradora única de todo G.','Uma floresta geradora mínima.','Um ciclo euleriano.','Uma ordenação topológica.'],1,'Kruskal constrói árvores mínimas nas componentes; o resultado global é uma floresta geradora mínima.','Uma árvore exige conexidade.')
 ]
},
{
 id:'shortest',name:'Dijkstra & Bellman-Ford',icon:'↝',tier:'Prioridade alta',blurb:'Atualizações corretas, hipóteses e V/F de algoritmo.',source:'10-graphs-shortest-path.pdf',pages:'21–71',exam:'2026: Q2, Q20',tags:['Relaxação','Pesos','DAG'],
 lessons:[
 ['Relaxação','Para uma aresta dirigida u→v com peso w(u,v), atualize d[v] ← min(d[v], d[u]+w(u,v)). Inicialize d[s]=0 e d[v]=∞ para os demais.','Trocar a ordem de u e v altera o significado quando as arestas são dirigidas.'],
 ['Dijkstra','Assumindo pesos não negativos, fixa distâncias mínimas em ordem crescente de custo tentativo. Uma vez fechado/finalizado um vértice, sua distância não precisa mais mudar.','Dijkstra não é garantido com arestas de peso negativo.'],
 ['Bellman-Ford','Relaxa todas as arestas até n−1 rodadas para cobrir caminhos simples de no máximo n−1 arestas. Admite pesos negativos, exceto ciclos negativos alcançáveis que tornem o menor caminho indefinido.','Uma rodada adicional com melhoria detecta ciclo negativo alcançável.'],
 ['Variações','Para maior caminho em DAG, use ordenação topológica e substitua min por max na relaxação, com inicialização adequada. Para maior caminho em grafos arbitrários com ciclos, o problema é diferente e pode ser intratável.','Não basta inverter um sinal e continuar usando Dijkstra.']
 ],
 example:{title:'Duas rotas para t',steps:['Arestas: s→a (2), a→t (3), s→t (9).','Distância tentada de t começa em 9 após relaxar s→t.','Ao passar por a, obtemos min(9,2+3)=5. Caminho mínimo s→a→t.']},
 trap:'Se a aresta tem peso negativo, trocar cada peso por w+10 pode mudar qual caminho é mínimo, pois caminhos podem ter números diferentes de arestas.',
 questions:[
 Q('Após relaxar u→v com d[u]=4, d[v]=11 e peso w(u,v)=3, o novo d[v] será:', ['3','4','7','11'],2,'A relaxação é min(11,4+3)=7.','Compare manter o valor atual com passar por u.'),
 TF('Dijkstra é garantido para grafos dirigidos com pesos negativos, desde que não haja ciclo negativo.',false,'Ausência de ciclo negativo não basta para Dijkstra; a garantia padrão exige pesos não negativos. Bellman-Ford cobre o caso de pesos negativos.','Qual hipótese justifica fixar distâncias em Dijkstra?'),
 Q('Em um grafo com 8 vértices, quantas rodadas completas de relaxação Bellman-Ford exige no máximo antes da verificação de ciclo negativo?', ['7','8','9','16'],0,'Um caminho simples tem no máximo n−1=7 arestas, por isso 7 rodadas bastam sob ausência de ciclo negativo alcançável.','Relacione cada rodada ao número de arestas do caminho.'),
 TF('No algoritmo de Dijkstra com pesos não negativos, a distância de um vértice já finalizado permanece ótima.',true,'A seleção pelo menor valor tentativo e a não negatividade impedem rotas posteriores de melhorarem o vértice finalizado.','Pense na propriedade de corte do conjunto finalizado.'),
 Q('Qual é a inicialização padrão de distâncias para origem s no Bellman-Ford?', ['d[s]=∞ e demais 0','Todos os d[v]=0','d[s]=0 e demais ∞','Todos os d[v]=1'],2,'A origem tem distância zero de si mesma; os demais vértices começam sem rota conhecida, representada por infinito.','Considere a distância de um vértice até ele mesmo.'),
 TF('Somar uma mesma constante a todos os pesos das arestas sempre preserva os caminhos mínimos.',false,'Rotas com quantidades diferentes de arestas recebem acréscimos diferentes no custo total; sua ordem de custo pode mudar.','Compare uma rota de 1 aresta e outra de 3 arestas.',3)
 ]
},
{
 id:'bipart',name:'Bipartidos, subgrafos e graus',icon:'⊞',tier:'Prioridade alta',blurb:'Contagem e propriedades para julgar assertivas.',source:'13-graphs-planarity.pdf',pages:'3–7',exam:'2025: Q2 · 2026: Q1, Q5, Q7, Q9, Q15',tags:['Kₘ,ₙ','Induzido','Regular'],
 lessons:[
 ['Partições','Bipartido ⇔ V=A∪B, A∩B=∅, sem arestas dentro de A ou de B. Um grafo é bipartido se e somente se não contém ciclos ímpares. Um grafo completo Kₙ é (n−1)-regular.','Um ciclo Cₙ é bipartido ⇔ n é par.'],
 ['Contagem das arestas','No completo Kₙ, e=n(n−1)/2; em K_{r,s}, e=rs; em K_{r,s,t}, e=rs+rt+st. O maior número de arestas de bipartido com n vértices é ⌊n²/4⌋.','Arestas em multipartidos completos ligam somente partes diferentes.'],
 ['Subgrafos e induzidos','Um subgrafo pode excluir algumas arestas. Um subgrafo induzido por S inclui TODAS as arestas originais com ambos os extremos em S. Em Kₙ, qualquer induzido de k vértices é K_k.','Todo subgrafo de árvore é acíclico, mas pode ser desconexo: uma floresta.'],
 ['Graus','Em grafo não direcionado, ∑deg(v)=2|E|; em grafo k-regular, e=nk/2. Uma sequência de graus de grafo simples tem graus entre 0 e n−1 e soma par, mas essas condições não bastam.','Laços contam duas vezes no grau em grafos não direcionados.']
 ],
 example:{title:'Tripartido K₂,₃,₃',steps:['Há 2+3+3=8 vértices.','Somam-se somente ligações entre classes: 2·3+2·3+3·3.','Total de arestas: 6+6+9=21.']},
 trap:'Ter 2n vértices não significa que o bipartido tem n² arestas: isso só ocorre no completo equilibrado Kₙ,ₙ.',
 questions:[
 Q('Quantas arestas tem K₂,₃,₃?', ['15','18','21','24'],2,'Entre as três partes: 2·3 + 2·3 + 3·3 = 21 arestas.','Some as ligações entre cada par de classes.'),
 TF('Todo ciclo de comprimento ímpar é um grafo bipartido.',false,'Um ciclo ímpar não admite alternância de duas classes sem fechar uma aresta dentro da mesma classe.','Tente alternar duas cores ao fechar o ciclo.'),
 Q('Quantas arestas possui K₅?', ['5','8','10','20'],2,'O completo possui um par de arestas por par de vértices: 5·4/2=10.','Conte pares não ordenados de vértices.'),
 TF('Todo subgrafo de um caminho simples é também um caminho simples.',false,'Excluir uma aresta interna de um caminho desconecta-o em dois caminhos, resultando em uma floresta não necessariamente conectada.','É possível remover uma aresta intermediária.'),
 Q('Quantas arestas tem um grafo simples 3-regular com 10 vértices?', ['15','20','30','13'],0,'Pelo lema do aperto de mãos, 2e=10·3=30; e=15.','Some todos os graus e divida por dois.'),
 TF('Um subgrafo induzido por 5 vértices de K₈ possui 10 arestas.',true,'Os cinco vértices escolhidos mantêm todas as adjacências, formando K₅, que tem 5·4/2=10 arestas.','Induzido não permite omitir arestas entre os vértices selecionados.')
 ]
},
{
 id:'matching',name:'Emparelhamentos e coberturas',icon:'⫶',tier:'Prioridade alta',blurb:'Quando arestas não podem compartilhar extremidades.',source:'12-graphs-network-flow.pdf',pages:'91–95',exam:'2026: Q10',tags:['Matching','Máximo','Kőnig'],
 lessons:[
 ['Matching','M ⊆ E é emparelhamento quando nenhuma dupla de arestas selecionadas compartilha vértice. No máximo ⌊n/2⌋ arestas podem ser escolhidas em grafo simples de n vértices.','Maximal ≠ máximo, assim como nos conjuntos independentes.'],
 ['Máximo e maximal','Matching maximal não admite adicionar outra aresta disjunta. Matching máximo tem cardinalidade maior ou igual à de qualquer matching.','Um maximal de tamanho menor que o máximo é possível.'],
 ['Bipartidos e cobertura','Em grafos bipartidos, o teorema de Kőnig afirma: tamanho do matching máximo = tamanho da cobertura mínima de vértices. É uma extensão pedagógica útil para a questão.','Não aplique a igualdade para grafos gerais, como triângulos.'],
 ['Visualização de conflito','As arestas de um matching são independentes no grafo de linha L(G). Assim, um matching em G equivale a um conjunto independente em L(G).','O vértice do grafo de linha representa uma ARESTA do original.']
 ],
 example:{title:'Matching em P₄',steps:['Considere a−b−c−d.','Escolha as arestas (a,b) e (c,d): não compartilham vértice.','O matching tem tamanho 2, que já é o máximo possível para 4 vértices.']},
 trap:'Escolher uma aresta arbitrária e parar quando não houver outra disjunta entrega um matching maximal, não necessariamente máximo.',
 questions:[
 Q('Em um caminho P₄ (4 vértices e 3 arestas), qual o tamanho máximo de um matching?', ['1','2','3','4'],1,'Escolha as duas arestas extremas; nenhuma outra seleção pode superar ⌊4/2⌋=2.','Cada aresta selecionada ocupa dois vértices.'),
 TF('Um matching maximal é necessariamente um matching máximo.',false,'Uma seleção pode ser impossível de ampliar por uma aresta, mas existir outra seleção com mais arestas no grafo.','Distingua otimalidade global de impossibilidade de extensão.'),
 Q('No triângulo K₃, qual é o tamanho de um matching máximo?', ['0','1','2','3'],1,'Todas as três arestas compartilham extremos entre si; no máximo uma pode pertencer ao matching.','Duas arestas selecionadas não podem tocar-se.'),
 TF('Em um grafo bipartido, a cardinalidade da cobertura mínima de vértices é igual à do matching máximo.',true,'É o teorema de Kőnig para grafos bipartidos.','Considere a relação entre duas otimizações no bipartido.'),
 Q('Qual estrutura é equivalente a um matching M de G?', ['Uma clique no próprio G.','Um conjunto independente em L(G).','Uma cobertura de todas as arestas de G.','Uma coloração de faces em G.'],1,'Arestas não incidentes em G correspondem a vértices não adjacentes em L(G), formando conjunto independente.','Converta arestas selecionadas em vértices do grafo de linha.')
 ]
},
{
 id:'degrees',name:'Sequências gráficas e provas',icon:'∑',tier:'Prioridade alta',blurb:'Identificar sequências impossíveis com argumentos rápidos.',source:'05-graphs-isomorphism-and-concepts.pdf',pages:'13–20',exam:'2026: Q9, Q19',tags:['Graus','Aperto de mãos','Havel–Hakimi'],
 lessons:[
 ['Condições básicas','Para grafo simples de n vértices, 0≤d(v)≤n−1. A soma dos graus é par porque cada aresta conta em dois extremos.','Soma par e grau máximo permitido são condições necessárias, mas não bastam.'],
 ['Havel–Hakimi (complemento didático)','Ordene graus descrescente. Remova d₁ e subtraia 1 dos próximos d₁ termos. Repita até todos zeros (possível) ou surgir número negativo/impossibilidade (não gráfica).','Esse algoritmo complementa a leitura; não aparece de forma explícita nos slides destacados.'],
 ['Regularidade','Um grafo k-regular possui todos os graus iguais a k. Kₙ é (n−1)-regular; um ciclo Cₙ com n≥3 é 2-regular. Número de arestas: e=nk/2.','Um grafo 2-regular simples é união disjunta de ciclos, não necessariamente conexo.'],
 ['V/F com contraexemplo','Para refutar uma afirmação geral sobre grafos, procure o menor contraexemplo simples. Atenção à palavra “existe” versus “todo”.','Um único contraexemplo destrói uma universal, mas não uma afirmação existencial.']
 ],
 example:{title:'Sequência (3,3,2,2): possível?',steps:['Remova um 3 e reduza os próximos três: (2,1,1).','Remova o 2 e reduza os dois seguintes: (0,0).','Tudo zerou; a sequência é gráfica.']},
 trap:'A sequência (3,3,3,1) soma 10 e cada grau é ≤3, mas não é gráfica: após o procedimento aparecem incompatibilidades.',
 questions:[
 TF('Uma sequência de graus de grafo simples pode conter valor n se há n vértices.',false,'O maior grau possível é n−1, porque não há laço e um vértice não é adjacente a si mesmo.','Quantos outros vértices existem?'),
 Q('Qual das sequências em um grafo simples de 4 vértices é impossível somente pelo lema do aperto de mãos?', ['(2,2,1,1)','(3,2,2,2)','(3,3,2,2)','(1,1,1,1)'],1,'A soma 3+2+2+2=9 é ímpar, impossível por ∑graus=2e. As demais têm soma par.','Procure uma soma ímpar.'),
 Q('Qual é o grau de cada vértice em K₇?', ['5','6','7','12'],1,'Cada vértice é adjacente aos outros seis vértices, portanto tem grau 6.','Não conte o próprio vértice.'),
 TF('Uma sequência de graus em ordem decrescente, com soma par e graus ≤n−1, é sempre gráfica.',false,'Essas são condições necessárias, não suficientes; por exemplo (3,3,3,1) passa por ambas e não é gráfica.','Considere se as conexões exigidas podem realmente coexistir.',3),
 Q('Um grafo simples 4-regular com 9 vértices teria quantas arestas?', ['18','20','36','16'],0,'O somatório de graus é 9·4=36, logo 2e=36 e e=18.','Cada aresta aparece em dois graus.')
 ]
},
{
 id:'model',name:'Modelagem por conflitos',icon:'⚑',tier:'Prioridade máxima',blurb:'Transformar histórias em grafos coloríveis.',source:'13-graphs-planarity.pdf',pages:'108–113',exam:'2025: Q3 · 2026: Q8, Q12',tags:['Semáforos','Horários','Fases'],
 lessons:[
 ['Identifique as decisões','Em um cruzamento, cada movimento veicular permitido é um vértice do grafo de conflitos. Em uma agenda de provas, cada exame ou atividade é um vértice.','Não represente obrigatoriamente ruas como vértices: a unidade de conflito é a decisão simultânea.'],
 ['Transforme incompatibilidade em aresta','Ligue movimentos quando não podem ocorrer simultaneamente de forma segura. Ligue exames quando um aluno precisa fazer ambos e não pode fazer dois de uma vez.','Aresta significa incompatibilidade, não trajeto físico.'],
 ['Cores são recursos','Uma coloração própria representa atribuição de fases/turnos: vértices adjacentes precisam de fases distintas. A menor quantidade de fases é χ(G).','Dois movimentos sem aresta podem compartilhar fase, desde que não haja outro conflito.'],
 ['Prove o mínimo','Construa uma coloração com k cores para mostrar χ≤k. Exiba uma clique de tamanho k ou outro impedimento para k−1 cores, mostrando χ≥k.','A coloração gulosa pode usar mais fases que o necessário.']
 ],
 example:{title:'Três movimentos mutuamente incompatíveis',steps:['Modele cada movimento como A, B, C.','Como cada par conflita, o grafo é K₃.','Uma clique K₃ exige pelo menos três cores e três cores bastam. Logo são três fases mínimas.']},
 trap:'No cruzamento real, dois movimentos geometricamente cruzados não são sempre inseguros se forem segregados de outra forma. As arestas devem representar a regra de segurança definida no problema.',
 questions:[
 Q('Em um modelo de semáforos por coloração de vértices, o que representa uma aresta?', ['Uma rota que o carro percorre.','Dois movimentos que não podem ocorrer na mesma fase.','Um semáforo instalado.','Um horário livre.'],1,'A aresta representa incompatibilidade: seus extremos devem receber cores/fases diferentes.','O objetivo é impedir simultaneidade insegura.'),
 TF('Duas rotas não adjacentes no grafo de conflitos podem receber a mesma fase.',true,'A ausência de aresta entre elas significa que o modelo não registra conflito direto entre esses movimentos.','Qual é a restrição de uma coloração própria?'),
 Q('Quatro tarefas com todos os pares incompatíveis exigem quantas fases no mínimo?', ['2','3','4','5'],2,'O grafo de conflitos é K₄, uma clique de tamanho 4; cada vértice precisa de cor distinta.','Modele o grafo como completo.'),
 TF('Se achamos uma atribuição válida usando quatro fases, está provado que quatro é o mínimo.',false,'Atribuição válida prova apenas um limite superior. Falta demonstrar que nenhuma atribuição com três ou menos fases existe.','Diferencie achar solução de provar otimalidade.'),
 Q('Para provar que um problema precisa exatamente 3 fases, qual par de evidências é suficiente?', ['Uma solução com 3 fases e uma clique K₃.','Uma solução com 4 fases e uma clique K₂.','Uma solução com 3 fases sem outras informações.','Uma clique K₂ e cinco tarefas.'],0,'A solução com 3 dá χ≤3, e a clique K₃ dá χ≥3. Juntas implicam χ=3.','Busque limites inferior e superior coincidentes.')
 ]
},
{
 id:'flow',name:'Fluxo e corte mínimo',icon:'⇄',tier:'Ampliação',blurb:'Ferramenta extra para completar o material sem perder foco.',source:'12-graphs-network-flow.pdf',pages:'4–90',exam:'2026: Q10 (matching como aplicação)',tags:['Fluxo','Residual','Corte'],
 lessons:[
 ['Rede de fluxo','Grafo dirigido, com fonte s, sorvedouro t e capacidade c(e)≥0. Fluxo f(e) satisfaz 0≤f(e)≤c(e) e conservação nos vértices internos.','Não some capacidades de caminhos como se fossem independentes quando compartilham gargalo.'],
 ['Rede residual','Uma aresta residual para frente possui capacidade c−f; a reversa permite cancelar fluxo já enviado. Caminhos aumentantes mudam a solução.','A aresta reversa não precisa existir originalmente.'],
 ['Fluxo máximo e corte mínimo','O valor do fluxo máximo é igual à capacidade de um corte s−t mínimo. A ausência de caminho aumentante no residual certifica otimalidade.','A capacidade do corte soma somente arestas saindo do conjunto que contém s.'],
 ['Matching como fluxo','Matching bipartido pode ser modelado ligando s à partição esquerda, arestas entre partes e partição direita ao t, todas com capacidade 1.','Essa modelagem faz a ponte entre os módulos de matching e fluxo.']
 ],
 example:{title:'Gargalo de um caminho',steps:['Se o caminho s→a→t possui capacidades residuais 8 e 3,','o máximo que pode ser acrescentado ao longo dele é o mínimo: 3.','O fluxo de 3 consome toda a capacidade residual de a→t.']},
 trap:'Se o algoritmo só examina arestas originais e ignora reversas residuais, pode parar antes de encontrar o fluxo máximo.',
 questions:[
 Q('Se as capacidades residuais em um caminho aumentante são 5, 2 e 7, qual é o gargalo?', ['2','5','7','14'],0,'O acréscimo de fluxo é limitado pela menor capacidade ao longo do caminho, que é 2.','O caminho inteiro precisa suportar o mesmo acréscimo.'),
 TF('Em vértices internos de uma rede de fluxo, a soma de fluxo entrante deve ser igual à de fluxo de saída.',true,'A conservação exige que vértices internos não criem nem absorvam fluxo líquido.','Pense na continuidade de fluxo.',1),
 Q('Qual objeto certifica o valor ótimo de um fluxo máximo?', ['Um ciclo hamiltoniano.','Uma árvore geradora.','Um corte s−t de mesma capacidade.','Uma coloração própria.'],2,'O teorema fluxo máximo–corte mínimo garante igualdade do valor ótimo do fluxo com a menor capacidade de corte.','Existe um teorema de dualidade entre duas otimizações.'),
 TF('A rede residual pode conter arestas reversas que não estavam no grafo original.',true,'Uma aresta reversa tem capacidade residual ligada ao fluxo que pode ser cancelado/reencaminhado.','Pense em corrigir decisões anteriores.'),
 Q('No modelo de matching bipartido por fluxo, qual capacidade típica é atribuída às arestas ligadas à fonte e ao sorvedouro?', ['0','1','2','∞'],1,'Capacidade 1 impede usar o mesmo vértice em mais de uma aresta do matching.','Cada vértice pode pertencer a no máximo uma aresta selecionada.')
 ]
}
];
const M_BY_ID=Object.fromEntries(MODULES.map(m=>[m.id,m]));
const ALL_QUESTIONS=MODULES.flatMap(m=>m.questions.map((q,i)=>({...q,id:`${m.id}-${i}`,module:m.id,index:i})));


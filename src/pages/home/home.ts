import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    bienal: any[];

  constructor(public navCtrl: NavController) {

    //Variável que recebe todas as informações da Bienal
    this.bienal = [
      {
        id: '1',
        name: 'Sexta-feira, 06 de outubro',
        date: '10/15/2017',
        status: false,
        children: [
          {
            time: '14h',
            name: 'Programa MINC - Políticas do Setor de Livro, Leitura, Literatura e Bibliotecas – Abertura com Maria do Céu (Chefe Regional NE do Ministério da Cultura). Roda de diálogo com o representante do Minc/ Departamento de Livro, Leitura, Literatura e Bibliotecas (DLLLB) e Roberto Azoubel (chefe Substituto Regional NE Ministério da Cultura)'
          },
          {
            time: '15h',
            name: 'Alfaletrando - Alfabetização em foco: O Projeto Alfaletrando - Palestra com Priscila Angelina Silva da Costa Santos'
          },
          {
            time: '17h',
            name: 'Mesa de Abertura da XI Bienal Internacional do Livro de Pernambuco'
          },
          {
            time: '19h',
            name: 'Lima Barreto: A República e os direitos humanos - Walnice Nogueira Galvão lembra como Lima Barreto dedicou sua obra e sua vida à defesa da República e dos direitos humano, associando-o a autores como Euclides da Cunha e Machado de Assis.'
          }

        ]
      },
      {
        id: '2',
        name: 'Sábado, 07 de outubro',
        status: false,
        date: '10/07/2017',
        children: [
          {
            time: '10h',
            name: 'Doação de livros para professores'
          },
          {
            time: '11h',
            name: 'Apresentação cultural de cordel da Biblioteca Blanche Knopf e Programa Manuel Bandeira'
          },
          {
            time: '14h',
            name: 'Quiz interativo do MEC'
          },
          {
            time: '19h',
            name: 'Apresentação cultural com o ator Adriano Cabral e companhia: “Joaquim Nabuco em Todos os Tempos”'
          },
          {
            time: '20h',
            name: 'Distribuição de livros Joaquim Nabuco em Quadrinhos'
          }

        ]
      },
      {
        id: '3',
        name: 'Domingo, 08 de outubro',
        status: false,
        date: '10/08/2017',
        children: [
          {
            time: '10h30',
            name: 'Oficina Multimídia, exibição de vídeos da Massangana Multimídia'
          },
          {
            time: '14h',
            name: 'Quiz interativo do MEC'
          },
          {
            time: '17h',
            name: 'Políticas públicas para os povos ciganos'
          },
          {
            time: '18h30',
            name: 'Ressurreição e Revolução'
          },
          {
            time: '19h30',
            name: 'Apresentação cultural “Povos Ciganos”, do ator Adriano Cabral e companhia'
          }

        ]
      },
      {
        id: '4',
        name: 'Segunda-feira, 09 de outubro',
        status: false,
        date: '10/09/2017',
        children: [
          {
            time: '10h',
            name: 'Hora do Conto Joaquim Nabuco em Quadrinhos, com Adriano Cabral e companhia; Doação de livros Joaquim Nabuco em Quadrinhos',
          },
          {
            time: '11h',
            name: 'Oficina “Livro Artesanal”, pelas escolas participantes do Programa Manuel Bandeira, com a Biblioteca BlancheKnopf'
          },
          {
            time: '14h',
            name: 'Quiz interativo do MEC'
          },
          {
            time: '18h',
            name: 'Exibição do documentário curta metragem “Capibaribes”'
          },
          {
            time: '18h20',
            name: 'A Cultura do Rio - Mesa com Canário Caliari (Documentarista do Capibaribes) e InCiti/Parque Capibaribe.'
          },
          {
            time: '19h',
            name: 'O uso do folclore brasileiro hoje na sala de aula - Uma masterclass com a educadora Januária Cristina Alves, autora do Abecedário de personagens do folclore brasileiro, voltada a profissionais de educação e pesquisadores do nosso folclore.'
          },
          {
            time: '20h',
            name: 'Lançamentos da Editora Massangana - Pernambucanos, Pernambucanas'
          }
        ]
      },
      {
        id: '5',
        name: 'terça-feira, 10 de outubro',
        status: false,
        date: '10/10/2017',
        children: [
          {
            time: '10h',
            name: 'Palestra “Mulheres e Direitos Cidadãos”, com Izaura Fischer'
          },
          {
            time: '14h',
            name: 'Quiz interativo do MEC'
          },
          {
            time: '17h',
            name: 'Oficina de Fotografia – Narra Imagética: Fotografia de bolso com Ana Fonseca'
          },
          {
            time: '18h',
            name: 'Palestra “Cinema Acessível”, com Ana Farache, coordenadora do Cinema da Fundação/Museu'
          },
          {
            time: '19h',
            name: 'Palestra “Vivência Emocional para Jovens: Maria não vai com as outras!”, com a terapeuta Conceição Mendonça'
          }
        ]
      },
      {

        id: '6',
        name: 'Quarta-feira, 11 de outubro',
        status: false,
        date: '10/11/2017',
        children: [
          {
            time: '10h',
            name: 'Combate ao Bullying por Machismo e Homofobia, Evitando Evasão Escolar'
          },
          {
            time: '11h',
            name: 'Apresentação do Programa Educativo de Ações para a Educação no Semiárido, com a pesquisadora Edilene Pinto'
          },
          {
            time: '14h',
            name: 'Quiz interativo do MEC'
          },
          {
            time: '17h',
            name: 'Literatura e Visibilidade Trans - Mesa com a escritora Amaira Moira e com o escritor Chico Ludermir.'
          },
          {
            time: '19h',
            name: 'Sob a Luz de Clarice Lispector -Com a escritora Márcia Bastos e mediação de Sandro Sayão'
          }

        ]

      },
      {

        id: '7',
        name: 'Quinta-feira, 12 de outubro',
        status: false,
        date: '10/12/2017',
        children: [
          {
            time: '10h',
            name: 'Programa Educativo do Museu do Homem do Nordeste, Oficina “Vivendo o Museu”'
          },
          {
            time: '11h',
            name: 'Apresentação musical “Tim tim Por Tim tim”, com o cantor e compositor Júlio Morais e Amanda Menelau'
          },
          {
            time: '14h',
            name: 'Quiz interativo do MEC'
          },
          {
            time: '17h',
            name: 'Mariangêla Haddad –Do Traço a Palavra : O Livro'
          },
          {
            time: '18h',
            name: 'Quilombolas- Abertura com Maria do Céu (Chefe Regional NE do Ministério da Cultura) Palestra com Beth de Oxum (Ponto de Cultura/ Coco de Umbigada) e Fátima de 11 Negras.'
          },
          {
            time: '19h',
            name: 'Conferência “Direitos Humanos, Educação e Sociedade, com Sandro Sayão e José Allan Pereira'
          }
    
        ]
      },
      {
          id: '8',
          name: 'Sexta-feira, 13 de outubro',
          status: false,
          date: '10/13/2017',
          children: [
            {
              time: '11h',
              name: 'Hora do conto “Sexta-feira 13 e Assombrações”, com o ator Adriano Cabral e companhia'
            },
            {
              time: '14h',
              name: 'Quiz interativo do MEC'
            },
            {
              time: '17h',
              name: 'Vivência feminista na poesia',
              description: 'A escritora Cida Pedrosa promove uma masterclass para discutir a questão feminina que marca sua carreira literária desde os anos 80.'
            },
            {
              time: '19h',
              name: 'Palestra “Escola de Inovação e Políticas Públicas”, com Felipe Oriá, diretor da EIPP'
            }
            
          ]
      },
      {
        
          id: '9',
          name: 'Sábado, 14 de outubro',
          status: false,
          date: '10/14/2017',
          children: [
            {
              time: '10h',
              name: 'Doação de livros para professores'
            },
            {
              time: '11h',
              name: 'Hora do Conto “Bicentenário da Revolução de 1817”, com Adriano Cabral e companhia.'
            },
            {
              time: '14h',
              name: 'Quiz interativo do MEC'
            },
            {
              time: '18h30',
              name: 'Palestra “1817: Cotidianos da Revolução”, com Paulo Santos.'
            },
            {
              time: '19h30',
              name: 'Como fazer um perfil político hoje no Brasil. A reposta da revista Piauí Daniela Pinheiro revela o processo de descrever algumas das grandes celebridades políticas do país em meio à crise atual.'
            }
            
          ]
      },
      {
        
          id: '10',
          name: 'Domingo, 15 de outubro',
          status: false,
          date: '10/15/2017',
          children: [
            {
              time: '10h',
              name: 'Hora do Conto: “Fragmentos Poéticos”, com Adriano Cabral e companhia'
            },
            {
              time: '14h',
              name: 'Quiz interativo do MEC.'
            },
            {
              time: '15h',
              name: 'Lançamento da Revista Estudos Universitários com duas videoconferências: Grande Sertão Vereda segundo o olhar de Ariano Suassuna e a recepção dos Beatles no Brasil. (Editora Universitária)'
            },
            {
              time: '18h',
              name: 'Ricardo Chacal - Encontro com Chacal – Um dos principais poetas contemporâneos do Brasil, Chacal, fala do começo da sua carreira nos anos 70 e sua atuação na cena independente poética do País. *Com mediação de Igor Gomes.'
            },
            {
              time: '19h',
              name: 'Culturas transversais hoje no Brasil: do queerao brega – Um debate sobre as polêmicas recentes envolvendo as estéticas queer e brega com os professoresDenilson Lopes (UFRJ) e Thiago Soares (UFPE).'
            }
            
          ]
      }
    ]

    //Loop que ler as informações da variável 'bienal
    for(let i in this.bienal) {
      //Variável local que recebe a data atual
      let dateHoje = new Date().toDateString();
      //Variável local que recebe a data do evento da Bienal
      let dateBienal = new Date(this.bienal[i].date).toDateString();
      //Exibe no console a data do evento da Bienal
      console.log(dateBienal);
      //Exibe no console a data atual
      console.log(dateHoje);
      //Verifica se a data atual é igual a data do evento
      if(dateHoje == dateBienal) {
        //A variável 'status' recebe a negação booleana dela
        this.bienal[i].status = !this.bienal[i].status;
        //Exibe no console o evento que corresponde a data atual
        console.log(this.bienal[i]);

      }
    }

  }

  //Método que exibe e não exibe as informações da Bienal
  toggleSection(i){
    
           //A variável 'status' recebe a negação booleana dela
           this.bienal[i].status = !this.bienal[i].status;
       
      }

}

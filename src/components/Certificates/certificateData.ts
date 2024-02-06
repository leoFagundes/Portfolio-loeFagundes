interface Certificado {
  nome: string;
  instituicao: string;
  horas: string;
  ano: string;
  link: string;
}

export const certificados: Certificado[] = [
  {
    nome: "Ciência da Computação - Harvard, no Brasil",
    instituicao: "CC50",
    horas: "70",
    ano: "2022",
    link: "assets/pdf/CC50.pdf",
  },
  {
    nome: "Python Impressionador",
    instituicao: "Hashtag Treinamentos",
    horas: "179",
    ano: "2022",
    link: "assets/pdf/Python Impressionador - Leonardo Cantieri Taube Fagundes.pdf",
  },
  {
    nome: "Certificados da Alura",
    instituicao: "Alura",
    horas: "--",
    ano: "2023>",
    link: "-",
  },
  {
    nome: "Excel Intermediário - Presencial",
    instituicao: "Dytz Informática",
    horas: "20",
    ano: "2022",
    link: "assets/pdf/Certificado Excel.pdf",
  },
  {
    nome: "Python 3 - Mundo 1",
    instituicao: "Curso em vídeo",
    horas: "40",
    ano: "2022",
    link: "assets/pdf/Python-3-Mundo-1-40-Horas-Certificado-Curso-em-Video.pdf",
  },
  {
    nome: "LAC4 - Segurança da informação",
    instituicao: "GSI",
    horas: "8",
    ano: "2023",
    link: "assets/pdf/Certificado - LAC4.pdf",
  },
];

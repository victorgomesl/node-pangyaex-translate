const fs = require('fs');
const iconv = require('iconv-lite');
const {Translate} = require('@google-cloud/translate').v2;

const translate = new Translate({key: 'SuaChaveAPIGoogleAqui'});

const translateText = async (text, sourceLang = 'ko', targetLang = 'en') => {
  try {
    console.log(`Traduzindo: "${text.substring(0, 30)}..."`);
    const [translation] = await translate.translate(text, {from: sourceLang, to: targetLang});
    console.log(`Tradução recebida: "${translation}"`); // Adicione este log
    return translation;
  } catch (error) {
    console.error('Erro na tradução:', error);
    return text; // Retorna o texto original em caso de erro
  }
};

const translateFile = async (sourceFile, originalEncoding = 'EUC-KR') => {
  console.log(`Iniciando a leitura do arquivo: ${sourceFile}`);
  // Leia o arquivo sem especificar a codificação para obter um buffer
  const buffer = fs.readFileSync(sourceFile);
  // Decodifica o buffer para texto usando a codificação original
  const data = iconv.decode(buffer, originalEncoding);
  if (data) {
    console.log("Arquivo lido com sucesso.");
  } else {
    console.log("O arquivo está vazio ou não foi possível ler.");
    return;
  }
  const strings = data.split('\u0000');
  let translations = [];

  for (let i = 0; i < strings.length; i++) {
    console.log(`Processando string ${i + 1} de ${strings.length}`);
    const translated = await translateText(strings[i]);
    translations.push(translated);
  }

  // Codifica as traduções de volta para o buffer usando a codificação original
  const translatedBuffer = iconv.encode(translations.join('\u0000'), originalEncoding);
  // Escreve o buffer de volta para o arquivo, preservando a codificação original
  fs.writeFileSync(sourceFile, translatedBuffer);
  console.log(`Tradução concluída e arquivo original sobrescrito: ${sourceFile}`);
};

translateFile('arquivos/korea.dat');

const fs = require('fs');
const iconv = require('iconv-lite');
const {Translate} = require('@google-cloud/translate').v2;

const translate = new Translate({key: 'SuaChaveAPIGoogleAqui'});

const translateText = async (text, sourceLang = 'ja', targetLang = 'en') => {
  try {
    console.log(`Traduzindo: "${text.substring(0, 30)}..."`);
    const [translation] = await translate.translate(text, {from: sourceLang, to: targetLang});
    console.log(`Tradução recebida: "${translation}"`);
    return translation;
  } catch (error) {
    console.error('Erro na tradução:', error);
    return text; // Retorna o texto original em caso de erro
  }
};

const translateFile = async (sourceFile, originalEncoding = 'Shift_JIS') => {
  console.log(`Iniciando a leitura do arquivo: ${sourceFile}`);
  const buffer = fs.readFileSync(sourceFile);
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

  const translatedBuffer = iconv.encode(translations.join('\u0000'), originalEncoding);
  fs.writeFileSync(sourceFile, translatedBuffer);
  console.log(`Tradução concluída e arquivo original sobrescrito: ${sourceFile}`);
};

translateFile('arquivos/japan.dat');

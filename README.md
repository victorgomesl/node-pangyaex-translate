# Script de Tradução de Arquivos

Este script é uma ferramenta desenvolvida em Node.js para traduzir o conteúdo de arquivos de texto de um idioma para outro, usando a API do Google Cloud Translate. Ele suporta a leitura e escrita de arquivos em codificações específicas, como Shift_JIS e EUC-KR, utilizando o módulo `iconv-lite` para manipulação de codificações de caracteres.

## Pré-requisitos

- Node.js instalado no seu sistema.
- Uma chave de API válida do Google Cloud Translate.

## Instalação

1. Clone o repositório para sua máquina local.
2. No diretório clonado, execute `npm install` para instalar as dependências necessárias.
3. Substitua `'SuaChaveAPIGoogleAqui'` no script pela sua chave de API do Google Cloud Translate.

## Uso

O script é capaz de traduzir arquivos que contenham texto em japonês ou coreano para inglês. Ele aceita dois parâmetros principais: o caminho do arquivo a ser traduzido e a codificação original do arquivo (ex: 'Shift_JIS' para japonês ou 'EUC-KR' para coreano).

### Traduzindo um arquivo

Para executar a tradução de um arquivo, utilize o comando:

```bash
node nomeDoSeuScript.js
```

Substitua nomeDoSeuScript.js pelo nome do arquivo do script que você está executando.

### Arquivos Suportados
Este script foi testado com arquivos .dat contendo strings separadas por null (\u0000). Garanta que seus arquivos sigam este formato para que a tradução seja processada corretamente.

### Limitações
O script sobrescreve o arquivo original com a sua tradução. É recomendável fazer um backup antes de executar a tradução.
A API do Google Cloud Translate pode ter limitações de cota, portanto, esteja ciente do volume de texto que está traduzindo se estiver usando uma chave de API com limites restritos.

### Contribuições
Contribuições para o projeto são bem-vindas. Para contribuir:

Faça um fork do repositório.
Crie um branch com sua feature ou correção.
Faça commit das suas alterações.
Envie um pull request.

### Licença
Este projeto é licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

### Aviso Legal
Este script e seu autor não são afiliados ao Google ou ao serviço Google Cloud Translate.


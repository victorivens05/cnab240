import React from 'react'
import styled from '@emotion/styled'
import randomcolor from 'randomcolor'

type ItemCnabType = { de: number, ate: number, tipo: string, tamanho: number, descricao: string, cor?: string }
const FONT_WIDTH = 9
const configuracaoCnab = {
  headerArquivo0: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do Registro' },
    { de: 9, ate: 17, tipo: 'texto', tamanho: 9, descricao: 'Filler' },
    { de: 18, ate: 18, tipo: 'numero', tamanho: 1, descricao: 'Tipo de inscrição' },
    { de: 19, ate: 32, tipo: 'numero', tamanho: 14, descricao: 'Número de inscrição' },
    { de: 33, ate: 38, tipo: 'numero', tamanho: 6, descricao: 'Código convênio no Banco' },
    { de: 39, ate: 40, tipo: 'numero', tamanho: 2, descricao: 'Parâmetro de Transmissão' },
    { de: 41, ate: 41, tipo: 'texto', tamanho: 1, descricao: 'Ambiente Cliente' },
    { de: 42, ate: 42, tipo: 'texto', tamanho: 1, descricao: 'Ambiente CAIXA' },
    { de: 43, ate: 45, tipo: 'texto', tamanho: 3, descricao: 'Origem Aplicativo' },
    { de: 46, ate: 49, tipo: 'numero', tamanho: 4, descricao: 'Número de Versão' },
    { de: 50, ate: 52, tipo: 'texto', tamanho: 3, descricao: 'Filler' },
    { de: 53, ate: 57, tipo: 'numero', tamanho: 5, descricao: 'Agencia da conta corrente' },
    { de: 58, ate: 58, tipo: 'numero', tamanho: 1, descricao: 'DV da Agência' },
    { de: 59, ate: 70, tipo: 'numero', tamanho: 12, descricao: 'Número da conta' },
    { de: 71, ate: 71, tipo: 'texto', tamanho: 1, descricao: 'DV da conta' },
    { de: 72, ate: 72, tipo: 'texto', tamanho: 1, descricao: 'DV da agência/conta' },
    { de: 73, ate: 102, tipo: 'texto', tamanho: 30, descricao: 'Nome da empresa' },
    { de: 103, ate: 132, tipo: 'texto', tamanho: 30, descricao: 'Nome do Banco' },
    { de: 133, ate: 142, tipo: 'texto', tamanho: 10, descricao: 'Filler' },
    { de: 143, ate: 143, tipo: 'numero', tamanho: 1, descricao: 'Tipo de Arquivo' },
    { de: 144, ate: 151, tipo: 'numero', tamanho: 8, descricao: 'Data geração do arquivo' },
    { de: 152, ate: 157, tipo: 'numero', tamanho: 6, descricao: 'Hora geração do arquivo' },
    { de: 158, ate: 163, tipo: 'numero', tamanho: 6, descricao: 'NSA' },
    { de: 164, ate: 166, tipo: 'numero', tamanho: 3, descricao: 'Versão leiaute do arquivo' },
    { de: 167, ate: 171, tipo: 'numero', tamanho: 5, descricao: 'Densidade de gravação' },
    { de: 172, ate: 191, tipo: 'texto', tamanho: 20, descricao: 'Reservado do Banco' },
    { de: 192, ate: 211, tipo: 'texto', tamanho: 20, descricao: 'Reservado da Empresa' },
    { de: 212, ate: 222, tipo: 'texto', tamanho: 11, descricao: 'Uso exclusivo FEBRABAN' },
    { de: 223, ate: 225, tipo: 'texto', tamanho: 3, descricao: 'Ident. Cobrança' },
    { de: 226, ate: 228, tipo: 'numero', tamanho: 3, descricao: 'Uso exclusivo das VAN' },
    { de: 229, ate: 230, tipo: 'texto', tamanho: 2, descricao: 'Tipo de serviço' },
    { de: 231, ate: 240, tipo: 'texto', tamanho: 10, descricao: 'Ocorrência Cob. Sem papel' },
  ],
  headerLote1: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do Registro' },
    { de: 9, ate: 9, tipo: 'text', tamanho: 1, descricao: 'Tipo de Operação' },
    { de: 10, ate: 11, tipo: 'numero', tamanho: 2, descricao: 'Tipo de Serviço' },
    { de: 12, ate: 13, tipo: 'numero', tamanho: 2, descricao: 'Forma de Lançamento' },
    { de: 14, ate: 16, tipo: 'numero', tamanho: 3, descricao: 'Versão do leiaute do lote' },
    { de: 17, ate: 17, tipo: 'text', tamanho: 1, descricao: 'Filler' },
    { de: 18, ate: 18, tipo: 'numero', tamanho: 1, descricao: 'Tipo de inscrição' },
    { de: 19, ate: 32, tipo: 'numero', tamanho: 14, descricao: 'Número da inscrição' },
    { de: 33, ate: 38, tipo: 'numero', tamanho: 6, descricao: 'Código Convênio no Banco' },
    { de: 39, ate: 40, tipo: 'numero', tamanho: 2, descricao: 'Tipo de Compromisso' },
    { de: 41, ate: 44, tipo: 'numero', tamanho: 4, descricao: 'Código do compromisso' },
    { de: 45, ate: 46, tipo: 'text', tamanho: 2, descricao: 'Parâmetro de transmissão' },
    { de: 47, ate: 52, tipo: 'text', tamanho: 6, descricao: 'Filler' },
    { de: 53, ate: 57, tipo: 'numero', tamanho: 5, descricao: 'Agencia da Conta Corrente' },
    { de: 58, ate: 58, tipo: 'text', tamanho: 1, descricao: 'DV da Agência' },
    { de: 59, ate: 70, tipo: 'numero', tamanho: 12, descricao: 'Número da Conta Corrente' },
    { de: 71, ate: 71, tipo: 'text', tamanho: 1, descricao: 'DV da Conta Corrente' },
    { de: 72, ate: 72, tipo: 'text', tamanho: 1, descricao: 'Dígito da Agência/Conta' },
    { de: 73, ate: 102, tipo: 'text', tamanho: 30, descricao: 'Nome da Empresa' },
    { de: 103, ate: 142, tipo: 'text', tamanho: 40, descricao: 'Mensagem de Aviso 1' },
    { de: 143, ate: 172, tipo: 'text', tamanho: 30, descricao: 'Logradouro' },
    { de: 173, ate: 177, tipo: 'numero', tamanho: 5, descricao: 'Número no local' },
    { de: 178, ate: 192, tipo: 'text', tamanho: 15, descricao: 'Complemento' },
    { de: 193, ate: 212, tipo: 'text', tamanho: 20, descricao: 'Cidade' },
    { de: 213, ate: 217, tipo: 'numero', tamanho: 5, descricao: 'CEP' },
    { de: 218, ate: 220, tipo: 'text', tamanho: 3, descricao: 'Complemento CEP' },
    { de: 221, ate: 222, tipo: 'text', tamanho: 2, descricao: 'Sigla do Estado' },
    { de: 223, ate: 230, tipo: 'text', tamanho: 8, descricao: 'Uso exclusivo FEBRABAN' },
    { de: 231, ate: 240, tipo: 'text', tamanho: 10, descricao: 'Ocorrências' },
  ],
  detalheA: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 13, tipo: 'numero', tamanho: 5, descricao: 'NSR' },
    { de: 14, ate: 14, tipo: 'text', tamanho: 1, descricao: 'Cód. Segmento' },
    { de: 15, ate: 15, tipo: 'numero', tamanho: 1, descricao: 'Tipo Movimento' },
    { de: 16, ate: 17, tipo: 'numero', tamanho: 2, descricao: 'Código Instrução Movimento' },
    { de: 18, ate: 20, tipo: 'numero', tamanho: 3, descricao: 'Câmara compensação' },
    { de: 21, ate: 23, tipo: 'numero', tamanho: 3, descricao: 'Código Banco Destino' },
    { de: 24, ate: 28, tipo: 'numero', tamanho: 5, descricao: 'Código Agencia Destino' },
    { de: 29, ate: 29, tipo: 'text', tamanho: 1, descricao: 'DV Agência Destino' },
    { de: 30, ate: 41, tipo: 'numero', tamanho: 12, descricao: 'Conta Corrente Destino' },
    { de: 42, ate: 42, tipo: 'text', tamanho: 1, descricao: 'DV Conta Destino' },
    { de: 43, ate: 43, tipo: 'text', tamanho: 1, descricao: 'DV Agência/Conta Destino' },
    { de: 44, ate: 73, tipo: 'text', tamanho: 30, descricao: 'Nome do Terceiro (favorecido)' },
    { de: 74, ate: 79, tipo: 'numero', tamanho: 6, descricao: 'Número Documento atribuído pela Empresa' },
    { de: 80, ate: 92, tipo: 'text', tamanho: 13, descricao: 'Filler' },
    { de: 93, ate: 93, tipo: 'text', tamanho: 1, descricao: 'Tipo de conta – Finalidade TED' },
    { de: 94, ate: 101, tipo: 'numero', tamanho: 8, descricao: 'Data Vencimento' },
    { de: 102, ate: 104, tipo: 'text', tamanho: 3, descricao: 'Tipo da moeda' },
    { de: 105, ate: 119, tipo: 'numero', tamanho: 10, descricao: 'V99999 Quantidade de moeda' },
    { de: 120, ate: 134, tipo: 'numero', tamanho: 13, descricao: 'V99 Valor Lançamento' },
    { de: 135, ate: 143, tipo: 'numero', tamanho: 9, descricao: 'Número Documento Banco' },
    { de: 144, ate: 146, tipo: 'text', tamanho: 3, descricao: 'Filler' },
    { de: 147, ate: 148, tipo: 'numero', tamanho: 2, descricao: 'Quantidade de Parcelas' },
    { de: 149, ate: 149, tipo: 'text', tamanho: 1, descricao: 'Indicador de bloqueio' },
    { de: 150, ate: 150, tipo: 'numero', tamanho: 1, descricao: 'Indicador forma parcelamento' },
    { de: 151, ate: 152, tipo: 'text', tamanho: 2, descricao: 'Período ou dia vencimento' },
    { de: 153, ate: 154, tipo: 'numero', tamanho: 2, descricao: 'Número Parcela' },
    { de: 155, ate: 162, tipo: 'numero', tamanho: 8, descricao: 'Data da Efetivação' },
    { de: 163, ate: 177, tipo: 'numero', tamanho: 13, descricao: 'V99 Valor Real Efetivado' },
    { de: 178, ate: 217, tipo: 'text', tamanho: 40, descricao: 'Informação 2' },
    { de: 218, ate: 219, tipo: 'numero', tamanho: 2, descricao: 'Finalidade DOC' },
    { de: 220, ate: 229, tipo: 'text', tamanho: 10, descricao: 'Uso FEBRABAN' },
    { de: 230, ate: 230, tipo: 'numero', tamanho: 1, descricao: 'Aviso ao Favorecido' },
    { de: 231, ate: 240, tipo: 'text', tamanho: 10, descricao: 'Ocorrências' },
  ],
  detalheB: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 13, tipo: 'numero', tamanho: 5, descricao: 'NSR' },
    { de: 14, ate: 14, tipo: 'text', tamanho: 1, descricao: 'Cód. Segmento' },
    { de: 15, ate: 17, tipo: 'text', tamanho: 3, descricao: 'Uso FEBRABAN' },
    { de: 18, ate: 18, tipo: 'numero', tamanho: 1, descricao: 'Tipo Inscrição' },
    { de: 19, ate: 32, tipo: 'numero', tamanho: 14, descricao: 'Número Inscrição' },
    { de: 33, ate: 62, tipo: 'text', tamanho: 30, descricao: 'Logradouro' },
    { de: 63, ate: 67, tipo: 'numero', tamanho: 5, descricao: 'Número no local' },
    { de: 68, ate: 82, tipo: 'text', tamanho: 15, descricao: 'Complemento' },
    { de: 83, ate: 97, tipo: 'text', tamanho: 15, descricao: 'Bairro' },
    { de: 98, ate: 117, tipo: 'text', tamanho: 20, descricao: 'Cidade' },
    { de: 118, ate: 122, tipo: 'numero', tamanho: 5, descricao: 'CEP' },
    { de: 123, ate: 125, tipo: 'text', tamanho: 3, descricao: 'Complemento CEP' },
    { de: 126, ate: 127, tipo: 'text', tamanho: 2, descricao: 'UF do Estado' },
    { de: 128, ate: 135, tipo: 'numero', tamanho: 8, descricao: 'Data do Vencimento' },
    { de: 136, ate: 150, tipo: 'numero', tamanho: 13, descricao: 'V99 Valor do Documento' },
    { de: 151, ate: 165, tipo: 'numero', tamanho: 13, descricao: 'V99 Valor do Abatimento' },
    { de: 166, ate: 180, tipo: 'numero', tamanho: 13, descricao: 'V99 Valor do Desconto' },
    { de: 181, ate: 195, tipo: 'numero', tamanho: 13, descricao: 'V99 Valor da Mora' },
    { de: 196, ate: 210, tipo: 'numero', tamanho: 13, descricao: 'V99 Valor da Multa' },
    { de: 211, ate: 225, tipo: 'text', tamanho: 15, descricao: 'Código Documento Favorecido' },
    { de: 226, ate: 240, tipo: 'text', tamanho: 15, descricao: 'Uso da FEBRABAN' },
  ],
  detalheJ: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 13, tipo: 'numero', tamanho: 5, descricao: 'NSR' },
    { de: 14, ate: 14, tipo: 'text', tamanho: 1, descricao: 'Cód. Segmento' },
    { de: 15, ate: 15, tipo: 'numero', tamanho: 1, descricao: 'Tipo Movimento' },
    { de: 16, ate: 17, tipo: 'numero', tamanho: 2, descricao: 'Cód. Movimento' },
    { de: 18, ate: 20, tipo: 'numero', tamanho: 3, descricao: 'Banco destino' },
    { de: 21, ate: 21, tipo: 'numero', tamanho: 1, descricao: 'Cód. Moeda' },
    { de: 22, ate: 22, tipo: 'numero', tamanho: 1, descricao: 'DV Cód. Barras' },
    { de: 23, ate: 26, tipo: 'numero', tamanho: 4, descricao: 'Fator de vencimento' },
    { de: 27, ate: 36, tipo: 'numero', tamanho: 8, descricao: 'v99 Valor do Documento' },
    { de: 37, ate: 61, tipo: 'text', tamanho: 25, descricao: 'Campo Livre' },
    { de: 62, ate: 91, tipo: 'text', tamanho: 30, descricao: 'Nome do Cedente' },
    { de: 92, ate: 99, tipo: 'numero', tamanho: 8, descricao: 'Data Vencimento' },
    { de: 100, ate: 114, tipo: 'numero', tamanho: 13, descricao: 'v99 Valor do Título' },
    { de: 115, ate: 129, tipo: 'numero', tamanho: 13, descricao: 'v99 Valor do desconto + Abatimento' },
    { de: 130, ate: 144, tipo: 'numero', tamanho: 13, descricao: 'v99 Valor da mora + multa' },
    { de: 145, ate: 152, tipo: 'numero', tamanho: 8, descricao: 'Data do Pagamento' },
    { de: 153, ate: 167, tipo: 'numero', tamanho: 13, descricao: 'v99 Valor Pagamento' },
    { de: 168, ate: 182, tipo: 'numero', tamanho: 10, descricao: 'v99999 Quantidade Moeda' },
    { de: 183, ate: 188, tipo: 'numero', tamanho: 6, descricao: 'Número documento atribuído pela empresa' },
    { de: 189, ate: 202, tipo: 'text', tamanho: 14, descricao: 'Filler' },
    { de: 203, ate: 211, tipo: 'numero', tamanho: 9, descricao: 'Número documento atribuído pelo banco' },
    { de: 212, ate: 222, tipo: 'text', tamanho: 11, descricao: 'Filler' },
    { de: 223, ate: 224, tipo: 'numero', tamanho: 2, descricao: 'Código da Moeda' },
    { de: 225, ate: 230, tipo: 'text', tamanho: 6, descricao: 'Uso FEBRABAN' },
    { de: 231, ate: 240, tipo: 'text', tamanho: 10, descricao: 'Ocorrências do Retorno' },
  ],
  detalheJ52: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 13, tipo: 'numero', tamanho: 5, descricao: 'NSR' },
    { de: 14, ate: 14, tipo: 'text', tamanho: 1, descricao: 'Cód. Segmento' },
    { de: 15, ate: 15, tipo: 'text', tamanho: 1, descricao: 'Uso FEBRABAN' },
    { de: 16, ate: 17, tipo: 'text', tamanho: 2, descricao: 'Cód. Movimento' },
    { de: 18, ate: 19, tipo: 'numero', tamanho: 2, descricao: 'Identificação de Registro' },
    { de: 20, ate: 20, tipo: 'numero', tamanho: 1, descricao: 'Tipo de Inscrição do Pagador' },
    { de: 21, ate: 35, tipo: 'numero', tamanho: 15, descricao: 'Número de Inscrição do Pagador' },
    { de: 36, ate: 75, tipo: 'text', tamanho: 40, descricao: 'Nome do Pagador' },
    { de: 76, ate: 76, tipo: 'numero', tamanho: 1, descricao: 'Tipo de Inscrição do Beneficiário' },
    { de: 77, ate: 91, tipo: 'numero', tamanho: 15, descricao: 'Número de Inscrição do Beneficiário' },
    { de: 92, ate: 131, tipo: 'text', tamanho: 40, descricao: 'Nome do Beneficiário' },
    { de: 132, ate: 132, tipo: 'numero', tamanho: 1, descricao: 'Tipo de Inscrição do Sacador/Avalista' },
    { de: 133, ate: 147, tipo: 'numero', tamanho: 15, descricao: 'Número de Inscrição do Sacador/Avalista' },
    { de: 148, ate: 187, tipo: 'text', tamanho: 40, descricao: 'Nome do Sacador/Avalista' },
    { de: 188, ate: 240, tipo: 'text', tamanho: 53, descricao: 'Uso FEBRABAN' },
  ],
  detalheO: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 13, tipo: 'numero', tamanho: 5, descricao: 'NSR' },
    { de: 14, ate: 14, tipo: 'text', tamanho: 1, descricao: 'Cód.Segmento' },
    { de: 15, ate: 15, tipo: 'numero', tamanho: 1, descricao: 'Tipo Movimento' },
    { de: 16, ate: 17, tipo: 'numero', tamanho: 2, descricao: 'Cód.Movimento' },
    { de: 18, ate: 61, tipo: 'numero', tamanho: 44, descricao: 'Código de Barras' },
    { de: 62, ate: 91, tipo: 'text', tamanho: 30, descricao: 'Nome da Concessionária / Órgão Público' },
    { de: 92, ate: 99, tipo: 'numero', tamanho: 8, descricao: 'Data do Vencimento' },
    { de: 100, ate: 107, tipo: 'numero', tamanho: 8, descricao: 'Data do Pagamento' },
    { de: 108, ate: 122, tipo: 'numero', tamanho: 13, descricao: 'Valor do Pagamento' },
    { de: 123, ate: 142, tipo: 'text', tamanho: 20, descricao: 'Número do Documento Atribuído pela Empresa(Seu Número)' },
    { de: 143, ate: 162, tipo: 'text', tamanho: 20, descricao: 'Número do Documento Atribuído pelo Banco(Nosso Número)' },
    { de: 163, ate: 230, tipo: 'text', tamanho: 68, descricao: 'Uso FEBRABAN' },
    { de: 231, ate: 240, tipo: 'text', tamanho: 10, descricao: 'Códigos das Ocorrências para Retorno' },
  ],
  detalheW: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 13, tipo: 'numero', tamanho: 5, descricao: 'NSR' },
    { de: 14, ate: 14, tipo: 'text', tamanho: 1, descricao: 'Cód.Segmento' },
    { de: 15, ate: 15, tipo: 'numero', tamanho: 1, descricao: 'NSR Complementar' },
    { de: 16, ate: 16, tipo: 'numero', tamanho: 1, descricao: 'Tipo / Identifica o Uso das Informações Complementares' },
    { de: 17, ate: 96, tipo: 'text', tamanho: 80, descricao: 'Informação Complementar 1' },
    { de: 97, ate: 176, tipo: 'text', tamanho: 80, descricao: 'Informação Complementar 2' },
    { de: 177, ate: 178, tipo: 'numero', tamanho: 2, descricao: 'Identificador do Tributo' },
    { de: 179, ate: 228, tipo: 'text', tamanho: 48, descricao: 'Informação Complementar Tributo' },
    { de: 229, ate: 230, tipo: 'text', tamanho: 2, descricao: 'Uso FEBRABAN' },
    { de: 231, ate: 240, tipo: 'text', tamanho: 10, descricao: 'Códigos das Ocorrências para Retorno' },
  ],
  detalheW1: [
    { de: 179, ate: 184, tipo: 'text', tamanho: 6, descricao: 'Código da Receita do Tributo' },
    { de: 185, ate: 186, tipo: 'text', tamanho: 2, descricao: 'Tipo de Identificação do Contribuinte' },
    { de: 187, ate: 200, tipo: 'text', tamanho: 14, descricao: 'Identificação do Contribuinte' },
    { de: 201, ate: 216, tipo: 'text', tamanho: 16, descricao: 'Campo Identificador do FGTS(GRF)' },
    { de: 217, ate: 225, tipo: 'text', tamanho: 9, descricao: 'Lacre da Conectividade Social' },
    { de: 226, ate: 227, tipo: 'text', tamanho: 2, descricao: 'Dígito do Lacre da Conectividade Social' },
    { de: 228, ate: 228, tipo: 'text', tamanho: 1, descricao: 'Uso FEBRABAN' },
  ],
  detalheN: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 13, tipo: 'numero', tamanho: 5, descricao: 'NSR' },
    { de: 14, ate: 14, tipo: 'text', tamanho: 1, descricao: 'Código Segmento no Reg.Detalhe' },
    { de: 15, ate: 15, tipo: 'numero', tamanho: 1, descricao: 'Tipo de Movimento' },
    { de: 16, ate: 17, tipo: 'numero', tamanho: 2, descricao: 'Código da Instrução do Movimento' },
    { de: 18, ate: 37, tipo: 'text', tamanho: 20, descricao: 'Número do Documento Atribuído pela Empresa(Seu Número)' },
    { de: 38, ate: 57, tipo: 'text', tamanho: 20, descricao: 'Número do Documento Atribuído pelo Banco(Nosso Número)' },
    { de: 58, ate: 87, tipo: 'text', tamanho: 30, descricao: 'Nome do Contribuinte' },
    { de: 88, ate: 95, tipo: 'numero', tamanho: 8, descricao: 'Data do Pagamento' },
    { de: 96, ate: 110, tipo: 'numero', tamanho: 13, descricao: 'Valor do Pagamento' },
    { de: 111, ate: 230, tipo: 'text', tamanho: 120, descricao: 'Informações Complementares' },
    { de: 231, ate: 240, tipo: 'text', tamanho: 10, descricao: 'Códigos das Ocorrências para Retorno' },
  ],
  darf: [
    { de: 111, ate: 116, tipo: 'text', tamanho: 6, descricao: 'Código da Receita do Tributo' },
    { de: 117, ate: 118, tipo: 'numero', tamanho: 2, descricao: 'Tipo de Identificação do Contribuinte' },
    { de: 119, ate: 132, tipo: 'numero', tamanho: 14, descricao: 'Identificação do Contribuinte' },
    { de: 133, ate: 134, tipo: 'text', tamanho: 2, descricao: 'Código de Identificação do Tributo' },
    { de: 135, ate: 142, tipo: 'numero', tamanho: 8, descricao: 'Período de Apuração' },
    { de: 143, ate: 159, tipo: 'numero', tamanho: 17, descricao: 'Número de Referência' },
    { de: 160, ate: 174, tipo: 'numero', tamanho: 13, descricao: 'Valor Principal' },
    { de: 175, ate: 189, tipo: 'numero', tamanho: 13, descricao: 'Valor da Multa' },
    { de: 190, ate: 204, tipo: 'numero', tamanho: 13, descricao: 'Valor dos Juros / Encargos' },
    { de: 205, ate: 212, tipo: 'numero', tamanho: 8, descricao: 'Data de Vencimento' },
    { de: 213, ate: 230, tipo: 'text', tamanho: 18, descricao: 'Uso FEBRABAN' },
  ],
  detalheBComplementarN: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 13, tipo: 'numero', tamanho: 5, descricao: 'NSR' },
    { de: 14, ate: 14, tipo: 'text', tamanho: 1, descricao: 'Cód.Segmento' },
    { de: 15, ate: 32, tipo: 'text', tamanho: 18, descricao: 'Uso FEBRABAN' },
    { de: 33, ate: 62, tipo: 'text', tamanho: 30, descricao: 'Logradouro' },
    { de: 63, ate: 67, tipo: 'numero', tamanho: 5, descricao: 'Número do Local' },
    { de: 68, ate: 82, tipo: 'text', tamanho: 15, descricao: 'Complemento' },
    { de: 83, ate: 97, tipo: 'text', tamanho: 15, descricao: 'Bairro' },
    { de: 98, ate: 117, tipo: 'text', tamanho: 20, descricao: 'Cidade' },
    { de: 118, ate: 125, tipo: 'numero', tamanho: 8, descricao: 'CEP' },
    { de: 126, ate: 127, tipo: 'text', tamanho: 2, descricao: 'Sigla do Estado' },
    { de: 128, ate: 138, tipo: 'text', tamanho: 11, descricao: 'Telefone' },
    { de: 139, ate: 240, tipo: 'text', tamanho: 111, descricao: 'Uso FEBRABAN' },
  ],
  traillerLote: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 17, tipo: 'text', tamanho: 9, descricao: 'Uso exclusivo FEBRABAN' },
    { de: 18, ate: 23, tipo: 'numero', tamanho: 6, descricao: 'Quantidade de Registros no Lote' },
    { de: 24, ate: 41, tipo: 'numero', tamanho: 16, descricao: 'Somatória dos Valores' },
    { de: 42, ate: 59, tipo: 'numero', tamanho: 13, descricao: 'Somatório Qtde Moeda' },
    { de: 60, ate: 65, tipo: 'numero', tamanho: 6, descricao: 'Número Aviso Débito' },
    { de: 66, ate: 230, tipo: 'text', tamanho: 165, descricao: 'Uso exclusivo FEBRABAN - 2' },
    { de: 231, ate: 240, tipo: 'text', tamanho: 10, descricao: 'Ocorrências' },
  ],
  traillerArquivo: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 17, tipo: 'text', tamanho: 9, descricao: 'Uso exclusivo FEBRABAN' },
    { de: 18, ate: 23, tipo: 'numero', tamanho: 6, descricao: 'Quantidade de Lotes no Arquivo' },
    { de: 24, ate: 29, tipo: 'numero', tamanho: 6, descricao: 'Quantidade de Registro do Arquivo' },
    { de: 30, ate: 35, tipo: 'numero', tamanho: 6, descricao: 'Quantidade de Contas para Conciliação' },
    { de: 36, ate: 240, tipo: 'text', tamanho: 205, descricao: 'Uso exclusivo FEBRABAN' },
  ],
  detalheZ: [
    { de: 1, ate: 3, tipo: 'numero', tamanho: 3, descricao: 'Código do Banco' },
    { de: 4, ate: 7, tipo: 'numero', tamanho: 4, descricao: 'Lote de Serviço' },
    { de: 8, ate: 8, tipo: 'numero', tamanho: 1, descricao: 'Código do registro' },
    { de: 9, ate: 13, tipo: 'numero', tamanho: 5, descricao: 'NSR' },
    { de: 14, ate: 14, tipo: 'text', tamanho: 1, descricao: 'Cód.Segmento' },
    { de: 15, ate: 78, tipo: 'numero', tamanho: 64, descricao: 'Autenticação para atender Legislação' },
    { de: 79, ate: 103, tipo: 'numero', tamanho: 25, descricao: 'Autenticação Bancária / Protocolo' },
    { de: 104, ate: 240, tipo: 'numero', tamanho: 0, descricao: 'Ocorrências' },
  ]
}

const tipos = Object.keys(configuracaoCnab)
tipos.forEach(tipo => configuracaoCnab[tipo].forEach(item => {
  item.cor = randomcolor({ luminosity: 'light' })
}))

function App () {
  const [value, setValue] = React.useState('')
  const segmentos = value ? value.split('\\n') : []
  return (
    <div>
      <div>
        <textarea value={value} onChange={e => setValue(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div>
        {segmentos.map((segmento, i) => {
          return (
            <Segmento segmento={segmento} key={i} />
          )
        })}
      </div>
    </div>
  )
}
App.Container = styled.div`
`

const Segmento = ({ segmento }) => {
  const { Container, helpers } = Segmento
  const tipoId = segmento.slice(7, 8)
  const detalhe = segmento.slice(13, 14)
  console.log({ tipoId, detalhe})
  if (!tipoId) return null

  const tipo = helpers.getTipo(tipoId, detalhe)

  return (
    <Container>
      {configuracaoCnab[tipo].map((pos, index) => {
        const v = segmento.slice(pos.de - 1, pos.ate)
        const cor = (pos as any).cor
        return (
          <Posicao
            key={index}
            tamanho={pos.tamanho}
            descricao={pos.descricao}
            valor={v}
            cor={cor}
          />
        )
      })}
    </Container>
  )
}
Segmento.helpers = (() => {
  function getTipo (tipo, detalhe): keyof typeof configuracaoCnab {
    if (tipo === '0') return 'headerArquivo0'
    if (tipo === '1') return 'headerLote1'
    if (tipo === '3') {
      if (detalhe === 'A') return 'detalheA'
      return 'detalheB'
    }
    if (tipo === '5') return 'traillerLote'
    return 'traillerArquivo'
  }
  return {
    getTipo,
  }
})()
Segmento.Container = styled.div`
  display: flex;
  width: ${FONT_WIDTH * 240}px;
  overflow: ellipsis;
`


const Posicao = ({ tamanho, descricao, valor, cor }) => {
  const { Container } = Posicao
  return (
    <Container tamanho={tamanho} title={descricao} cor={cor}>
      {valor}
    </Container>
  )
}
Posicao.Container = styled.div<{ tamanho: number, cor }>(props => `
  background-color: ${props.cor};
  width: ${props.tamanho * FONT_WIDTH}px;
  height: 14px;
  font-family: monospace;
`)

export default App

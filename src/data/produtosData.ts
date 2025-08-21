interface Itens {
  codigo: string;
  tipoDespesaId?: number;
  descricao?: string;
}

export interface Produtos {
  cnpj: string;
  razao?: string;
  itens: Itens[];
}

export const itensNota: Produtos[] = [
    {
        cnpj: "302007000168",
        razao: "INOVACAO SERVICOS E COMERCIO DE PRODUTOS HOSPITALARES LTDA",
        itens: [
            {
                codigo: "1013336",
                tipoDespesaId: 58,
                descricao: "KIT TRANSDUTOR PRESSAO DESCARTAVEL"
            },
        ]
    },
    {
        cnpj: "331788001190",
        razao: "AIR LIQUIDE BRASIL LTDA",
        itens: [
            {
                codigo: "10061000",
                tipoDespesaId: 243,
                descricao: "ONU  1073 OXIGENIO, LIQUIDO REFRIGERADO 2.2 (5.1) III OXIGENIO LIQUIDO MEDICINAL"
            },
        ]
    },
    {
        cnpj: "331788002324",
        razao: "AIR LIQUIDE BRASIL LTDA",
        itens: [
            {
                codigo: "10087004",
                tipoDespesaId: 243,
                descricao: "ONU  1072 OXIGENIO, COMPRIMIDO 2.2  (5.1) III OXIGENIO GASOSO MEDICINAL - 1 M3"
            },
            {
                codigo: "13031029",
                tipoDespesaId: 243,
                descricao: "ONU  1066 NITROGENIO, COMPRIMIDO 2.2 (  ) III NITROGENIO N50 - ALPHAGAZ 1 - CIL 10M3"
            },
            {
                codigo: "13033051",
                tipoDespesaId: 243,
                descricao: "ONU  1013 DIOXIDO DE CARBONO 2.2 (  ) III DIOXIDO DE CARBONO MEDICINAL SEM PESCADOR 4KG"
            },
            {
                codigo: "10061000",
                tipoDespesaId: 243,
                descricao: "ONU  1073 OXIGENIO, LIQUIDO REFRIGERADO 2.2 (5.1) III OXIGENIO LIQUIDO MEDICINAL"
            },
        ]
    },
    {
        cnpj: "874929000140",
        razao: "MED CENTER COMERCIAL LTDA",
        itens: [
            {
                codigo: "990200",
                tipoDespesaId: 228,
                descricao: "FITA ADESIVA 19MM X 50MT"
            },
            {
                codigo: "1891000",
                tipoDespesaId: 58,
                descricao: "KIT CATETER DUP LUMEN NIT CVC 7FRX20CM"
            },
            {
                codigo: "99400",
                tipoDespesaId: 58,
                descricao: "MASCARA N95 PFF2 BICO DE PATO AZ CAB"
            },
            {
                codigo: "1686000",
                tipoDespesaId: 58,
                descricao: "BISTURI DESCARTAVEL 11"
            },
            {
                codigo: "1254600",
                tipoDespesaId: 58,
                descricao: "COMPRESSA 13 FIOS GAZE 7,5X7,5 C/10 ES"
            },
            {
                codigo: "1482500",
                tipoDespesaId: 58,
                descricao: "ELETRODO P/MONIT ADULTO"
            },
            {
                codigo: "1258100",
                tipoDespesaId: 58,
                descricao: "MICRONEBULIZADOR INFANT P/OXIGENIO"
            },
            {
                codigo: "1917200",
                tipoDespesaId: 58,
                descricao: "SONDA FOLEY 18 2 VIAS - (CATETER) /"
            },
        ]
    },
    {
        cnpj: "4192876000138",
        razao: "CRISMED COMERCIAL HOSPITALAR LTDA",
        itens: [
            {
                codigo: "21967",
                tipoDespesaId: 58,
                descricao: "AVENTAL CIRURGICO ESTERIL SOFT C/ TIRAS G REF 227050"
            },
            {
                codigo: "22191",
                tipoDespesaId: 58,
                descricao: "AVENTAL DESC LAMINADO IMPERMEAVEL MANGA LONGA 40GR BRANCO 1,40 x 1,10 m"
            },
            {
                codigo: "21731",
                tipoDespesaId: 57,
                descricao: "BROMOPRIDA 4 MG/ML SOL OR CT FR PLAS OPC GOT X 20 ML"
            },
            {
                codigo: "22629",
                tipoDespesaId: 57,
                descricao: "CLARITROMICINA 500 MG PO LIOF SOL INFUS IV CT FA VD TRANS (G)"
            },
            {
                codigo: "17161",
                tipoDespesaId: 57,
                descricao: "CLORETO DE SUXAMETONIO 100 MG PO SOL INJ CT FA VD TRANS   SUCCINIL COLIN"
            },
            {
                codigo: "5810",
                tipoDespesaId: 58,
                descricao: "COLETOR URINA ADULTO 2000 ML C/100   TIPO SACO"
            },
            {
                codigo: "22565",
                tipoDespesaId: 58,
                descricao: "COLETOR URINA SIST FECHADO 2000 ML  [ANTI REFLUXO C/PONTO DE COLETA]"
            },
            {
                codigo: "21313",
                tipoDespesaId: 58,
                descricao: "COMPRESSA DE GAZE ESTERIL 7,5 X 7,5 ENV C/ 10   13 FIOS   NOBRE"
            },
            {
                codigo: "21057",
                tipoDespesaId: 58,
                descricao: "COMPRESSA ESTERIL ENV C/10 13 FIOS   [7,5X7,5] C/ RX  REF.28/11"
            },
            {
                codigo: "3722",
                tipoDespesaId: 57,
                descricao: "DIPROPIONATO BECLOMETASONA 0,4 MG/ML SUS NAS 2ML   CLENIL"
            },
            {
                codigo: "22023",
                tipoDespesaId: 58,
                descricao: "DOSADOR ORAL 03 ML [AZUL]"
            },
            {
                codigo: "22024",
                tipoDespesaId: 58,
                descricao: "DOSADOR ORAL 10 ML [AZUL]"
            },
            {
                codigo: "17905",
                tipoDespesaId: 57,
                descricao: "GLICOSE (10%) 100 MG/ML SOL INJ IV FR PLAS TRANS SIST FECH X 500 ML   GLICOSE"
            },
            {
                codigo: "17730",
                tipoDespesaId: 57,
                descricao: "GLICOSE + CLORETO DE SODIO (5%) 50 MG/ML + 9 MG/ML SOL INJ IV  FR PLAS TRANS SIST FECH X 500 ML   SOLUCAO GLICOFISIOLOGI"
            },
            {
                codigo: "6699",
                tipoDespesaId: 57,
                descricao: "METILSULFATO DE NEOSTIGMINA 0,5 MG/ML SOL INJ CT 50 AMP VD TRANS X 1 ML   NORMASTIG (S)"
            },
            {
                codigo: "17449",
                tipoDespesaId: 57,
                descricao: "NISTATINA 100.000 UI/ML SUS OR CT FR PLAS OPC C/CGT X 50 ML   GENERICO"
            },
            {
                codigo: "19339",
                tipoDespesaId: 58,
                descricao: "SERINGA DESC 20ML S/AG LUER LOCK"
            },
            {
                codigo: "15806",
                tipoDespesaId: 57,
                descricao: "SULFATO DE TERBUTALINA 0,5 MG/ML SOL INJ 1 ML (EMB HOSP)"
            },
            {
                codigo: "21429",
                tipoDespesaId: 57,
                descricao: "TEICOPLANINA 200 MG PO SOL INJ CT FA VD INC + SOL DIL X 3 ML   TEIPLAN"
            },
        ]
    },
    {
        cnpj: "4274988000138",
        razao: "ATIVA COMERCIAL HOSPITALAR LTDA",
        itens: [
            {
                codigo: "45772",
                tipoDespesaId: 57,
                descricao: "ÁCIDO TRANEXÂMICO 50MG/ML SOL INJ 5ML (GEN) CT C/ 100 AP/HIPOLABOR"
            },
            {
                codigo: "53648",
                tipoDespesaId: 57,
                descricao: "AERODINI 100MCG/DOSE AER SPRAY 200DOSES+ADAPTADOR/TEUTO"
            },
            {
                codigo: "46453",
                tipoDespesaId: 57,
                descricao: "AMOXICILINA 500MG (GEN) CT C/ 500 CAPS GEL DURA/TEUTO"
            },
            {
                codigo: "26434",
                tipoDespesaId: 57,
                descricao: "REPOFLOR 100MG FR C/ 12 CAPS GEL DURA/EMS/LEGRAND"
            },
            {
                codigo: "56452",
                tipoDespesaId: 57,
                descricao: "AGUA P/ INJ 500ML CX C/ 16 FR/FARMARIN"
            },
            {
                codigo: "56824",
                tipoDespesaId: 107,
                descricao: "ÁGUA P/ INJ 250ML CX C/ 50 FR/FARMARIN"
            },
            {
                codigo: "37714",
                tipoDespesaId: 57,
                descricao: "AMICACINA 500MG (250MG/ML) (GEN) SOL INJ CT C/ 50 AP 2ML/TEUTO"
            },
            {
                codigo: "34007",
                tipoDespesaId: 57,
                descricao: "AMIODARONA 50MG/ML (GEN) SOL INJ 3ML CX C/ 100 AP/HIPOLABOR"
            },
            {
                codigo: "35962",
                tipoDespesaId: 57,
                descricao: "ANDROCORTIL 500MG PÓ LIOF INJ S/DIL CT C/ 50 FA/TEUTO"
            },
            {
                codigo: "32979",
                tipoDespesaId: 57,
                descricao: "ATROFARMA 0,25MG/ML SOL INJ 1ML CX C/ 100 AP/FARMACE"
            },
            {
                codigo: "34175",
                tipoDespesaId: 57,
                descricao: "BUTIL ESCOPOL+DIPIRONA 4MG/ML + 500MG/ML SOL INJ 5ML (GEN) CT C/ 100AP/HIPOLABOR"
            },
            {
                codigo: "40373",
                tipoDespesaId: 57,
                descricao: "BUTIL ESCOPOLAMINA 10MG/ML (GEN) SOL OR 20ML PCT C/ 5 FR/HIPOLABOR"
            },
            {
                codigo: "40080",
                tipoDespesaId: 57,
                descricao: "CALNATE 900MG/G PÓ SUS OR CT C/ 60 ENV 30G/EUROFARMA"
            },
            {
                codigo: "56150",
                tipoDespesaId: 57,
                descricao: "CEFEPIMA 1G PÓ SOL INJ IM/IV (GEN) CX C/ 50 FA (IMPORTADO)/TEUTO"
            },
            {
                codigo: "53886",
                tipoDespesaId: 57,
                descricao: "CEFTRIAXONA 1G (GEN) PÓ P/ SOL INJ IV S/DIL CX C/ 100 FA/BLAU"
            },
            {
                codigo: "49384",
                tipoDespesaId: 57,
                descricao: "CETOPROFENO 50MG/ML SOL INJ IM 2ML (GEN) CT C/ 100 AP/HIPOLABOR"
            },
            {
                codigo: "31736",
                tipoDespesaId: 57,
                descricao: "CLINDAMICINA 150MG/ML (600MG) SOL INJ (GEN) 4ML CT C/ 100 AP/HIPOLABOR"
            },
            {
                codigo: "52532",
                tipoDespesaId: 57,
                descricao: "CLORETO DE SÓDIO 20% SOL INJ IV 10ML CX C/ 200 AP/FARMARIN"
            },
            {
                codigo: "49607",
                tipoDespesaId: 57,
                descricao: "DEXMEDETOMIDINA 100MCG/ML SOL INJ 2ML (GEN) CT C/ 5 FA/VOLPHARMA/C1"
            },
            {
                codigo: "37006",
                tipoDespesaId: 57,
                descricao: "DIMORF 0,2MG/ML SOL INJ 1ML EPIDURAL/INTRATECAL/IV EST C/50 AP/CRISTÁLIA/A1"
            },
            {
                codigo: "37830",
                tipoDespesaId: 57,
                descricao: "DIPIRONA SÓDICA 500MG/ML (GEN) SOL INJ 2ML CT C/ 100 AP/HIPOLABOR"
            },
            {
                codigo: "32152",
                tipoDespesaId: 57,
                descricao: "DOPAMINA 5MG/ML (GEN) SOL INJ 10ML CX C/ 50 AP/TEUTO"
            },
            {
                codigo: "53519",
                tipoDespesaId: 57,
                descricao: "DRAMIN B6 DL SOL INJ 10ML CX C/ 100 AP/COSMED/HYPERA"
            },
            {
                codigo: "41137",
                tipoDespesaId: 57,
                descricao: "ENCRISE 20U/ML SOL INJ 1ML CT C/ 10 AP/BIOLAB"
            },
            {
                codigo: "31850",
                tipoDespesaId: 57,
                descricao: "ETILEFRIL 10MG/ML SOL INJ CT 1ML C/ 6 AP/UNIAO QUIMICA"
            },
            {
                codigo: "37859",
                tipoDespesaId: 57,
                descricao: "FENITOINA 50MG/ML (GEN) SOL INJ 5ML CT C/ 72 AP/TEUTO/C1"
            },
            {
                codigo: "49131",
                tipoDespesaId: 57,
                descricao: "FENOCRIS 200MG (100MG/ML) SOL INJ 2ML IV/IM CT C/25 AP/CRISTÁLIA/B1"
            },
            {
                codigo: "37404",
                tipoDespesaId: 57,
                descricao: "FENTANILA 100MCG (50MCG/ML) (GEN) SOL INJ 2ML IV/EPIDURAL/IM CX C/50 AP/HIPOLABOR/A1"
            },
            {
                codigo: "36202",
                tipoDespesaId: 57,
                descricao: "GLICONATO DE CÁLCIO 10% SOL INJ IV 10ML CX C/ 200 AP/ISOFARMA"
            },
            {
                codigo: "54048",
                tipoDespesaId: 57,
                descricao: "GLICOSE 5% 250ML CX C/ 48 FR/FRESENIUS"
            },
            {
                codigo: "49335",
                tipoDespesaId: 57,
                descricao: "GLICOSE 5% 500ML CX C/ 30 FR/FRESENIUS"
            },
            {
                codigo: "53140",
                tipoDespesaId: 57,
                descricao: "HEPTRIS 100MG/ML (60MG) IV/SC SOL INJ 0,6ML CT C/ 2 SER+SIST SEG/MYLAN"
            },
            {
                codigo: "32567",
                tipoDespesaId: 57,
                descricao: "HYPOCAÍNA C/V 20MG/ML+0,005MG/ML SOL INJ C/V 20ML CX C/ 25 FA/HYPOFARMA"
            },
            {
                codigo: "40646",
                tipoDespesaId: 57,
                descricao: "LABCAÍNA 20MG/G GELE TOP 30G PCT C/10 BG/PHARLAB"
            },
            {
                codigo: "56400",
                tipoDespesaId: 57,
                descricao: "LACTBEN 667MG/ML SOL OR 120ML CX C/ 50 FR + CP MED (SABOR AMEIXA)/MAYBEN"
            },
            {
                codigo: "55630",
                tipoDespesaId: 57,
                descricao: "LEVOTIROXINA SÓDICA 25MCG (GEN) CT C/ 30CP/MERCK"
            },
            {
                codigo: "41123",
                tipoDespesaId: 57,
                descricao: "LIDOCAÍNA 100MG/ML (GEN) SOL TOP SPRAY 50ML/HIPOLABOR"
            },
            {
                codigo: "56972",
                tipoDespesaId: 57,
                descricao: "MEROPENEM 1G PÓ SOL INJ IV (GEN) CX C/ 10 FA/FRESENIUS"
            },
            {
                codigo: "51100",
                tipoDespesaId: 57,
                descricao: "METILPREDNISOLONA 125MG SOL INJ 2ML (GEN) CX C/ 25 FA+DIL 2ML/BLAU"
            },
            {
                codigo: "53810",
                tipoDespesaId: 57,
                descricao: "METRONIDAZOL 5MG/ML SOL INJ IV 100ML (GEN) CX C/ 50 BO PVC/JP"
            },
            {
                codigo: "36924",
                tipoDespesaId: 57,
                descricao: "MYTEDOM 10MG VO CT C/20 CP/CRISTÁLIA/A1"
            },
            {
                codigo: "36399",
                tipoDespesaId: 57,
                descricao: "NOREPINEFRINA 8MG (2MG/ML) SOL INJ IV 4ML (GEN) CX C/ 50AP/HIPOLABOR"
            },
            {
                codigo: "53939",
                tipoDespesaId: 57,
                descricao: "OMEPRAZOL 40MG PÓ LIOF P/ SOL INJ (GEN) CX C/ 25 FA + 25 AP DIL 10ML/TEUTO"
            },
            {
                codigo: "53554",
                tipoDespesaId: 57,
                descricao: "OMEPRAZOL 40MG PÓ P/ SOL INJ (GEN) CX C/ 20 FA + DIL 10ML/BLAU"
            },
            {
                codigo: "53209",
                tipoDespesaId: 57,
                descricao: "ONDANSETRONA 4MG SOL INJ 2ML (GEN) CX C/ 100 AP/HIPOLABOR"
            },
            {
                codigo: "56737",
                tipoDespesaId: 57,
                descricao: "OPPY 10MG/ML SOL INJ 1ML IV/IM/EPIDURAL/INTRATECAL CT C/ 50 AP/TEUTO/A1"
            },
            {
                codigo: "55333",
                tipoDespesaId: 57,
                descricao: "OXACILIL 500MG PÓ P/ SOL INJ S/DIL 1OML CX C/ 50 FA/FRESENIUS"
            },
            {
                codigo: "53376",
                tipoDespesaId: 57,
                descricao: "PARINEX 5.000UI/0,25 ML SOL INJ 0,25ML CT C/ 50 AP/HIPOLABOR"
            },
            {
                codigo: "53206",
                tipoDespesaId: 57,
                descricao: "PIPER+TAZO 4,5G PÓ SOL INJ (GEN) CX C/ 25 FA/FRESENIUS"
            },
            {
                codigo: "56038",
                tipoDespesaId: 57,
                descricao: "POLIMIXINA B 500.000UI PÓ P/ SOL INJ (GEN) CX C/ 25 FA/BLAU"
            },
            {
                codigo: "53897",
                tipoDespesaId: 57,
                descricao: "PROPOFOL 10MG/ML EMU INJ 20ML (GEN) CT C/ 5 AP/FRESENIUS/C1"
            },
            {
                codigo: "48079",
                tipoDespesaId: 57,
                descricao: "ROPIVACAÍNA 7,5MG/ML SOL INJ 20ML (GEN) CT C/ 5 AP/TEUTO"
            },
            {
                codigo: "56438",
                tipoDespesaId: 57,
                descricao: "SIMETICONA 75MG/ML EMU OR GTS 15ML (SABOR CEREJA)/CIMED"
            },
            {
                codigo: "52719",
                tipoDespesaId: 57,
                descricao: "SUCROFER 100MG (20MG/ML) SOL INJ 5ML IV CT C/5 FA/UNIÃO QUÍMICA"
            },
            {
                codigo: "32110",
                tipoDespesaId: 57,
                descricao: "SULFATO DE MAGNÉSIO 10% SOL INJ 10ML CX C/ 200 AP/ISOFARMA"
            },
            {
                codigo: "56615",
                tipoDespesaId: 57,
                descricao: "VANCOMICINA 500MG PÓ P/ SOL INJ IV (GEN) CX C/ 100 FA/BLAU"
            },
        ]
    },
    {
        cnpj: "5207715000133",
        razao: "PLÁTANUS FARMÁCIA DE MANIPULAÇÃO LTDA - EPP",
        itens: [
            {
                codigo: "208033",
                tipoDespesaId: 57,
                descricao: "NIMODIPINO 30MG CAPSULAS"
            },
            {
                codigo: "7897316801130",
                tipoDespesaId: 57,
                descricao: "ATROPINA (SULFATO) 0,5% 5ML #"
            },
            {
                codigo: "7897316801154",
                tipoDespesaId: 57,
                descricao: "ATROPINA (SULFATO) 1% 5ML"
            },
            {
                codigo: "7896112103776",
                tipoDespesaId: 57,
                descricao: "BENEUM 300MG 30CP REV TEUTO"
            },
            {
                codigo: "208143",
                tipoDespesaId: 58,
                descricao: "COLD CREAM TUBO 50G"
            },
            {
                codigo: "7896094922082",
                tipoDespesaId: 57,
                descricao: "DRAMIN B6 DL 100AMP"
            },
            {
                codigo: "7891317001056",
                tipoDespesaId: 57,
                descricao: "G ACETILCISTEINA 100MG 16ENV EUROFARMA"
            },
            {
                codigo: "7896181900122",
                tipoDespesaId: 57,
                descricao: "G ATENOLOL 25MG 30CP BIOSINTETICA"
            },
            {
                codigo: "7891317141967",
                tipoDespesaId: 57,
                descricao: "G BETA (DIP) + BETA (FOSF) 1AMP 1ML EUROFARMA"
            },
            {
                codigo: "7891317141974",
                tipoDespesaId: 57,
                descricao: "G BETA (DIP) + BETA (FOSF) 6AMP 1ML EUROFARMA"
            },
            {
                codigo: "7898146824450",
                tipoDespesaId: 57,
                descricao: "G CLOPIDOGREL 75MG 30CP BIOLAB"
            },
            {
                codigo: "7891317452971",
                tipoDespesaId: 57,
                descricao: "G DOMPERIDONA 1MG/ML 100ML EUROFARMA"
            },
            {
                codigo: "7896255717717",
                tipoDespesaId: 57,
                descricao: "TEOLONG 100MG 30CAP#"
            },
        ]
    },
    {
        cnpj: "5336395000111",
        razao: "ALMEIDA WOLFF COMERCIAL HOSPITALAR LTDA",
        itens: [
            {
                codigo: "70721",
                tipoDespesaId: 237,
                descricao: "TSI-41-1001  - SUPORTE PARA ESCOVAS EM ACRILICO  60L X 25A PARA PAREDE"
            },
            {
                codigo: "29297",
                tipoDespesaId: 237,
                descricao: "6008128 - DETERGENTE NEUTRO -  TECPON GOLD - 5L"
            },
            {
                codigo: "29097",
                tipoDespesaId: 237,
                descricao: "40500272 - DETERGENTE ENZIMÁTICO - ENZITEC 5E - GALÃO 5L"
            },
            {
                codigo: "70267",
                tipoDespesaId: 237,
                descricao: "6016649 - TECPON PRE LIMPEZA(1L SPRAY)"
            },
            {
                codigo: "71487",
                tipoDespesaId: 237,
                descricao: "FZV-SP-1930 - FITA ZEBRADA SISPACK AUTOCLAVE VAPOR 19X30"
            },
            {
                codigo: "70497",
                tipoDespesaId: 237,
                descricao: "TSI-2020 - INDICADOR BIOLOGICO P/ VAPOR - 20 MINUTOS"
            },
            {
                codigo: "70486",
                tipoDespesaId: 237,
                descricao: "TSI-B300 - BOWIE DICK PACOTE PRONTO COM FOLHA ALERTA - TECHSTERI"
            },
            {
                codigo: "29240",
                tipoDespesaId: 237,
                descricao: "005.00606-0 - PAPEL GRAU CIRúRGICO -10X100"
            },
            {
                codigo: "29235",
                tipoDespesaId: 237,
                descricao: "005.00608 - TUBULAR PADRAO PAPEL GRAU CIRÚRGICO - 20X100"
            },
            {
                codigo: "71208",
                tipoDespesaId: 237,
                descricao: "CS.0002 - EMBALAGEM P/ ESTERILIZACAO 40X40 SMS 50 GRS AZ"
            },
            {
                codigo: "71216",
                tipoDespesaId: 237,
                descricao: "CS.0026 - EMBALAGEM P/ ESTERILIZACAO 50X50 SMS 60 GRS AZ"
            },
            {
                codigo: "71217",
                tipoDespesaId: 237,
                descricao: "CS.0027 - EMBALAGEM P/ ESTERILIZACAO 60X60 SMS 60 GRS AZ"
            },
            {
                codigo: "71218",
                tipoDespesaId: 237,
                descricao: "CS.0028 - EMBALAGEM P/ ESTERILIZACAO 75X75 SMS 60 GRS AZ"
            },
            {
                codigo: "71220",
                tipoDespesaId: 237,
                descricao: "CS.0030 - EMBALAGEM P/ ESTERILIZACAO 100X100 SMS 60 GRS AZ"
            },
            {
                codigo: "29145",
                tipoDespesaId: 237,
                descricao: "AP  0630 - Avental Expurgo Laminado Sel FIX5"
            },
            {
                codigo: "71153",
                tipoDespesaId: 237,
                descricao: "L-LVG - LUVA NITRILICA SEM Pó TAMANHO G"
            },
            {
                codigo: "70481",
                tipoDespesaId: 237,
                descricao: "TSI-7035F - ETIQUETA DUPLA CAMADA 70 X 35 MM P/ IMPRESSÂO C/ IND. QUÍM. TIPO 1"
            },
            {
                codigo: "29352",
                tipoDespesaId: 237,
                descricao: "1035 - ROLO WIPER PRO 60 25CMX200M"
            },
            {
                codigo: "70896",
                tipoDespesaId: 237,
                descricao: "TSI-CV-R10M - INCUBADORA RAPIDA 6 EM 1 PARA INDICADORES BIOLOGICO TSI"
            },
            {
                codigo: "70600",
                tipoDespesaId: 237,
                descricao: "TSI-H300-2.0 - ESCOVA P/ CME RIGIDA AUTOCLAVÁVEL 30CMX2MMX25M"
            },
            {
                codigo: "70451",
                tipoDespesaId: 237,
                descricao: "TSI-T500 - INTEGRADOR VAPOR TIPO V 121/134C. TECHSTERI"
            },
        ]
    },
    {
        cnpj: "5847630000110",
        razao: "SOMASP PRODUTOS HOSPITALARES LTDA",
        itens: [
            {
                codigo: "90",
                tipoDespesaId: 58,
                descricao: "AGULHA DESC. SPINAL 27G 3-1/2 (408381) UNIDADE BD"
            },
            {
                codigo: "44008",
                tipoDespesaId: 57,
                descricao: "AMPICILINA 1000MG FRASCO AMPOLA S/DIL IM/IV (G) TEUTO"
            },
            {
                codigo: "58403",
                tipoDespesaId: 58,
                descricao: "ARTIGO ORTOPEDICO MOLDAVEL (ATADURA GESSADA) 10CM X 3M ROLO POLAR FIX"
            },
            {
                codigo: "57857",
                tipoDespesaId: 58,
                descricao: "ATADURA CREPOM (CREPE) INA 10CM X 1,8M 13 FIOS ROLO NEVE"
            },
            {
                codigo: "60422",
                tipoDespesaId: 58,
                descricao: "ATADURA CREPOM (CREPE) INA 15CM X 1,8M 13 FIOS ROLO NEVE"
            },
            {
                codigo: "60134",
                tipoDespesaId: 58,
                descricao: "ATADURA CREPOM (CREPE) INA 20CM X 1,8M 13 FIOS ROLO NEVE"
            },
            {
                codigo: "57912",
                tipoDespesaId: 57,
                descricao: "TRAMADOL 50MG CAPSULA  (G) EMS PORT. 344/98 (A2)"
            },
            {
                codigo: "57432",
                tipoDespesaId: 58,
                descricao: "BIOVACUO 3.2 DRENO DE SUCCAO 100 A 600ML SANFONADO UNIDADE BIOTEC"
            },
            {
                codigo: "59882",
                tipoDespesaId: 58,
                descricao: "BIOVAR COLETOR DRENAGEM EXTERNA N. EST. FRASCO 500ML BIOTEC"
            },
            {
                codigo: "46035",
                tipoDespesaId: 57,
                descricao: "BISSULFATO DE CLOPIDOGREL 75MG COMPRIMIDO (G) EMS"
            },
            {
                codigo: "58343",
                tipoDespesaId: 57,
                descricao: "BUTILBROMETO DE ESCOPOLAMINA 20MG/ML AMPOLA 1ML (G) HYPOFARMA"
            },
            {
                codigo: "60330",
                tipoDespesaId: 58,
                descricao: "CAMPO OPERATORIO ESTERIL DIONE C/ RX B65 25 X 28 PACOTE C/ 5 TELA AMED"
            },
            {
                codigo: "59727",
                tipoDespesaId: 58,
                descricao: "CATETER EPIDURAL ESTERIL 18G LUER LOCK PGC PORTEX"
            },
            {
                codigo: "3119",
                tipoDespesaId: 57,
                descricao: "CIPROFLOXACINO 500MG COMPRIMIDO (G) PRATI"
            },
            {
                codigo: "3176",
                tipoDespesaId: 57,
                descricao: "CLARITROMICINA 250MG SUSP ORAL FRASCO 60ML (G) EMS"
            },
            {
                codigo: "3061",
                tipoDespesaId: 57,
                descricao: "CLORETO DE POTASSIO 19,1% AMPOLA 10ML FARMACE"
            },
            {
                codigo: "60268",
                tipoDespesaId: 57,
                descricao: "CLORETO DE SODIO 0,9% 1000ML BOLSA BEKER"
            },
            {
                codigo: "60355",
                tipoDespesaId: 57,
                descricao: "CLORETO DE SODIO 0,9% AMPOLA 10ML FARMARIN"
            },
            {
                codigo: "58548",
                tipoDespesaId: 57,
                descricao: "CLORETO DE SODIO 0,9% BOLSA 1000ML EUROFARMA"
            },
            {
                codigo: "59893",
                tipoDespesaId: 57,
                descricao: "CLORETO DE SODIO 0,9% FRASCO 100ML FARMARIN"
            },
            {
                codigo: "59980",
                tipoDespesaId: 57,
                descricao: "CLORETO DE SODIO 0,9% FRASCO 250ML FARMARIN"
            },
            {
                codigo: "59981",
                tipoDespesaId: 57,
                descricao: "CLORETO DE SODIO 0,9% FRASCO 500ML FARMARIN"
            },
            {
                codigo: "42919",
                tipoDespesaId: 57,
                descricao: "CLOREXIDINA 1% SOL. AQUOSA ALMOTOLIA 100ML RIOHEX  RIOQUIMICA"
            },
            {
                codigo: "58617",
                tipoDespesaId: 57,
                descricao: "CLOREXIDINA 2% ESCOVA DESCARTAVEL RIOHEX SCRUB UNIDADE (510105247) RIOQUIMICA"
            },
            {
                codigo: "876",
                tipoDespesaId: 57,
                descricao: "CLOREXIDINA ALCOOLICA 0,5% 100ML ALMOTOLIA RIOHEX ( 510101609) RIOQUIMICA"
            },
            {
                codigo: "60465",
                tipoDespesaId: 58,
                descricao: "CURATIVO DE HIDROCOLOIDE EST.EXTRA FINO 10X10 CM WOUNDCARE H FP0107 UNIDADE POLAR FIX"
            },
            {
                codigo: "60092",
                tipoDespesaId: 58,
                descricao: "CURATIVO TEGADERM 1627 10 X 25 CM UNIDADE - 3M"
            },
            {
                codigo: "41700",
                tipoDespesaId: 57,
                descricao: "DEXCLORFENIRAMINA LIQ FRASCO 100ML (G) FARMACE"
            },
            {
                codigo: "2807",
                tipoDespesaId: 57,
                descricao: "DIAZEPAM 10MG AMPOLA 2ML (G) TEUTO PORT. 344/98 (B1)"
            },
            {
                codigo: "51942",
                tipoDespesaId: 57,
                descricao: "DOMPERIDONA 10MG COMPRIMIDO (G) EMS"
            },
            {
                codigo: "60087",
                tipoDespesaId: 58,
                descricao: "EQUIPO INFUSOR MULTIPLO 2 VIAS LUER SLIP IJ031 UNIDADE INJEX"
            },
            {
                codigo: "59411",
                tipoDespesaId: 58,
                descricao: "EQUIPO MICRO BURETA LL C/ CAMARA GRADUADA 150ML UNIDADE DESCARPACK"
            },
            {
                codigo: "56642",
                tipoDespesaId: 57,
                descricao: "ESPIRONOLACTONA 25MG COMPRIMIDO (G) EMS."
            },
            {
                codigo: "60063",
                tipoDespesaId: 58,
                descricao: "FILTRO BACTERIANO HMEF 48 H UNIDADE BECARE"
            },
            {
                codigo: "3788",
                tipoDespesaId: 57,
                descricao: "FUROSEMIDA 20MG AMPOLA 2ML (G) HYPOFARMA"
            },
            {
                codigo: "3715",
                tipoDespesaId: 57,
                descricao: "GENTAMICINA 80MG/2ML AMPOLA HYTAMICINA HYPOFARMA"
            },
            {
                codigo: "3167",
                tipoDespesaId: 57,
                descricao: "GLICOSE 50% AMPOLA 10ML FARMACE"
            },
            {
                codigo: "2443",
                tipoDespesaId: 57,
                descricao: "HIDROCORTISONA 100MG FRASCO AMPOLA S/DIL ANDROCORTIL TEUTO"
            },
            {
                codigo: "49794",
                tipoDespesaId: 57,
                descricao: "LIDOCAINA 1% S/V HYPOCAINA FRASCO AMPOLA  20ML HYPOFARMA"
            },
            {
                codigo: "60270",
                tipoDespesaId: 58,
                descricao: "LUVA CIRURGICA ESTERIL 7,0 PAR C/ PO 80495510064 MEDIX"
            },
            {
                codigo: "60271",
                tipoDespesaId: 58,
                descricao: "LUVA CIRURGICA ESTERIL 7,5 PAR C/ PO 80495510064 MEDIX"
            },
            {
                codigo: "51691",
                tipoDespesaId: 58,
                descricao: "MANTA AQ CORPO INT 30000 (HB004559009) 3M"
            },
            {
                codigo: "57954",
                tipoDespesaId: 57,
                descricao: "MIDAZOLAM 50MG AMPOLA 10ML (G) TEUTO PORT 344/98 (B1)"
            },
            {
                codigo: "2380",
                tipoDespesaId: 57,
                descricao: "NOREPINEFRINA  8MG/4ML AMPOLA (G) HIPOLABOR"
            },
            {
                codigo: "59202",
                tipoDespesaId: 57,
                descricao: "ONDANSETRONA 4MG AMPOLA 2ML (G) HYPOFARMA."
            },
            {
                codigo: "58782",
                tipoDespesaId: 57,
                descricao: "OXACILINA 500MG FRASCO AMPOLA SEM DILUENTE OXANON BLAU FARMACEUTICA"
            },
            {
                codigo: "58800",
                tipoDespesaId: 57,
                descricao: "PREDNISONA 20MG COMPRIMIDO (G) HIPOLABOR"
            },
            {
                codigo: "58746",
                tipoDespesaId: 57,
                descricao: "RIODEINE DERMO SUAVE DEGERMANTE (PVPI) 100ML ALMOTOLIA (510101306) RIOQUIMICA"
            },
            {
                codigo: "60448",
                tipoDespesaId: 57,
                descricao: "SIMETICONA 75MG FRASCO 15ML CIMED"
            },
            {
                codigo: "57805",
                tipoDespesaId: 57,
                descricao: "SINVASTATINA 20MG COMPRIMIDO (G) EMS"
            },
            {
                codigo: "58531",
                tipoDespesaId: 58,
                descricao: "SONDA ALIMENTACAO ENTERAL PED 06FR MARK MED"
            },
            {
                codigo: "449",
                tipoDespesaId: 58,
                descricao: "SONDA ASPIRO C/ VALVULA NR 06 PGC UNIDADE   MARK MED"
            },
            {
                codigo: "123",
                tipoDespesaId: 58,
                descricao: "SONDA ASPIRO C/ VALVULA NR 08  PGC UNIDADE MARK MED"
            },
            {
                codigo: "125",
                tipoDespesaId: 58,
                descricao: "SONDA ASPIRO C/ VALVULA NR 12 PGC UNIDADE MARK MED"
            },
            {
                codigo: "126",
                tipoDespesaId: 58,
                descricao: "SONDA ASPIRO C/ VALVULA NR 14 PGC UNIDADE  MARK MED"
            },
            {
                codigo: "59840",
                tipoDespesaId: 58,
                descricao: "SONDA ENDOTRAQUEAL ARAMADA C/ CUFF 8.0MM (TUBO) UNIDADE NEWSURGICAL"
            },
            {
                codigo: "885",
                tipoDespesaId: 58,
                descricao: "SONDA LEVINE NR 20 PGC UNIDADE MARK MED"
            },
            {
                codigo: "422",
                tipoDespesaId: 58,
                descricao: "SONDA LEVINE NR.18 PGC UNIDADE MARK MED"
            },
            {
                codigo: "555",
                tipoDespesaId: 58,
                descricao: "SONDA RETAL NR.10 PGC UNIDADE MARK MED"
            },
            {
                codigo: "1495",
                tipoDespesaId: 57,
                descricao: "SUXAMETONIO 100MG FRASCO AMPOLA SUCCITRAT BLAU FARMACEUTICA"
            },
        ]
    },
    {
        cnpj: "6065614000138",
        razao: "SUPERMEDICA DISTRIB HOSPITALAR LTDA",
        itens: [
            {
                codigo: "0012165",
                tipoDespesaId: 58,
                descricao: "BOLSA COLOSTOMIA REC.TRANSP.19-64MM C/15"
            },
            {
                codigo: "0009007",
                tipoDespesaId: 58,
                descricao: "CAMPO CIRURGICO ESTERIL TNT 100CMX100CM"
            },
            {
                codigo: "0018345",
                tipoDespesaId: 58,
                descricao: "CAPA P/ VIDEO CIRURGIA 15CMX2,5M DOBRADA"
            },
            {
                codigo: "0008965",
                tipoDespesaId: 57,
                descricao: "DICLOFENACO DIETILAMONIO GEL 60G (GEN)"
            },
            {
                codigo: "0021638",
                tipoDespesaId: 58,
                descricao: "EQUIPO CONEXAO 2 VIAS L.S NEONATAL C/20"
            },
            {
                codigo: "0001377",
                tipoDespesaId: 57,
                descricao: "KOLLAGENASE C/CLORANF POM 30G C/10 UN"
            },
            {
                codigo: "0013316",
                tipoDespesaId: 57,
                descricao: "NEOSTIGMINA 0,5MG/1ML C/03 AMP (GEN)"
            },
            {
                codigo: "0011703",
                tipoDespesaId: 57,
                descricao: "ORTOFTALALDEIDO 0,55% 5LT  PRONTO USO (OPA HLD)"
            },
            {
                codigo: "0012395",
                tipoDespesaId: 237,
                descricao: "QUATERNARIO AMONIO 750ML P. USO C/06 (SEPTPRO PLUS)"
            },
            {
                codigo: "0002238",
                tipoDespesaId: 57,
                descricao: "SACCHAROMYCES BOULARDII 100MG ADL/PED C/12 CPS (REPOFLOR)"
            },
            {
                codigo: "0005114",
                tipoDespesaId: 57,
                descricao: "SORO GLICO-FISIOL 250ML S.F. C/48 FR"
            },
            {
                codigo: "0015389",
                tipoDespesaId: 57,
                descricao: "SORO GLICO-FISIOL 500ML S.F. C/30 FR"
            },
            {
                codigo: "0000505",
                tipoDespesaId: 57,
                descricao: "SORO GLICOSADO 5% 1000ML S.F. C/10 BSA"
            },
            {
                codigo: "0021532",
                tipoDespesaId: 57,
                descricao: "SULFATO FERROSO 40MG C/510 CPR"
            },
        ]
    },
    {
        cnpj: "6135469000114",
        razao: "DATRIX INDUSTRIA E COMERCIO DE PRODUTOS HOSPITALARES LTDA",
        itens: [
            {
                codigo: "BD1VA",
                tipoDespesaId: 58,
                descricao: "BRACADEIRA ADULTO 01 VIA - Lote B13062025"
            },
            {
                codigo: "BD2VA",
                tipoDespesaId: 58,
                descricao: "BRACADEIRA ADULTO 02 VIAS - Lote B23052025"
            },
            {
                codigo: "LLA",
                tipoDespesaId: 241,
                descricao: "LAMPADA PARA LARINGOSCOPIO ADULTO - Lote 1617"
            },
            {
                codigo: "LLI",
                tipoDespesaId: 241,
                descricao: "LAMPADA PARA LARINGOSCOPIO INFANTIL - Lote 1617"
            },
            {
                codigo: "SOD20A",
                tipoDespesaId: 58,
                descricao: "SENSOR DE OXIMETRIA ADULTO LIFEMED - Lote S16042025"
            },
            {
                codigo: "SOD20Y",
                tipoDespesaId: 58,
                descricao: "SENSOR DE OXIMETRIA Y NEONATAL LIFEMED - Lote S15042025"
            },
        ]
    },
    {
        cnpj: "8231734000193",
        razao: "FUTURA COM.DE PROD.MEDICOS HOSP.LTDA",
        itens: [
            {
                codigo: "575045",
                tipoDespesaId: 57,
                descricao: "ALFAEPOETINA 4.000UI/ML 1ML FA CX C/20 ERITROPOIETINA"
            },
            {
                codigo: "574496",
                tipoDespesaId: 57,
                descricao: "AMPICILINA SODICA 1G PO LIOF CX C/50FA GENERICO (ANTIB)"
            },
            {
                codigo: "53315",
                tipoDespesaId: 57,
                descricao: "ATRACURIO 10MG/ML 5ML C/25 TRACUR"
            },
            {
                codigo: "568081",
                tipoDespesaId: 57,
                descricao: "BECLOMETASONA 400MCG/ML SUSP INAL 2ML C/10 FLACO CLENIL A"
            },
            {
                codigo: "568091",
                tipoDespesaId: 57,
                descricao: "BICARBONATO DE SODIO 8,4% 250ML CX C/35 FRASCOS"
            },
            {
                codigo: "573741",
                tipoDespesaId: 58,
                descricao: "CAMPO CIRURGICO ESTERIL FENESTRADO BASIC 1,60M X 1,40M"
            },
            {
                codigo: "574008",
                tipoDespesaId: 58,
                descricao: "CAMPO CIRURGICO SMS ESTERIL 1,00M X 1,00M"
            },
            {
                codigo: "569434",
                tipoDespesaId: 57,
                descricao: "CEFUROXIMA 750MG IV C/50 FA GENERICO"
            },
            {
                codigo: "570611",
                tipoDespesaId: 57,
                descricao: "COLAGENASE 0,6U/G C/ CLORANF. CX C/10BNG X 30G KOLLAGENASE"
            },
            {
                codigo: "568647",
                tipoDespesaId: 57,
                descricao: "DEXAMETASONA 4MG/ML 2,5ML CX C/ 50 AMP GENERICO"
            },
            {
                codigo: "574382",
                tipoDespesaId: 57,
                descricao: "DEXAMETASONA 4MG/ML 2,5MLCX C/120 AMP GENERICO"
            },
            {
                codigo: "568565",
                tipoDespesaId: 57,
                descricao: "DIMENIDRINATO+PIRIDOX+GLIC+FRUT IV 10ML C/100 DRAMIN B6 DL"
            },
            {
                codigo: "574975",
                tipoDespesaId: 57,
                descricao: "DIPRO BETAMET5MG+FOSF BETAMET 2MG SOL INJ 1MLC/6 BETATRINTA"
            },
            {
                codigo: "569523",
                tipoDespesaId: 57,
                descricao: "ENOXAPARINA SODICA 80MG/0,8ML C/2  SER C/ S.SEG HEPARINOX"
            },
            {
                codigo: "560192",
                tipoDespesaId: 57,
                descricao: "ESCETAMINA 50MG/ML 10ML C/25 FA KETAMIN (C1)"
            },
            {
                codigo: "53381",
                tipoDespesaId: 57,
                descricao: "FENTANILA 50MCG/ML 2ML C/50AMP IM/IV/EPIDURAL GENERICO  (A"
            },
            {
                codigo: "575349",
                tipoDespesaId: 57,
                descricao: "FENTANILA 50MCG/ML SOL INJ 5ML C/5 GENERICO (A1)"
            },
            {
                codigo: "571620",
                tipoDespesaId: 58,
                descricao: "FRALDA DESCARTAVEL GERIATRICA EG C/7"
            },
            {
                codigo: "571616",
                tipoDespesaId: 58,
                descricao: "FRALDA DESCARTAVEL GERIATRICA G C/8"
            },
            {
                codigo: "574134",
                tipoDespesaId: 57,
                descricao: "HEPARINA SODICA 5000UI/ML 5ML IV CX C/50 FA PARINEX"
            },
            {
                codigo: "568093",
                tipoDespesaId: 57,
                descricao: "LIDOCAINA 2% S/ VASO 20ML CX C/25 GENERICO"
            },
            {
                codigo: "568829",
                tipoDespesaId: 57,
                descricao: "METARAMINOL 10MG/ML 1ML CX C/25 AMP ARAMIN"
            },
            {
                codigo: "574388",
                tipoDespesaId: 57,
                descricao: "METOPROLOL 1MG/ML 5ML CX C/5 AMP  SP TARBET"
            },
            {
                codigo: "53385",
                tipoDespesaId: 57,
                descricao: "MIDAZOLAM 5MG/5ML 5ML C/100 AMP GENERICO (B1)"
            },
            {
                codigo: "27551",
                tipoDespesaId: 58,
                descricao: "MUCOPOLISSACARIDEO 5MG/G 40G TOPCOID"
            },
            {
                codigo: "575063",
                tipoDespesaId: 57,
                descricao: "NALOXONA 0,4MG/ML C/50AMP 1ML GENERICO (C1)"
            },
            {
                codigo: "573356",
                tipoDespesaId: 57,
                descricao: "NEOSTIGMINE 0,5MG/ML 1ML CX C/3 AP GENERICO"
            },
            {
                codigo: "568245",
                tipoDespesaId: 57,
                descricao: "NITROGLICERINA 5MG/ML AMP 5ML CX C/10 TRIDIL"
            },
            {
                codigo: "575455",
                tipoDespesaId: 57,
                descricao: "ROPIVACAINA 7,5MG SOL IV 20ML CX C/5 AP GENERICO"
            },
            {
                codigo: "574778",
                tipoDespesaId: 57,
                descricao: "SALBUTAMOL 100MCG CX C/1FR X 200DOSES SPRAY AERODINI"
            },
            {
                codigo: "53808",
                tipoDespesaId: 57,
                descricao: "SEVOFLURANO 100% SOL INAL 250ML C/1 FR GENERICO (C1)"
            },
            {
                codigo: "574753",
                tipoDespesaId: 57,
                descricao: "SIMETICONA 75MG/ML GTS FR 15ML GENERICO"
            },
            {
                codigo: "574751",
                tipoDespesaId: 57,
                descricao: "SOL GLICOFISIOLOGICA 500ML CX C/16  FRASCOS"
            },
            {
                codigo: "574749",
                tipoDespesaId: 57,
                descricao: "SOL GLICOSE 10% 500ML CX C/16 FR SISTEMA FECHADO"
            },
            {
                codigo: "568306",
                tipoDespesaId: 57,
                descricao: "TRAMADOL 100MG/2ML 2ML CX C/60AMP  GENERICO (A2)"
            },
        ]
    },
    {
        cnpj: "8651657000120",
        razao: "ALL SOLUTIONS MEDICAL PROD. MEDICOS HOSP. LTDA.",
        itens: [
            {
                codigo: "401642",
                tipoDespesaId: 58,
                descricao: "ELETRODO TEMPORARIO 6FR - DAIG"
            },
            {
                codigo: "406107",
                tipoDespesaId: 58,
                descricao: "INTRODUTOR HEM, FAST-CATH 12CM 7F"
            },
        ]
    },
    {
        cnpj: "8774906000175",
        razao: "HOSPDROGAS COMERCIAL LTDA  EPP",
        itens: [
            {
                codigo: "022.0264",
                tipoDespesaId: 57,
                descricao: "SUCCINIL COLIN (SUXAMETONIO) 100MG PO INJ IM/IV FR-AMP"
            },
        ]
    },
    {
        cnpj: "9034672000192",
        razao: "MAEVE PRODUTOS HOSPITALARES LTDA",
        itens: [
            {
                codigo: "060100028",
                tipoDespesaId: 237,
                descricao: "ACIDO PERACETICO 0,2% 5LT (VOXILON)"
            },
            {
                codigo: "040300305",
                tipoDespesaId: 58,
                descricao: "AGULHA DESC. 13X4,5 C/100"
            },
            {
                codigo: "040300473",
                tipoDespesaId: 58,
                descricao: "AGULHA DESC. 30X7,0 C/100"
            },
            {
                codigo: "040300813",
                tipoDespesaId: 58,
                descricao: "AGULHA RAQUI ESPINHAL 25G QUINCKE C/50"
            },
            {
                codigo: "040300486",
                tipoDespesaId: 58,
                descricao: "CATETER IV AG.20G C/DISP. C/100"
            },
            {
                codigo: "040301645",
                tipoDespesaId: 58,
                descricao: "CATETER IV AG.22G C/DISP. C/100"
            },
            {
                codigo: "040301627",
                tipoDespesaId: 58,
                descricao: "CATETER IV AG.24G C/DISP. C/100"
            },
            {
                codigo: "040300495",
                tipoDespesaId: 58,
                descricao: "CURATIVO ADESIVO REDONDO BEGE C/500"
            },
            {
                codigo: "040300068",
                tipoDespesaId: 58,
                descricao: "EQUIPO 2 VIAS C/CLAMP LS (POLIFIX)"
            },
            {
                codigo: "040301624",
                tipoDespesaId: 58,
                descricao: "EQUIPO MACRO C/INJ LATERAL LL PCT C/50"
            },
            {
                codigo: "040301234",
                tipoDespesaId: 58,
                descricao: "EQUIPO MACRO C/INJ LATERAL LS PCT C/25"
            },
            {
                codigo: "040300839",
                tipoDespesaId: 58,
                descricao: "LAMINA UNIVERSAL P/ TRICOTOMIZADOR CIRURGICO"
            },
            {
                codigo: "040200040",
                tipoDespesaId: 58,
                descricao: "MASCARA DESC. PFF-2 / N95 BRANCA C/25"
            },
            {
                codigo: "040200012",
                tipoDespesaId: 58,
                descricao: "MASCARA DESCARTAVEL TRIPLA C/ELASTICO PCT C/50"
            },
            {
                codigo: "040301377",
                tipoDespesaId: 58,
                descricao: "NYLON MON. PRETO 3-0 C/AG.3,0 3/8 45CM C/24"
            },
            {
                codigo: "040300231",
                tipoDespesaId: 58,
                descricao: "NYLON PRETO 2-0 C/AG. 2,0 CM 3/8 C/24"
            },
            {
                codigo: "040301600",
                tipoDespesaId: 58,
                descricao: "SERINGA 3ML S/AG. L.L C/1000"
            },
            {
                codigo: "040301593",
                tipoDespesaId: 58,
                descricao: "SERINGA 3ML S/AG. L.S C/1000"
            },
        ]
    },
    {
        cnpj: "9053134000145",
        razao: "ELFA MEDICAMENTOS SA",
        itens: [
            {
                codigo: "0024441",
                tipoDespesaId: 57,
                descricao: "ULTIVA  2 MG PO LIOF INJ CT 5 FA VD INC (A1)"
            },
        ]
    },
    {
        cnpj: "9395128000176",
        razao: "LIVE MEDICINE COM. IMP. PROD. CIRURG. MED. HOSPIT. LTDA.",
        itens: [
            {
                codigo: "3000107",
                tipoDespesaId: 244,
                descricao: "HASTE EQUINOXE UMERAL PRESS FIT 7MM"
            },
            {
                codigo: "3201000",
                tipoDespesaId: 244,
                descricao: "ADAPTADOR EQUINOXE UMERAL REVERSO(A)+0"
            },
            {
                codigo: "3202000",
                tipoDespesaId: 244,
                descricao: "PARAFUSO EQUINOXE REVERSO DE TORQUE"
            },
            {
                codigo: "3203800",
                tipoDespesaId: 244,
                descricao: "POLI LINER EQUINOXE UMERAL REVERSO 38MM"
            },
            {
                codigo: "3201505",
                tipoDespesaId: 244,
                descricao: "PARAFUSO EQUINOXE DE TRAVAMENTO EXACTECH"
            },
            {
                codigo: "3200138",
                tipoDespesaId: 244,
                descricao: "GLENOSFERA EQUINOXE REVERSO(A) 38MM"
            },
            {
                codigo: "3201501",
                tipoDespesaId: 244,
                descricao: "PLACA EQUINOXE GLENOIDAL REVERSO"
            },
            {
                codigo: "3202022",
                tipoDespesaId: 244,
                descricao: "PARAFUSO EQ.COMPRESSAO LOCKING 4.5X22MM"
            },
            {
                codigo: "3202026",
                tipoDespesaId: 244,
                descricao: "PARAFUSO EQ.COMPRESSAO LOCKING 4.5X26MM"
            },
            {
                codigo: "40000003000",
                tipoDespesaId: 244,
                descricao: "CIMENTO OSSEO SUBITON 40G"
            },
            {
                codigo: "140190090100",
                tipoDespesaId: 244,
                descricao: "LAMINA SAGITAL STD 19X90X1,00 (LH-01)"
            },
            {
                codigo: "3000113",
                tipoDespesaId: 244,
                descricao: "HASTE EQUINOXE UMERAL PRESS FIT 13MM"
            },
            {
                codigo: "3204200",
                tipoDespesaId: 244,
                descricao: "POLI LINER EQUINOXE UM.REVERSO 42MM+0"
            },
            {
                codigo: "3200142",
                tipoDespesaId: 244,
                descricao: "GLENOSFERA EQUINOXE REVERSO 42MM"
            },
            {
                codigo: "3202018",
                tipoDespesaId: 244,
                descricao: "PARAFUSO EQ.COMPRESSAO LOCKING 4.5X18MM"
            },
            {
                codigo: "3202038",
                tipoDespesaId: 244,
                descricao: "PARAFUSO EQ.COMPRESSAO LOCKING 4.5X38MM"
            },
            {
                codigo: "0234251-090",
                tipoDespesaId: 244,
                descricao: "SUTURFIX,SUTURA CIR.TRANCADA C/2AGULHAS"
            },
            {
                codigo: "3203803",
                tipoDespesaId: 244,
                descricao: "POLI LINER EQ.UMERAL REVERSO 38MM+2.5"
            },
            {
                codigo: "3000115",
                tipoDespesaId: 244,
                descricao: "HASTE EQUINOXE UMERAL PRESS FIT 15MM"
            },
            {
                codigo: "3202030",
                tipoDespesaId: 244,
                descricao: "PARAFUSO EQ.COMPRESSAO LOCKING 4.5X30MM"
            },
            {
                codigo: "3202034",
                tipoDespesaId: 244,
                descricao: "PARAFUSO EQ.COMPRESSAO LOCKING 4.5X34MM"
            },
            {
                codigo: "3000111",
                tipoDespesaId: 244,
                descricao: "HASTE EQUINOXE UMERAL PRESS FIT 11MM"
            },
        ]
    },
    {
        cnpj: "10829779000106",
        razao: "PROMEDICAL EQUIPAMENTOS MEDICOS LTDA",
        itens: [
            {
                codigo: "01513",
                tipoDespesaId: 58,
                descricao: "URETEST KIT 50 TST - EPPENDORF - RENYLAB P 28 25020256"
            },
        ]
    },
    {
        cnpj: "11206099000107",
        razao: "SUPERMED COM. E IMP. DE PROD. MED. E HOSPIT. LTDA",
        itens: [
            {
                codigo: "36170",
                tipoDespesaId: 58,
                descricao: "ABS GERIATRICO FD 08 PCT C/50 UND-KAIROS (Fornecedor: 4706, Lote: 23MA2B, Qtde: 1 ,Data Fab: 23/05/2025, Data"
            },
            {
                codigo: "37011",
                tipoDespesaId: 58,
                descricao: "AG. DESC. 40 X 12 C/100-SR (Fornecedor: 3118, Lote: M87, Qtde: 400 ,Data Fab: 01/01/2025, Data Val:"
            },
            {
                codigo: "33281",
                tipoDespesaId: 58,
                descricao: "ALCOOL 70% 100ML ALMOT.TRANS C/50-SULMAR (Fornecedor: 4704, Lote: 88, Qtde: 2 ,Data Fab: 07/03/2025, Data Val:"
            },
            {
                codigo: "34369",
                tipoDespesaId: 58,
                descricao: "AP DESC BARBEAR 2L ZELACARE C/05 D211 - ZELARA (Fornecedor: 4333, Lote: HWT241205, Qtde: 40 ,Data Fab:"
            },
            {
                codigo: "6303",
                tipoDespesaId: 57,
                descricao: "BACLOFEN 10MG 20 CP HOSP-TEUTO (Fornecedor: 4434, Lote: 2717242, Qtde: 1 ,Data Fab: 01/01/2025, Data Val:"
            },
            {
                codigo: "37449",
                tipoDespesaId: 58,
                descricao: "CAMARA ESPACADORA ADULTO HC189G-MULTILASER (Fornecedor: 2332, Lote: KIY20, Qtde: 20 ,Data Fab: 01/11/2024,"
            },
            {
                codigo: "37450",
                tipoDespesaId: 58,
                descricao: "CAMARA ESPACADORA INFANTIL HC189M-MULTILASER (Fornecedor: 2332, Lote: KIY17, Qtde: 10 ,Data Fab: 01/04/2024,"
            },
            {
                codigo: "31204",
                tipoDespesaId: 58,
                descricao: "CATETER CVC DUPLO LUMEN 4FRX13CM-BIOMED (Fornecedor: 2349, Lote: 2452110072, Qtde: 8 ,Data Fab: 22/10/2024,"
            },
            {
                codigo: "21827",
                tipoDespesaId: 57,
                descricao: "CLINDAMICINA 300MG 16CAP GEN-U.QUIMICA (Fornecedor: 1390, Lote: 2504416, Qtde: 8 ,Data Fab: 01/01/2025, Data"
            },
            {
                codigo: "31524",
                tipoDespesaId: 57,
                descricao: "DIPIRONA 500MG 200CP GEN HOSP-PRATI DONADUZZI (Fornecedor: 9706, Lote: 24K73B, Qtde: 4 ,Data Fab: 01/10/2024,"
            },
            {
                codigo: "12468",
                tipoDespesaId: 57,
                descricao: "FUROSEMIDA 20MG 60AMP 2ML GEN-TEUTO (Fornecedor: 4434, Lote: 9067392, Qtde: 63 ,Data Fab: 01/08/2023, Data"
            },
            {
                codigo: "35346",
                tipoDespesaId: 57,
                descricao: "HEPTRIS SD 60MG 02 SERINGAS (IV/SC)-MYLA (Fornecedor: 7767, Lote: AC11441C, Qtde: 40 ,Data Fab: 01/01/2024,"
            },
            {
                codigo: "14511",
                tipoDespesaId: 58,
                descricao: "MALHA TUBULAR 08CMX15MT RL-ORTOFEN (Fornecedor: 836, Lote: 04/25, Qtde: 3 ,Data Fab: 01/04/2025, Data Val:"
            },
            {
                codigo: "35990",
                tipoDespesaId: 58,
                descricao: "MASCARA TRIPLA C/CLIPS ELASTICO PACOTE C/50-MEGA (Fornecedor: 3948, Lote: 25/0007540000, Qtde: 9 ,Data Fab:"
            },
            {
                codigo: "11199",
                tipoDespesaId: 57,
                descricao: "PARINEX 5000UI 0,25ML 50AMP-HIPOLABOR (Fornecedor: 1898, Lote: U001/25M, Qtde: 64 ,Data Fab: 01/02/2025, Data"
            },
            {
                codigo: "11641",
                tipoDespesaId: 57,
                descricao: "SALBUTAMOL 0,5MG/ML 100AMP 1ML GEN-HIPOL (Fornecedor: 1898, Lote: AH-001/25M, Qtde: 1 ,Data Fab: 01/04/2025,"
            },
            {
                codigo: "29584",
                tipoDespesaId: 57,
                descricao: "SOL.RINGER C/LACTATO 500ML 20FR-ECOFLAC (Fornecedor: 3048, Lote: 25187129B3, Qtde: 1 ,Data Fab: 01/05/2025,"
            },
            {
                codigo: "30706",
                tipoDespesaId: 57,
                descricao: "SUCROFER 20MG/ML 5FAM 5ML IV - U.QUIMICA 15 A 25 (Fornecedor: 1390, Lote: B5H0362A, Qtde: 12 ,Data Fab:"
            },
            {
                codigo: "32822",
                tipoDespesaId: 58,
                descricao: "TERMOMETRO CLINICO DIGIT.BCO HC222-MULTILASER (Fornecedor: 2332, Lote: UNV206, Qtde: 10 ,Data Fab: 01/03/2024,"
            },
            {
                codigo: "9984",
                tipoDespesaId: 57,
                descricao: "TOPCOID GEL 5MG/G 40G-U.QUIMICA (Fornecedor: 1390, Lote: 2443007, Qtde: 10 ,Data Fab: 01/11/2024, Data Val:"
            },
        ]
    },
    {
        cnpj: "11206099000441",
        razao: "SUPERMED COM. E IMP. DE PROD. MED. E HOSPIT. LTDA",
        itens: [
            {
                codigo: "6826",
                tipoDespesaId: 58,
                descricao: "ABAIXADOR LINGUA MADEIRA C/100-THEOTO (Fornecedor: 261, Lote: 001, Qtde: 20 ,Data Fab: 02/01/2025, Data Val:"
            },
            {
                codigo: "16738",
                tipoDespesaId: 57,
                descricao: "ACETILCISTEINA 600MG 16ENV 5G GEN-EMS (Fornecedor: 4588, Lote: 4P3761, Qtde: 10 ,Data Fab: 01/02/2025, Data"
            },
            {
                codigo: "37003",
                tipoDespesaId: 57,
                descricao: "ACIDO VALPROICO 500MG 50CP REVESTIDO GEN HOSP-BIOLAB (Fornecedor: 2985, Lote: 50103003, Qtde: 7 ,Data Fab:"
            },
            {
                codigo: "37011",
                tipoDespesaId: 58,
                descricao: "AG. DESC. 40 X 12 C/100-SR (Fornecedor: 3118, Lote: M654, Qtde: 102 ,Data Fab: 15/04/2025, Data Val:"
            },
            {
                codigo: "21897",
                tipoDespesaId: 58,
                descricao: "AG.DESC.13 X 4,5 C/100-SR (Fornecedor: 7737, Lote: 346D4, Qtde: 38 ,Data Fab: 01/01/2025, Data Val:"
            },
            {
                codigo: "13435",
                tipoDespesaId: 58,
                descricao: "AG.DESC.30 X 08 C/100-DESCARPACK (Fornecedor: 918, Lote: SAGAAB018D, Qtde: 8 ,Data Fab: 01/10/2024, Data Val:"
            },
            {
                codigo: "8532",
                tipoDespesaId: 57,
                descricao: "AGUA P.INJECAO 200AMP 10ML PL-SAMTEC (Fornecedor: 15842, Lote: FWZ, Qtde: 44 ,Data Fab: 10/04/2025, Data Val:"
            },
            {
                codigo: "33281",
                tipoDespesaId: 58,
                descricao: "ALCOOL 70% 100ML ALMOT.TRANS C/50-SULMAR (Fornecedor: 4704, Lote: 87, Qtde: 8 ,Data Fab: 26/02/2025, Data Val:"
            },
            {
                codigo: "33129",
                tipoDespesaId: 58,
                descricao: "ALCOOL 70% 1LT TRANS C/12 DESINF-SULMAR (Fornecedor: 4704, Lote: Z30008, Qtde: 3 ,Data Fab: 23/04/2025, Data"
            },
            {
                codigo: "35507",
                tipoDespesaId: 58,
                descricao: "ALCOOL 70% ANTI-SEP.SACHE ESTERIL C/100-UNIQMED (Fornecedor: 4484, Lote: 24033036, Qtde: 600 ,Data Fab:"
            },
            {
                codigo: "28931",
                tipoDespesaId: 58,
                descricao: "ALGINATO CALCIO C/PRATA 15X15 C/10-VITAMEDIC (Fornecedor: 2300, Lote: 20241121, Qtde: 35 ,Data Fab:"
            },
            {
                codigo: "19741",
                tipoDespesaId: 57,
                descricao: "AMOXICILINA 250MG 150ML GEN-NEO QUIMICA (Fornecedor: 1113, Lote: B24G2655, Qtde: 5 ,Data Fab: 01/08/2024, Data"
            },
            {
                codigo: "130",
                tipoDespesaId: 58,
                descricao: "ATADURA DE GESSO 06CM X 2M C/20 FO 0229-POLAR FIX (Fornecedor: 2447, Lote: 022025, Qtde: 1 ,Data Fab:"
            },
            {
                codigo: "33037",
                tipoDespesaId: 58,
                descricao: "AV.CIRUR.EST.40G ML G-SPK (Fornecedor: 3624, Lote: AVE2512GR, Qtde: 1.300 ,Data Fab: 01/05/2025, Data Val:"
            },
            {
                codigo: "33068",
                tipoDespesaId: 58,
                descricao: "AV.DESC.ML 30GR BR C/PUNHO STD C/10-MEGA (Fornecedor: 3948, Lote: 25/0131004, Qtde: 1.000 ,Data Fab:"
            },
            {
                codigo: "6303",
                tipoDespesaId: 57,
                descricao: "BACLOFEN 10MG 20 CP HOSP-TEUTO (Fornecedor: 4434, Lote: 2717241, Qtde: 18 ,Data Fab: 01/12/2024, Data Val:"
            },
            {
                codigo: "11666",
                tipoDespesaId: 58,
                descricao: "BENZILP.BENZATINA(BEPEBEN) 1.200.000UI 50FAM-TEUTO (Fornecedor: 4160, Lote: 2505840, Qtde: 10 ,Data Fab:"
            },
            {
                codigo: "33698",
                tipoDespesaId: 58,
                descricao: "BISTURI DESC C/DISP. SEG N.11 INOX-WILTEX (Fornecedor: 67, Lote: 24935, Qtde: 100 ,Data Fab: 29/01/2025, Data"
            },
            {
                codigo: "35051",
                tipoDespesaId: 57,
                descricao: "BUSCOPAN 10MG 20DRAGEAS - COSMED (Fornecedor: 4230, Lote: J25C0019, Qtde: 15 ,Data Fab: 01/03/2025, Data Val:"
            },
            {
                codigo: "10208",
                tipoDespesaId: 57,
                descricao: "BUTIL.ESCOP.+DIPIR.100AMP 5ML GEN- HIPOLABOR (Fornecedor: 1898, Lote: H-033/25, Qtde: 9 ,Data Fab: 01/04/2025,"
            },
            {
                codigo: "23247",
                tipoDespesaId: 58,
                descricao: "C.G. 7,5 X 7,5 13 FIOS ESTERIL C/05 CX.400 FO 8407-EUROPA (Fornecedor: 2447, Lote: 052025, Qtde: 50 ,Data Fab:"
            },
            {
                codigo: "37504",
                tipoDespesaId: 57,
                descricao: "AMOXICILINA 500MG 21CAPS GEN-NEO QUIMICA BRAINFARMA (Fornecedor: 1113, Lote: B25C1112, Qtde: 5 ,Data Fab:"
            },
            {
                codigo: "27632",
                tipoDespesaId: 58,
                descricao: "CAMPO CIRURGICO ESTERIL SMS 0.75MX0.75M FENESTRADO C/90 FO 8205-POLAR (Fornecedor: 2447, Lote: 052025, Qtde: 4"
            },
            {
                codigo: "25135",
                tipoDespesaId: 58,
                descricao: "CAPA P/VIDEO 15X250CM DOBRADA C/100-ESTERILI MED (Fornecedor: 2044, Lote: 23407, Qtde: 1 ,Data Fab:"
            },
            {
                codigo: "27030",
                tipoDespesaId: 58,
                descricao: "CATETER IV 20G C/DISP.SEG.C/100-DESCARP (Fornecedor: 918, Lote: SCTPAB019I, Qtde: 13 ,Data Fab: 01/10/2024,"
            },
            {
                codigo: "25976",
                tipoDespesaId: 57,
                descricao: "CEFTRIAXONA 1G 50FAM IM/IV GEN-ABL (Fornecedor: 1000, Lote: 112047C, Qtde: 6 ,Data Fab: 01/02/2025, Data Val:"
            },
            {
                codigo: "11144",
                tipoDespesaId: 57,
                descricao: "CETOCONAZOL 20MG 30GR GEN-HIPOLABOR (Fornecedor: 1898, Lote: 630/24, Qtde: 10 ,Data Fab: 12/12/2024, Data Val:"
            },
            {
                codigo: "12772",
                tipoDespesaId: 57,
                descricao: "CITR. FENTANILA(A1) 78,5MCG(50MCG FENTAN.) 50AMP 10ML GEN. - HIPOLABOR (PORT.344/98) (Fornecedor: 1898, Lote:"
            },
            {
                codigo: "13389",
                tipoDespesaId: 57,
                descricao: "CL.BUPIVAC.+GLICOSE 0,5% 5MG/ML 100AMP 4ML GEN-HIPOLABOR (Fornecedor: 1898, Lote: AR-021/24, Qtde: 2 ,Data"
            },
            {
                codigo: "21995",
                tipoDespesaId: 57,
                descricao: "CL.LEVOBUPIVACAINA(NOVABUPI) 0,50% C/V 10EST 20ML SP-CRISTALIA 15 A 25 (Fornecedor: 2591, Lote: 50020279,"
            },
            {
                codigo: "4472",
                tipoDespesaId: 57,
                descricao: "CLARITROMICINA(KLARICID)IV 500MG C/1FAM-ABBOTT (Fornecedor: 1914, Lote: 73974TB24, Qtde: 175 ,Data Fab:"
            },
            {
                codigo: "11557",
                tipoDespesaId: 57,
                descricao: "CLOR.DE SODIO 20% 200AMP 10ML PL-SAMTEC (Fornecedor: 15842, Lote: WUN, Qtde: 4 ,Data Fab: 08/04/2025, Data"
            },
            {
                codigo: "19247",
                tipoDespesaId: 57,
                descricao: "CLOREX DEGERM 2% 100ML CX C/24-VICPHARMA (Fornecedor: 7744, Lote: M40337, Qtde: 4 ,Data Fab: 01/04/2025, Data"
            },
            {
                codigo: "35341",
                tipoDespesaId: 58,
                descricao: "COBERTURA P/OBITO PLASTICA 90X2,20 GG C/5-PIRENOPOLIS (Fornecedor: 4472, Lote: 4207-3, Qtde: 12 ,Data Fab:"
            },
            {
                codigo: "21523",
                tipoDespesaId: 58,
                descricao: "COL.PERF.CORT.13LT PARDO C/20-DESCARBOX ECOLOGIC (Fornecedor: 2014, Lote: 10151, Qtde: 1 ,Data Fab:"
            },
            {
                codigo: "21466",
                tipoDespesaId: 58,
                descricao: "CUR.CARVAO ATIVADO/PRATA 10,5X10,5CM C/10-CASEX REF.AG1010 (Fornecedor: 3953, Lote: 000047/2025PY, Qtde: 5"
            },
            {
                codigo: "23820",
                tipoDespesaId: 58,
                descricao: "CURAT.ALGINATO CALCIO 10X10CM C/10-VITAMEDICAL G5305 (Fornecedor: 2300, Lote: 20250211, Qtde: 12 ,Data Fab:"
            },
            {
                codigo: "20091",
                tipoDespesaId: 58,
                descricao: "DERMAEX AGE 100ML-NUTRIEX (Fornecedor: 2612, Lote: 0279622411, Qtde: 22 ,Data Fab: 01/11/2024, Data Val:"
            },
            {
                codigo: "1496",
                tipoDespesaId: 57,
                descricao: "DEXCLORFENIRAMINA 2MG/5ML 100ML GEN-HIPOLABOR (Fornecedor: 1898, Lote: 0721/24, Qtde: 30 ,Data Fab:"
            },
            {
                codigo: "37090",
                tipoDespesaId: 57,
                descricao: "DIAZEPAM 10MG 30 CP GEN HOSP-NEO QUIMICA (Fornecedor: 1113, Lote: B24C3015, Qtde: 1 ,Data Fab: 23/04/2024,"
            },
            {
                codigo: "7880",
                tipoDespesaId: 57,
                descricao: "DIMORF(A1) 10MG 50CP-CRISTALIA (PORT.344/98) (Fornecedor: 2591, Lote: 50017560, Qtde: 2 ,Data Fab: 01/08/2024,"
            },
            {
                codigo: "27328",
                tipoDespesaId: 57,
                descricao: "DOMPERIDONA 10MG 60CP GEN-E MS (Fornecedor: 335, Lote: 4J9681, Qtde: 3 ,Data Fab: 01/07/2024, Data Val:"
            },
            {
                codigo: "37036",
                tipoDespesaId: 57,
                descricao: "DORMEC 100MG CAIXA C/500 CP-IMEC (Fornecedor: 1641, Lote: 05250307, Qtde: 1 ,Data Fab: 01/02/2025, Data Val:"
            },
            {
                codigo: "31768",
                tipoDespesaId: 57,
                descricao: "EMPAK(C1) 300MG 30 CPS HOSP - BIOLAB (PORT.344/98) (Fornecedor: 2985, Lote: 40713493, Qtde: 19 ,Data Fab:"
            },
            {
                codigo: "37117",
                tipoDespesaId: 58,
                descricao: "EQ. MACRO FLEX. INJ. LAT FILT. AR+PARTIC L.SLIP 1,5MT PLAS C/25-DESCAR (Fornecedor: 918, Lote: SEPUAB041A,"
            },
            {
                codigo: "36638",
                tipoDespesaId: 58,
                descricao: "EQ. MICRO C/BURETA INJ. LAT FILT AR+PARTIC LUER LOCK 150ML C/5-BIOBASE (Fornecedor: 13545, Lote:"
            },
            {
                codigo: "30467",
                tipoDespesaId: 58,
                descricao: "EQ.DIET.ENT.FLEX.S/FIL.ESCAL. C/06 - BIOSANI (Fornecedor: 7824, Lote: 66959, Qtde: 167 ,Data Fab: 01/02/2025,"
            },
            {
                codigo: "2543",
                tipoDespesaId: 57,
                descricao: "FENOCRIS(B1) 100MG 200CP-CRISTALIA (PORT.344/98) (Fornecedor: 2591, Lote: 50022940, Qtde: 1 ,Data Fab:"
            },
            {
                codigo: "35523",
                tipoDespesaId: 58,
                descricao: "FILME TRANSPARENTE ROLO 10X10 PHARMAFIX-CIRURGICA FERNANDES (Fornecedor: 67, Lote: 15F24, Qtde: 250 ,Data Fab:"
            },
            {
                codigo: "31605",
                tipoDespesaId: 237,
                descricao: "FITA ADESIVA HOSP.19X50 C/66 RL-CIEX (Fornecedor: 2453, Lote: FC211/25-D, Qtde: 1 ,Data Fab: 22/04/2025, Data"
            },
            {
                codigo: "36986",
                tipoDespesaId: 57,
                descricao: "GLIOCORT 500MG 50 FRASCOS AMPOLA-FRESENIUS (Fornecedor: 2681, Lote: 78TA0457, Qtde: 1 ,Data Fab: 25/01/2024,"
            },
            {
                codigo: "31443",
                tipoDespesaId: 58,
                descricao: "GUIA INTUBACAO P/SONDA ENDO 14FR 5.0 A 10.0MM-WELL LEAD (Fornecedor: 67, Lote: 2408012519, Qtde: 70 ,Data Fab:"
            },
            {
                codigo: "25428",
                tipoDespesaId: 57,
                descricao: "HEM.METARAM.(ARAMIN) 10MG/ML 25AMP 1ML IM/IV-CRISTALIA (Fornecedor: 2591, Lote: 50020265, Qtde: 3 ,Data Fab:"
            },
            {
                codigo: "19153",
                tipoDespesaId: 58,
                descricao: "HEMOSPON ESPON.HEMOS.125X80X10MM C/1-MAQUIRA (Fornecedor: 1899, Lote: 077525, Qtde: 2 ,Data Fab: 20/02/2025,"
            },
            {
                codigo: "35525",
                tipoDespesaId: 58,
                descricao: "HIDROCOLOIDE EXTRA FINO 10CMX10CM C/10 FP 0107-POLAR FIX (Fornecedor: 2447, Lote: 15E24, Qtde: 6 ,Data Fab:"
            },
            {
                codigo: "11238",
                tipoDespesaId: 57,
                descricao: "HIDROCORTISONA(ANDROCORTIL)100MG 50FAM-TEUTO (Fornecedor: 4434, Lote: 2595760, Qtde: 24 ,Data Fab: 01/08/2024,"
            },
            {
                codigo: "28791",
                tipoDespesaId: 58,
                descricao: "HIDROGEL TB C/30GR-VITAMEDICA (Fornecedor: 2300, Lote: 20241011, Qtde: 10 ,Data Fab: 11/10/2024, Data Val:"
            },
            {
                codigo: "28210",
                tipoDespesaId: 57,
                descricao: "HIDROXIZINA XPE FR 100ML GEN-GLOBO (Fornecedor: 2398, Lote: A36A01425, Qtde: 15 ,Data Fab: 01/04/2025, Data"
            },
            {
                codigo: "36017",
                tipoDespesaId: 57,
                descricao: "HYBLUT SD 40MG 10 SERINGAS IV/SC - BRAINFARMA (Fornecedor: 4230, Lote: A1A7211C, Qtde: 120 ,Data Fab:"
            },
            {
                codigo: "32081",
                tipoDespesaId: 57,
                descricao: "KEFADIM 1GR 25FAM-ABL (Fornecedor: 1000, Lote: 112061C, Qtde: 2 ,Data Fab: 01/01/2025, Data Val: 31/12/2026)"
            },
            {
                codigo: "33298",
                tipoDespesaId: 58,
                descricao: "KIT CIR.UNIVERSAL EST.REF. KITSM0015BASIC - BLUECARE (Fornecedor: 4146, Lote: KTSM020425, Qtde: 18 ,Data Fab:"
            },
            {
                codigo: "23730",
                tipoDespesaId: 57,
                descricao: "LIDOGEL 2% GEL 50TB 30G-NEO QUIMICA (Fornecedor: 1113, Lote: B25C2651, Qtde: 9 ,Data Fab: 01/04/2025, Data"
            },
            {
                codigo: "30432",
                tipoDespesaId: 57,
                descricao: "LORATAMED 1MG/ML XAROPE 100ML HOSP-CIMED (Fornecedor: 1666, Lote: 2507273, Qtde: 45 ,Data Fab: 01/04/2025,"
            },
            {
                codigo: "27652",
                tipoDespesaId: 57,
                descricao: "LOSARTANA POT.50MG 30 CP REVESTIDOS GEN-NEO QUIM (Fornecedor: 1113, Lote: B24M1045, Qtde: 1 ,Data Fab:"
            },
            {
                codigo: "34406",
                tipoDespesaId: 58,
                descricao: "LUVA CIRURGICA 7,5 ESTERIL C/50 PARES-DESCARPACK (Fornecedor: 918, Lote: SACHAB019C, Qtde: 30 ,Data Fab:"
            },
            {
                codigo: "36584",
                tipoDespesaId: 58,
                descricao: "LUVA PARA PROCED. NAO ESTERIL VINIL S/PO P C/10-GLOMED (Fornecedor: 7801, Lote: IN24001962, Qtde: 1 ,Data Fab:"
            },
            {
                codigo: "14512",
                tipoDespesaId: 58,
                descricao: "MALHA TUBULAR 10CM X 15MT RL-ORTOFEN (Fornecedor: 836, Lote: 05/25, Qtde: 30 ,Data Fab: 02/05/2025, Data Val:"
            },
            {
                codigo: "34343",
                tipoDespesaId: 57,
                descricao: "METOPROLOL 50MG 30CP REVESTIDO LIBERACAO PROLONGADA GEN-CIMED (Fornecedor: 1666, Lote: C2501690, Qtde: 4 ,Data"
            },
            {
                codigo: "35392",
                tipoDespesaId: 57,
                descricao: "MIRADOR COLICA 20CP REVESTIDO- NEO QUIMICA (Fornecedor: 1113, Lote: B24K2480, Qtde: 75 ,Data Fab: 01/08/2024,"
            },
            {
                codigo: "23893",
                tipoDespesaId: 57,
                descricao: "MYTEDOM(A1) 5MG 20CP-CRISTALIA (PORT.344/98) (Fornecedor: 2591, Lote: 50020670, Qtde: 3 ,Data Fab: 01/10/2024,"
            },
            {
                codigo: "4203",
                tipoDespesaId: 57,
                descricao: "NISTATINA SUSP.ORAL 50ML GEN-PRATI DONADUZZI (Fornecedor: 9706, Lote: 25D23F, Qtde: 10 ,Data Fab: 01/03/2025,"
            },
            {
                codigo: "28417",
                tipoDespesaId: 57,
                descricao: "NISTATINA+OX.ZINC POM 60TB 60G GEN-CIMED (Fornecedor: 1666, Lote: 2504179, Qtde: 1 ,Data Fab: 01/02/2025, Data"
            },
            {
                codigo: "34056",
                tipoDespesaId: 57,
                descricao: "NUTRIFLEX PLUS BAG 1000ML FA84494 C/5-B.BRAUN (Fornecedor: 3255, Lote: 243637601, Qtde: 8 ,Data Fab:"
            },
            {
                codigo: "22819",
                tipoDespesaId: 57,
                descricao: "PARACET.+CODEI.500MG+30MG C/96 GEN-GEOLAB A2 (Fornecedor: 10112, Lote: 2503204, Qtde: 4 ,Data Fab: 01/03/2025,"
            },
            {
                codigo: "36691",
                tipoDespesaId: 57,
                descricao: "PARACETAMOL 750MG 20CP GEN-GLOBO (Fornecedor: 2398, Lote: A72A01124, Qtde: 15 ,Data Fab: 01/12/2024, Data Val:"
            },
            {
                codigo: "26573",
                tipoDespesaId: 57,
                descricao: "QUETIAPINA(C1) 25MG 200CP REV.GEN-CRISTALIA (PORT.344/98) (Fornecedor: 2591, Lote: 50013435, Qtde: 7 ,Data"
            },
            {
                codigo: "30094",
                tipoDespesaId: 58,
                descricao: "SERINGA DESC.03ML LOCK C/500-SR (Fornecedor: 3118, Lote: M617, Qtde: 4 ,Data Fab: 09/04/2025, Data Val:"
            },
            {
                codigo: "30096",
                tipoDespesaId: 58,
                descricao: "SERINGA DESC.05ML LOCK C/500-SR (Fornecedor: 3118, Lote: M551, Qtde: 15 ,Data Fab: 01/04/2025, Data Val:"
            },
            {
                codigo: "30097",
                tipoDespesaId: 58,
                descricao: "SERINGA DESC.05ML SLIP C/500-SR (Fornecedor: 3118, Lote: M689, Qtde: 1 ,Data Fab: 22/04/2025, Data Val:"
            },
            {
                codigo: "30098",
                tipoDespesaId: 58,
                descricao: "SERINGA DESC.10ML LOCK C/250-SR (Fornecedor: 3118, Lote: M668, Qtde: 20 ,Data Fab: 16/04/2025, Data Val:"
            },
            {
                codigo: "30099",
                tipoDespesaId: 58,
                descricao: "SERINGA DESC.10ML SLIP C/250-SR (Fornecedor: 3118, Lote: M707, Qtde: 8 ,Data Fab: 24/04/2025, Data Val:"
            },
            {
                codigo: "30101",
                tipoDespesaId: 58,
                descricao: "SERINGA DESC.20ML SLIP BL C/250-SR (Fornecedor: 3118, Lote: M147, Qtde: 4 ,Data Fab: 28/01/2025, Data Val:"
            },
            {
                codigo: "30103",
                tipoDespesaId: 58,
                descricao: "SERINGA DESC.60ML LOCK BC C/100-SR (Fornecedor: 3118, Lote: M656, Qtde: 1 ,Data Fab: 15/04/2025, Data Val:"
            },
            {
                codigo: "35382",
                tipoDespesaId: 58,
                descricao: "SISTEMA FECHADO ASPIRACAO ENDOTRAQUEAL N.8-HAIBREATH Lote: 2201-164, Qtde: 6 ,Data Fab: 25/07/2022, DataVal:"
            },
            {
                codigo: "27751",
                tipoDespesaId: 57,
                descricao: "SOL.DE GLICOSE 5% 500ML 30FR - FRESENIUS (Fornecedor: 2440, Lote: 74TM5767, Qtde: 8 ,Data Fab: 10/12/2024,"
            },
            {
                codigo: "29584",
                tipoDespesaId: 57,
                descricao: "SOL.RINGER C/LACTATO 500ML 20FR-ECOFLAC (Fornecedor: 3048, Lote: 25193167B2, Qtde: 50 ,Data Fab: 01/05/2025,"
            },
            {
                codigo: "32439",
                tipoDespesaId: 58,
                descricao: "SONDA FOLEY LATEX 2VIAS C/CUFF N.12 15-30CC C/10-BIOMASS (Fornecedor: 4172, Lote: HSAM22060108, Qtde: 1 ,Data"
            },
            {
                codigo: "34610",
                tipoDespesaId: 58,
                descricao: "SONDA FOLEY LATEX 2VIAS C/CUFF N.16 15-30CC C/10-MEDIX (Fornecedor: 1925, Lote: 2481416, Qtde: 2 ,Data Fab:"
            },
            {
                codigo: "32445",
                tipoDespesaId: 58,
                descricao: "SONDA FOLEY LATEX 2VIAS C/CUFF N.18 15-30CC C/10-BIOMASS (Fornecedor: 4172, Lote: HSAM22060111, Qtde: 3 ,Data"
            },
            {
                codigo: "37048",
                tipoDespesaId: 57,
                descricao: "SULPH 10MG/G (1%) CREME 50G-PRATI (Fornecedor: 9706, Lote: 24F19P, Qtde: 15 ,Data Fab: 01/06/2024, Data Val:"
            },
            {
                codigo: "26778",
                tipoDespesaId: 241,
                descricao: "SUPORTE P/ COL. PERFURO 13LT PC-DESCARBO (Fornecedor: 2014, Lote: 10838, Qtde: 5 ,Data Fab: 01/06/2025, Data"
            },
            {
                codigo: "36348",
                tipoDespesaId: 57,
                descricao: "SYNTHROID 50MCG 30CP-ABBOTT (Fornecedor: 1914, Lote: 1245610, Qtde: 4 ,Data Fab: 30/10/2024, Data Val:"
            },
            {
                codigo: "36442",
                tipoDespesaId: 58,
                descricao: "TAMPA OCLUSORA LUER MACHO/FEMEA C/200-ZELARA (Fornecedor: 4630, Lote: 20240830, Qtde: 48 ,Data Fab:"
            },
            {
                codigo: "17820",
                tipoDespesaId: 58,
                descricao: "UMIDIFIC.FR 250ML OXIGENIO UF110-UNITEC (Fornecedor: 8088, Lote: 459, Qtde: 1 ,Data Fab: 09/04/2025, Data Val:"
            },
            {
                codigo: "35295",
                tipoDespesaId: 57,
                descricao: "VASOPRIL 20MG 60CP-BIOLAB (Fornecedor: 2985, Lote: 41106143, Qtde: 2 ,Data Fab: 08/05/2025, Data Val:"
            },
        ]
    },
    {
        cnpj: "12047164000153",
        razao: "GLOBAL HOSPITALAR IMPORTACAO E COMERCIO S.A",
        itens: [
            {
                codigo: "390",
                tipoDespesaId: 57,
                descricao: "CEFUROXIMA SODICA 750MG PO INJ IV/IM VP CX C/ 50 FA QTD. 1.00 CX"
            },
            {
                codigo: "4359",
                tipoDespesaId: 57,
                descricao: "EMPAK 300MG CAP (C1) (C1)CX C/ 30 CA QTD. 16.00 CX"
            },
            {
                codigo: "1360",
                tipoDespesaId: 57,
                descricao: "KOLLAGENASE 0,6 UI/G BG POM VP"
            },
            {
                codigo: "3844",
                tipoDespesaId: 57,
                descricao: "MEROPENEM 1G PO INJ VP"
            },
            {
                codigo: "26",
                tipoDespesaId: 57,
                descricao: "NEPRESOL 20 MG/ML INJ 1 ML VP CX C/ 50 AP QTD. 1.00 CX"
            },
            {
                codigo: "2447",
                tipoDespesaId: 58,
                descricao: "OLEO MINERAL 100% 100 ML SOL OR 100 ML"
            },
            {
                codigo: "4780",
                tipoDespesaId: 57,
                descricao: "OSELFLU 75 MG CAP DURA CT BL CX C/ 10 CA QTD. 1.00 CX"
            },
        ]
    },
    {
        cnpj: "12514715000141",
        razao: "CANAL EQUIP. MEDICOS LTDA ME",
        itens: [
            {
                codigo: "105581",
                tipoDespesaId: 236,
                descricao: "BUCHA PLASTICA P/ CARENAGEM"
            },
            {
                codigo: "107725",
                tipoDespesaId: 236,
                descricao: "CJ BATERIA TUBULAR BARRFAB"
            },
            {
                codigo: "383423",
                tipoDespesaId: 241,
                descricao: "DISPLAY GRAFICO CONTROLE 107054"
            },
            {
                codigo: "107006",
                tipoDespesaId: 241,
                descricao: "MEMBRANA CONTROLE 107054"
            },
            {
                codigo: "107929",
                tipoDespesaId: 241,
                descricao: "SUPORTE DE FIXACAO DA CARENAGEM"
            },
        ]
    },
    {
        cnpj: "12904870000174",
        razao: "DATA EQUIPAMENTOS DE SEGURANCA LTDA",
        itens: [
            {
                codigo: "07395",
                tipoDespesaId: 58,
                descricao: "AVENTAL VINIL COM ENGATE 1,10X0,70M 0,20 RAVE00007 CA44668"
            },
            {
                codigo: "30334",
                tipoDespesaId: 234,
                descricao: "BOTINA NOBUCK BICO PVC 50B26-CB-BP CAFE TAM 37 CA45611"
            },
            {
                codigo: "30335",
                tipoDespesaId: 234,
                descricao: "BOTINA NOBUCK BICO PVC 50B26-CB-BP CAFE TAM 38 CA45611"
            },
            {
                codigo: "30336",
                tipoDespesaId: 234,
                descricao: "BOTINA NOBUCK BICO PVC 50B26-CB-BP CAFE TAM 39 CA45611"
            },
            {
                codigo: "30337",
                tipoDespesaId: 234,
                descricao: "BOTINA NOBUCK BICO PVC 50B26-CB-BP CAFE TAM 40 CA45611"
            },
            {
                codigo: "30338",
                tipoDespesaId: 234,
                descricao: "BOTINA NOBUCK BICO PVC 50B26-CB-BP CAFE TAM 41 CA45611"
            },
            {
                codigo: "30339",
                tipoDespesaId: 234,
                descricao: "BOTINA NOBUCK BICO PVC 50B26-CB-BP CAFE TAM 42 CA45611"
            },
            {
                codigo: "30340",
                tipoDespesaId: 234,
                descricao: "BOTINA NOBUCK BICO PVC 50B26-CB-BP CAFE TAM 43 CA45611"
            },
            {
                codigo: "00831",
                tipoDespesaId: 234,
                descricao: "CARTUCHO 6003 VO+GA SERIE 6000"
            },
            {
                codigo: "00361",
                tipoDespesaId: 58,
                descricao: "MASCARA RESPIRATORIA SEMI FACIAL 6200 TAM M CA4115"
            },
            {
                codigo: "00286",
                tipoDespesaId: 234,
                descricao: "OCULOS FENIX INCOLOR DA14500INC CA9722"
            },
            {
                codigo: "20859",
                tipoDespesaId: 58,
                descricao: "OCULOS PLUMBIFERO KON025 0,75X0,50MMPB"
            },
            {
                codigo: "13377",
                tipoDespesaId: 234,
                descricao: "OCULOS SOBREPOR PROVISION 010217510 INCOLOR HASTE INCOLOR CA6942"
            },
        ]
    },
    {
        cnpj: "12927876000167",
        razao: "SOMAMG PRODUTOS HOSPITALARES LTDA",
        itens: [
            {
                codigo: "81144",
                tipoDespesaId: 58,
                descricao: "BIOVAR COLETOR NAO ESTERIL 1000ML BIOTEC"
            },
            {
                codigo: "3081",
                tipoDespesaId: 57,
                descricao: "CLARITROMICINA 500MG COMPRIMIDO (G) EMS"
            },
            {
                codigo: "80137",
                tipoDespesaId: 58,
                descricao: "MASCARA OXIGENIO ALTA CONCENTRACAO PEDIATRICO C/ BALAO 600ML DESCARPACK"
            },
        ]
    },
    {
        cnpj: "14115388000423",
        razao: "ELLO DISTRIBUICAO LTDA SP",
        itens: [
            {
                codigo: "0018886",
                tipoDespesaId: 57,
                descricao: "AGUA INJECAO 10ML CX200"
            },
            {
                codigo: "0017002",
                tipoDespesaId: 57,
                descricao: "CLOR DOBUTAMINA 250MG CX10AMPX20ML"
            },
            {
                codigo: "0017001",
                tipoDespesaId: 57,
                descricao: "HYCLINCLINDAMICINA 600MG 4ML CX50UN INJ"
            },
            {
                codigo: "0017461",
                tipoDespesaId: 57,
                descricao: "KP CLORETO DE SODIO 0,9 100ML CX80FR"
            },
        ]
    },
    {
        cnpj: "14769402000160",
        razao: "AGILE MED IMPORTACAO E EXPORTACAO EIRELI",
        itens: [
            {
                codigo: "004781",
                tipoDespesaId: 0,
                descricao: "(F04DB-PA00025) SISTEMA DE CAMERA HD3 COM CABEÇA DE CAME"
            },
            {
                codigo: "005542",
                tipoDespesaId: 0,
                descricao: "CAMERA DE VIDEO STORZ"
            },
            {
                codigo: "SAP 5139-AC10046-L",
                tipoDespesaId: 58,
                descricao: "CANULA INSUFL VERESS 120MM 7270012 OAC24F0 BHS"
            },
        ]
    },
    {
        cnpj: "15358337000142",
        razao: "MAXIMA DO BRASIL LTDA",
        itens: [
            {
                codigo: "M0300",
                tipoDespesaId: 251,
                descricao: "DIETA ENTERAL SISTEMA FECHADO - NORMAL - MANIPULADO"
            },
            {
                codigo: "M0301",
                tipoDespesaId: 251,
                descricao: "DIETA ENTERAL SISTEMA FECHADO - ESPECIAL - MANIPULADO"
            },
            {
                codigo: "M0302",
                tipoDespesaId: 251,
                descricao: "SUPLEMENTO NUTRICIONAL - NORMAL - MANIPULADO"
            },
            {
                codigo: "M0303",
                tipoDespesaId: 251,
                descricao: "SUPLEMENTO NUTRICIONAL - ESPECIAL - MANIPULADO"
            },
            {
                codigo: "M0304",
                tipoDespesaId: 251,
                descricao: "FORMULA INFANTIL - NORMAL - MANIPULADO"
            },
            {
                codigo: "M0305",
                tipoDespesaId: 251,
                descricao: "FORMULA INFANTIL - ESPECIAL - MANIPULADO"
            },
            {
                codigo: "M0306",
                tipoDespesaId: 251,
                descricao: "MODULO ESPESSANTE - MANIPULADO"
            },
            {
                codigo: "M0307",
                tipoDespesaId: 251,
                descricao: "MODULO DE FIBRAS - MANIPULADO"
            },
            {
                codigo: "M0308",
                tipoDespesaId: 251,
                descricao: "MODULO DE PROTEINA - MANIPULADO"
            },
            {
                codigo: "M0309",
                tipoDespesaId: 251,
                descricao: "MODULO PROBIOTICO- MANIPULADO"
            },
            {
                codigo: "M0312",
                tipoDespesaId: 251,
                descricao: "MODULO DE TRIGLICERIDES DE CADEIA MEDIA - MANIPULADO"
            },
            {
                codigo: "M0314",
                tipoDespesaId: 251,
                descricao: "AGUA MINERAL HIDRATACAO (SNG) - MANIPULADO"
            },
        ]
    },
    {
        cnpj: "17069536000166",
        razao: "Vale Dos Pireneus Comercio De Produtos E Serv Hosp Ltda",
        itens: [
            {
                codigo: "004506",
                tipoDespesaId: 244,
                descricao: "FL21013 - FIO KIRSCHNER 1.0"
            },
            {
                codigo: "000764",
                tipoDespesaId: 244,
                descricao: "31344 - PARAFUSO CANULADO 3.5 45"
            },
            {
                codigo: "006147",
                tipoDespesaId: 244,
                descricao: "891690000 - CANULA DE MICRODEBRIDACAO RAZEK - AMC 2,9/5,5R"
            },
            {
                codigo: "006111",
                tipoDespesaId: 244,
                descricao: "881220000 - PONTEIRA DESCARTAVEL RAZEK - SHELL 90"
            },
            {
                codigo: "006062",
                tipoDespesaId: 244,
                descricao: "930350100 - EQUIPO DE IRRIGACAO EVOLUTION 2 VIAS"
            },
            {
                codigo: "000297",
                tipoDespesaId: 244,
                descricao: "31995 - PARAFUSO CANULADO 7.0 X 95"
            },
            {
                codigo: "000283",
                tipoDespesaId: 244,
                descricao: "32090 - PARAFUSO CANULADO 7.0 X 90"
            },
            {
                codigo: "004276",
                tipoDespesaId: 244,
                descricao: "FIXADOR EXTERNO TIPO PLATAFORMA - SISTEMA DE ALONGAMENTO / TRANSPLANTE OSSEO"
            },
            {
                codigo: "001370",
                tipoDespesaId: 244,
                descricao: "2.1260.50/200 - PINO DE SCHANZ 6.0 X 200"
            },
            {
                codigo: "006425",
                tipoDespesaId: 244,
                descricao: "FL11048.E - FIO KIRSCHINNER  2,0 X 300MM"
            },
            {
                codigo: "006424",
                tipoDespesaId: 244,
                descricao: "FL11027.E - FIO KIRSCHINNER 1,5 X 300MM"
            },
            {
                codigo: "000614",
                tipoDespesaId: 244,
                descricao: "32222 - PARAFUSO HERBERT 2.7 X 22"
            },
            {
                codigo: "000653",
                tipoDespesaId: 244,
                descricao: "1460 - FIO GUIA"
            },
            {
                codigo: "000612",
                tipoDespesaId: 244,
                descricao: "32220 - PARAFUSO HERBERT 2.7 X 20"
            },
            {
                codigo: "000617",
                tipoDespesaId: 244,
                descricao: "32224 - PARAFUSO HERBERT 2.7 X 24"
            },
            {
                codigo: "004577",
                tipoDespesaId: 244,
                descricao: "FIXADOR EXTERNO TIPO PLATAFORMA - SISTEMA DE ALONGAMENTO / TRANSPLANTE OSSEO"
            },
            {
                codigo: "000609",
                tipoDespesaId: 244,
                descricao: "32218 - PARAFUSO HERBERT 2.7 X 18"
            },
            {
                codigo: "005447",
                tipoDespesaId: 244,
                descricao: "3081 - PARAFUSO CORTICAL 3.5 X 16"
            },
            {
                codigo: "004775",
                tipoDespesaId: 244,
                descricao: "5220-001-005 - PLACA DCP 3.5 X 05 FUROS"
            },
            {
                codigo: "006276",
                tipoDespesaId: 244,
                descricao: "20618 - PARAFUSO CORTICAL 3.5 18MM"
            },
            {
                codigo: "004386",
                tipoDespesaId: 244,
                descricao: "EIA2 - EQUIPO DE IRRIGACAO 2 VIAS - ENCAIXE TIPO ST"
            },
            {
                codigo: "005916",
                tipoDespesaId: 244,
                descricao: "742640000 - GANCHO DE COMPRESSAO PARA SUTURA - FITPASS"
            },
            {
                codigo: "006149",
                tipoDespesaId: 244,
                descricao: "740120000 - CANULA 8,5 MM X 70 MM"
            },
            {
                codigo: "006497",
                tipoDespesaId: 244,
                descricao: "CAP SH 90 200 - CANULA CANETA PARA ABLACAO RF CAP SH 90 200 LOTE:5550/0325"
            },
            {
                codigo: "006533",
                tipoDespesaId: 244,
                descricao: "216091008 - CANULA DE DEBRIDACAO AT TIPO 09 04,5 X 130 MM CMA LOTE:0032E25"
            },
            {
                codigo: "006527",
                tipoDespesaId: 244,
                descricao: "1252569 - ANCORA TI S.A 5 SINFIX"
            },
            {
                codigo: "004411",
                tipoDespesaId: 244,
                descricao: "4311.001-EP - CANULA DE DEBRIDACAO - CORTADOR DE MENISCO 5,5 X 135 MM ENCAIXE EP"
            },
            {
                codigo: "004617",
                tipoDespesaId: 244,
                descricao: "AF358680 - PINO DE SCHANZ 4.5 X 200"
            },
            {
                codigo: "004407",
                tipoDespesaId: 244,
                descricao: "PS12045.E - PINO DE SCHANZ 5.0 X 200"
            },
            {
                codigo: "004557",
                tipoDespesaId: 244,
                descricao: "PS21099 - PINO DE SCHANZ 6.0 X 200"
            },
            {
                codigo: "004470",
                tipoDespesaId: 244,
                descricao: "FIXADOR EXTERNO TIPO PLATAFORMA - SISTEMA DE ALONGAMENTO / TRANSPLANTE OSSEO"
            },
            {
                codigo: "000082",
                tipoDespesaId: 244,
                descricao: "21760 - PARAFUSO ESPONJOSO 6.5 X 60 ROSCA 32"
            },
            {
                codigo: "000081",
                tipoDespesaId: 244,
                descricao: "21765 - PARAFUSO ESPONJOSO 6.5 X 65 ROSCA 32"
            },
            {
                codigo: "001260",
                tipoDespesaId: 244,
                descricao: "1.22.01/01 - ARRUELA"
            },
            {
                codigo: "000083",
                tipoDespesaId: 244,
                descricao: "21755 - PARAFUSO ESPONJOSO 6.5 X 55 ROSCA 32"
            },
            {
                codigo: "000233",
                tipoDespesaId: 244,
                descricao: "31560 - PARAFUSO CANULADO 4.5 X 60"
            },
            {
                codigo: "001180",
                tipoDespesaId: 244,
                descricao: "1050349065 - PARAFUSO DE BLOQUEIO DFN 4.9 X 65"
            },
            {
                codigo: "005828",
                tipoDespesaId: 244,
                descricao: "430104 - PLACA TIBIAL DIREITA 04 FUROS"
            },
            {
                codigo: "006045",
                tipoDespesaId: 244,
                descricao: "FL21057 - FIO KIRSCHINNER  2,5 X 300MM"
            },
            {
                codigo: "002186",
                tipoDespesaId: 244,
                descricao: "40103500340. - PARAFUSO CORTICAL 4.5 X 34"
            },
            {
                codigo: "002182",
                tipoDespesaId: 244,
                descricao: "40103500260. - PARAFUSO CORTICAL 4.5 X 28"
            },
            {
                codigo: "000109",
                tipoDespesaId: 244,
                descricao: "21234 - PARAFUSO CORTICAL 4.5 X 34"
            },
            {
                codigo: "000106",
                tipoDespesaId: 244,
                descricao: "21228 - PARAFUSO CORTICAL 4.5 X 28"
            },
            {
                codigo: "005829",
                tipoDespesaId: 244,
                descricao: "430105 - PLACA TIBIAL BLOQUEADA DIREITA 6 FUROS"
            },
            {
                codigo: "001955",
                tipoDespesaId: 244,
                descricao: "40013300504 - FIO GUIA"
            },
            {
                codigo: "000619",
                tipoDespesaId: 244,
                descricao: "32228 - PARAFUSO HERBERT 2.7 X 28"
            },
            {
                codigo: "004120",
                tipoDespesaId: 244,
                descricao: "4-04-02 - FIO KIRSCHNER 2.0"
            },
            {
                codigo: "000621",
                tipoDespesaId: 244,
                descricao: "32230 - PARAFUSO HERBERT 2.7 X 30"
            },
            {
                codigo: "000607",
                tipoDespesaId: 244,
                descricao: "32216 - PARAFUSO HERBERT 2.7 X 16"
            },
            {
                codigo: "000720",
                tipoDespesaId: 244,
                descricao: "505016 - ANCORA 5.0"
            },
            {
                codigo: "006103",
                tipoDespesaId: 244,
                descricao: "031.0052 - CANULA DE DEBRIDACAO R3A PRIME - CMA 5,5 x 135mm Rz (Encaixe R) Lote: 230703 Val"
            },
            {
                codigo: "004711",
                tipoDespesaId: 244,
                descricao: "4405.005 - ELETRODO MONOPOLAR HORTRON TIPO SHELL 90 2,5MM X 200MM"
            },
            {
                codigo: "004409",
                tipoDespesaId: 244,
                descricao: "3300.005 - CANULA COM OBTURADOR PARA ARTROSCOPIA 8.5 X 70 MM"
            },
            {
                codigo: "000013",
                tipoDespesaId: 244,
                descricao: "20636. - PARAFUSO CORTICAL 3.5 X 36"
            },
            {
                codigo: "006426",
                tipoDespesaId: 244,
                descricao: "FL11057.E - FIO KIRSCHINNER 2,5 X 300MM"
            },
            {
                codigo: "000757",
                tipoDespesaId: 244,
                descricao: "31334 - PARAFUSO CANULADO 3.5 35"
            },
            {
                codigo: "004413",
                tipoDespesaId: 244,
                descricao: "4310.001-EP - CANULA DE DEBRIDACAO - CORTADOR DE MENISCO 4,5 X 135 MM ENCAIXE EP"
            },
            {
                codigo: "001425",
                tipoDespesaId: 244,
                descricao: "5212-005-063 - PLACA 1/3 TUBULAR X 05 FUROS"
            },
            {
                codigo: "000243",
                tipoDespesaId: 244,
                descricao: "20818 - PARAFUSO ESPONJOSO 4.0 X 18"
            },
            {
                codigo: "005448",
                tipoDespesaId: 244,
                descricao: "3082 - PARAFUSO CORTICAL 3.5 X 18"
            },
            {
                codigo: "000344",
                tipoDespesaId: 244,
                descricao: "20620. - PARAFUSO CORTICAL 3.5 X 20"
            },
            {
                codigo: "004121",
                tipoDespesaId: 244,
                descricao: "31346 - PARAFUSO CANULADO 3.5 45"
            },
            {
                codigo: "002867",
                tipoDespesaId: 244,
                descricao: "40103500146. - PARAFUSO CORTICAL 3.5 X 14"
            },
            {
                codigo: "001746",
                tipoDespesaId: 244,
                descricao: "5220-001-008 - PLACA DCP 3.5 X 08 FUROS"
            },
            {
                codigo: "006423",
                tipoDespesaId: 244,
                descricao: "FL11013.E - FIO LISO GDFIX A 1,0 X 300MM"
            },
            {
                codigo: "006052",
                tipoDespesaId: 244,
                descricao: "223-40-13-05 - ANCORA DE TITANIO 04,0MM APLICADOR DESCARTAVEL 2 FIOS C/4AGULHAS LOTE:0152I24"
            },
            {
                codigo: "000740",
                tipoDespesaId: 244,
                descricao: "31310 - PARAFUSO CANULADO 3.5 10MM X 04 RC"
            },
            {
                codigo: "000229",
                tipoDespesaId: 244,
                descricao: "951810 - ARRUELA 10.0MM"
            },
            {
                codigo: "000579",
                tipoDespesaId: 244,
                descricao: "21270 - PARAFUSO CORTICAL 4.5 X 70"
            },
            {
                codigo: "001544",
                tipoDespesaId: 244,
                descricao: "5206-003-003 - PLACA EM T 3.5 3X3 FUROS"
            },
            {
                codigo: "001464",
                tipoDespesaId: 244,
                descricao: "5708-135-020 - PARAFUSO BLOQUEADO 3.5 X 20"
            },
            {
                codigo: "000303",
                tipoDespesaId: 244,
                descricao: "31960 - PARAFUSO CANULADO 7.0 X 60 ROSCA 16"
            },
            {
                codigo: "000759",
                tipoDespesaId: 244,
                descricao: "31336 - PARAFUSO CANULADO 3.5 36MM X 10 RC"
            },
            {
                codigo: "000761",
                tipoDespesaId: 244,
                descricao: "31340 - PARAFUSO CANULADO 3.5 40MM X 11 RC"
            },
            {
                codigo: "000767",
                tipoDespesaId: 244,
                descricao: "31350 - PARAFUSO CANULADO 3.5 50MM X 16 RC"
            },
            {
                codigo: "000773",
                tipoDespesaId: 244,
                descricao: "31360 - PARAFUSO CANULADO 3.5 X 60"
            },
            {
                codigo: "000214",
                tipoDespesaId: 244,
                descricao: "20614. - PARAFUSO CORTICAL 3.5 X 14"
            },
            {
                codigo: "000215",
                tipoDespesaId: 244,
                descricao: "20616. - PARAFUSO CORTICAL 3.5 X 16"
            },
            {
                codigo: "002578",
                tipoDespesaId: 244,
                descricao: "40173515460 - PARAFUSO CANULADO 3.5 X 46 MM R CURTA"
            },
            {
                codigo: "005164",
                tipoDespesaId: 244,
                descricao: "223-50-15-05 - ANCORA 5.0 COM 4 AGULHAS"
            },
            {
                codigo: "006054",
                tipoDespesaId: 244,
                descricao: "223-35-13-05 - ANCORA DE TITANIO 03,5MM APLICADOR DESCARTAVEL 2 FIOS C/ 4AGULHAS LOTE:0287I24"
            },
            {
                codigo: "006427",
                tipoDespesaId: 244,
                descricao: "FL11066.E - FIO LISO GDFIX A 3,0 X 300MM"
            },
            {
                codigo: "000306",
                tipoDespesaId: 244,
                descricao: "31945 - PARAFUSO CANULADO 7.0 X 45 ROSCA 16"
            },
            {
                codigo: "000286",
                tipoDespesaId: 244,
                descricao: "32065 - PARAFUSO CANULADO 7.0 X 65 ROSCA 32"
            },
            {
                codigo: "000289",
                tipoDespesaId: 244,
                descricao: "32050 - PARAFUSO CANULADO 7.0 X 50 ROSCA 32"
            },
            {
                codigo: "000280",
                tipoDespesaId: 244,
                descricao: "320115 - PARAFUSO CANULADO 7.0 X 115 ROSCA 32"
            },
            {
                codigo: "000304",
                tipoDespesaId: 244,
                descricao: "31955 - PARAFUSO CANULADO 7.0 X 55 ROSCA 16"
            },
            {
                codigo: "001689",
                tipoDespesaId: 244,
                descricao: "5117-070-080 - PARAFUSO CANULADO 7.0 X 80 ROSCA 32"
            },
            {
                codigo: "000541",
                tipoDespesaId: 244,
                descricao: "473518 - PARAFUSO BLOQUEADO 3.5 X 18"
            },
            {
                codigo: "002413",
                tipoDespesaId: 244,
                descricao: "40205100058 - PLACA 1/3 TUBULAR X 05 FUROS"
            },
            {
                codigo: "004802",
                tipoDespesaId: 244,
                descricao: "40403500125 - PLACA RECONSTRUCAO 3.5 X 12 FUROS"
            },
            {
                codigo: "000004",
                tipoDespesaId: 244,
                descricao: "20630. - PARAFUSO CORTICAL 3.5 X 30"
            },
            {
                codigo: "000008",
                tipoDespesaId: 244,
                descricao: "20626. - PARAFUSO CORTICAL 3.5 X 26"
            },
            {
                codigo: "004091",
                tipoDespesaId: 244,
                descricao: "32095 - PARAFUSO CANULADO 7.0 X 95 ROSCA 32"
            },
            {
                codigo: "006376",
                tipoDespesaId: 244,
                descricao: "20618 - PARAFUSO CORTICAL 3.5 P.1.75 18MM RMS 80057410010 LF 00292/25 (Qt: 50.00)"
            },
            {
                codigo: "001474",
                tipoDespesaId: 244,
                descricao: "5708-135-040 - PARAFUSO BLOQUEADO 3.5 X 40"
            },
            {
                codigo: "001398",
                tipoDespesaId: 244,
                descricao: "5708-135-018 - PARAFUSO BLOQUEADO 3.5 X 18"
            },
            {
                codigo: "006538",
                tipoDespesaId: 244,
                descricao: "5708-135-014-0 - PARAFUSO DE BLOQUEIO LPS EM ACO 3,5X14 MM LT. 2500589"
            },
            {
                codigo: "000022",
                tipoDespesaId: 244,
                descricao: "60608 - PLACA DCP 3.5 X 08 FUROS"
            },
            {
                codigo: "000021",
                tipoDespesaId: 244,
                descricao: "60605. - PLACA DCP 3.5 X 05 FUROS"
            },
            {
                codigo: "000299",
                tipoDespesaId: 244,
                descricao: "31985 - PARAFUSO CANULADO 7.0 X 85 ROSCA 16"
            },
            {
                codigo: "004701",
                tipoDespesaId: 244,
                descricao: "6577/01 - PLACA EM T BLOQUEADA OBLIQUA 3 X 3 FUROS ESQUERDA"
            },
            {
                codigo: "000285",
                tipoDespesaId: 244,
                descricao: "32070 - PARAFUSO CANULADO 7.0 X 70 ROSCA 32"
            },
            {
                codigo: "000249",
                tipoDespesaId: 244,
                descricao: "31536 - PARAFUSO CANULADO 4.5 X 36"
            },
            {
                codigo: "000251",
                tipoDespesaId: 244,
                descricao: "31534 - PARAFUSO CANULADO 4.5 X 34"
            },
            {
                codigo: "004666",
                tipoDespesaId: 244,
                descricao: "3-11-02 - CONECTOR BARRA BARRA (TUBO A TUBO)"
            },
            {
                codigo: "004184",
                tipoDespesaId: 244,
                descricao: "1.11.01/00 - CONECTOR BARRA PINO (TUBO A TUBO)"
            },
            {
                codigo: "000284",
                tipoDespesaId: 244,
                descricao: "32075 - PARAFUSO CANULADO 7.0 X 75 ROSCA 32"
            },
            {
                codigo: "000227",
                tipoDespesaId: 244,
                descricao: "31570 - PARAFUSO CANULADO 4.5 X 70"
            },
            {
                codigo: "004161",
                tipoDespesaId: 244,
                descricao: "40211000060 - MINI PLACA DCP 2.7 X 6 FUROS"
            },
            {
                codigo: "002784",
                tipoDespesaId: 244,
                descricao: "40092700160 - MINI PARAFUSO CORTICAL 2.7 X 16"
            },
            {
                codigo: "002786",
                tipoDespesaId: 244,
                descricao: "40092700187 - MINI PARAFUSO CORTICAL 2.7 X 18"
            },
            {
                codigo: "002788",
                tipoDespesaId: 244,
                descricao: "40092700209 - MINI PARAFUSO CORTICAL 2.7 X 20"
            },
            {
                codigo: "000015",
                tipoDespesaId: 244,
                descricao: "20640. - PARAFUSO CORTICAL 3.5 X 40"
            },
            {
                codigo: "000346",
                tipoDespesaId: 244,
                descricao: "20645. - PARAFUSO CORTICAL 3.5 X 45"
            },
            {
                codigo: "006242",
                tipoDespesaId: 244,
                descricao: "024 005 - GUIA FLEXIVEL P/ PASSADOR DE SUTURA R3A - Tipo 5 (SCORPION II) Lote: 2408036 Val"
            },
            {
                codigo: "001550",
                tipoDespesaId: 244,
                descricao: "5116-070-075 - PARAFUSO CANULADO 7.0 X 75 ROSCA 16"
            },
            {
                codigo: "002802",
                tipoDespesaId: 244,
                descricao: "40092700241 - MINI PARAFUSO CORTICAL 2.7 X 24"
            },
            {
                codigo: "000287",
                tipoDespesaId: 244,
                descricao: "32060 - PARAFUSO CANULADO 7.0 X 60 ROSCA 32"
            },
            {
                codigo: "005070",
                tipoDespesaId: 244,
                descricao: "4209/05 - MINI PARAFUSO CORTICAL 2.7 X 18"
            },
            {
                codigo: "000247",
                tipoDespesaId: 244,
                descricao: "31540 - PARAFUSO CANULADO 4.5 X 40"
            },
            {
                codigo: "006133",
                tipoDespesaId: 244,
                descricao: "5703-005-001 - FIO CALIBRADO 1,5 MM"
            },
            {
                codigo: "004987",
                tipoDespesaId: 244,
                descricao: "2215 - BROCA 3.5"
            },
            {
                codigo: "001113",
                tipoDespesaId: 244,
                descricao: "2386 - BROCA 3.7MM"
            },
            {
                codigo: "000278",
                tipoDespesaId: 244,
                descricao: "2725250 - FIO GUIA DHS 2.5"
            },
            {
                codigo: "006073",
                tipoDespesaId: 244,
                descricao: "FL21066 - FIO LISO GDFIX A 3,0 X 300MM"
            },
            {
                codigo: "006453",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.375 - GDFIX BARRA LONGITUDINAL RANHURADA 375MM"
            },
            {
                codigo: "000185",
                tipoDespesaId: 244,
                descricao: "450111170 - HASTE PFN CURTO 11X170"
            },
            {
                codigo: "000001",
                tipoDespesaId: 244,
                descricao: "450810100 - PARAFUSO DESLIZANTE PFN X 100"
            },
            {
                codigo: "000140",
                tipoDespesaId: 244,
                descricao: "45035 - PARAFUSO DE BLOQUEIO 4.5 X 35"
            },
            {
                codigo: "000130",
                tipoDespesaId: 244,
                descricao: "45030 - PARAFUSO DE BLOQUEIO 4.5 X 30"
            },
            {
                codigo: "000141",
                tipoDespesaId: 244,
                descricao: "45040 - PARAFUSO DE BLOQUEIO 4.5 X 40"
            },
            {
                codigo: "000296",
                tipoDespesaId: 244,
                descricao: "319100 - PARAFUSO CANULADO 7.0 X 100 ROSCA 16"
            },
            {
                codigo: "004088",
                tipoDespesaId: 244,
                descricao: "320100 - PARAFUSO CANULADO 7.0 X 100 ROSCA 32"
            },
            {
                codigo: "000293",
                tipoDespesaId: 244,
                descricao: "319120 - PARAFUSO CANULADO 7.0 X 120 ROSCA 16"
            },
            {
                codigo: "000279",
                tipoDespesaId: 244,
                descricao: "320120 - PARAFUSO CANULADO 7.0 X 120 ROSCA 32"
            },
            {
                codigo: "000302",
                tipoDespesaId: 244,
                descricao: "31970 - PARAFUSO CANULADO 7.0 X 70 ROSCA 16"
            },
            {
                codigo: "004090",
                tipoDespesaId: 244,
                descricao: "31965 - PARAFUSO CANULADO 7.0 X 65 ROSCA 16"
            },
            {
                codigo: "006434",
                tipoDespesaId: 244,
                descricao: "FX.1803 - GDFIX BARRA PINO FAST 6MM"
            },
            {
                codigo: "000241",
                tipoDespesaId: 244,
                descricao: "20816 - PARAFUSO ESPONJOSO 4.0 X 16 ROSCA CURTA"
            },
            {
                codigo: "006230",
                tipoDespesaId: 244,
                descricao: "2.13.10/150 - FIO TIPO GUIA 1.0X150 MM"
            },
            {
                codigo: "005881",
                tipoDespesaId: 244,
                descricao: "0121020-025 - PARAFUSO DE BLOQUEIO 4.5 X 35"
            },
            {
                codigo: "001961",
                tipoDespesaId: 244,
                descricao: "40013430301 - FIO DE KIRSCHINNER 3.0"
            },
            {
                codigo: "004306",
                tipoDespesaId: 244,
                descricao: "4-04-01 - FIO KIRSCHNER DIAM 1,5MM X 300MM"
            },
            {
                codigo: "001959",
                tipoDespesaId: 244,
                descricao: "40013425303 - FIO KIRSCHINNER 2.5"
            },
            {
                codigo: "000618",
                tipoDespesaId: 244,
                descricao: "32226 - PARAFUSO HERBERT 2.7 X 26"
            },
            {
                codigo: "000300",
                tipoDespesaId: 244,
                descricao: "31980 - PARAFUSO CANULADO 7.0 X 80"
            },
            {
                codigo: "004507",
                tipoDespesaId: 244,
                descricao: "FL21027 - FIO KIRSCHENER 2.0"
            },
            {
                codigo: "006534",
                tipoDespesaId: 244,
                descricao: "T25 8 920 - FIO GUIA"
            },
            {
                codigo: "001369",
                tipoDespesaId: 244,
                descricao: "FIXADOR EXTERNO CIRCULAR / SEMI-CIRCULAR"
            },
            {
                codigo: "004420",
                tipoDespesaId: 244,
                descricao: "0112105-025 - ANCORA 5.0 FIO FIBER"
            },
            {
                codigo: "006261",
                tipoDespesaId: 244,
                descricao: "892330000 - CANULA DE MICRODEBRIDACAO RAZEK - OB 2,9/5,5R"
            },
            {
                codigo: "001551",
                tipoDespesaId: 244,
                descricao: "5116-070-050 - PARAFUSO CANULADO 7.0 X 50 ROSCA 16"
            },
            {
                codigo: "001677",
                tipoDespesaId: 244,
                descricao: "5116-070-055 - PARAFUSO CANULADO 7.0 X 55 ROSCA 16"
            },
            {
                codigo: "004212",
                tipoDespesaId: 244,
                descricao: "40352700220 - PLACA EM L 2,7 MM ANG RETO ESQUERDA"
            },
            {
                codigo: "002781",
                tipoDespesaId: 244,
                descricao: "40092700128 - MINI PARAFUSO CORTICAL 2.7 X 12"
            },
            {
                codigo: "002782",
                tipoDespesaId: 244,
                descricao: "40092700144 - MINI PARAFUSO CORTICAL 2.7 X 14"
            },
            {
                codigo: "004146",
                tipoDespesaId: 244,
                descricao: "40213000067 - PLACA RETA 2,0 DCP 6 FUROS"
            },
            {
                codigo: "003852",
                tipoDespesaId: 244,
                descricao: "101.15010 - PARAFUSO MINI 1.5 X 10"
            },
            {
                codigo: "002793",
                tipoDespesaId: 244,
                descricao: "40091500087 - MINI PARAFUSO CORTICAL 1.5 X 08"
            },
            {
                codigo: "000342",
                tipoDespesaId: 244,
                descricao: "20618. - PARAFUSO CORTICAL 3.5 X 18"
            },
            {
                codigo: "000347",
                tipoDespesaId: 244,
                descricao: "20650. - PARAFUSO CORTICAL 3.5 X 50"
            },
            {
                codigo: "000326",
                tipoDespesaId: 244,
                descricao: "60206. - PLACA 1/3 TUBULAR X 06 FUROS"
            },
            {
                codigo: "005929",
                tipoDespesaId: 244,
                descricao: "0234251-090 - SUTURFIX, 2 AGULHAS USP 2 - 90 B/A"
            },
            {
                codigo: "000273",
                tipoDespesaId: 244,
                descricao: "2038 - FIO GUIA"
            },
            {
                codigo: "006385",
                tipoDespesaId: 244,
                descricao: "223-40-13-05 - ANCORA DE TITANIO 04,0MM APLICADOR DESCARTAVEL 2 FIOS C/4AGULHAS LOTE:0239B25"
            },
            {
                codigo: "000365",
                tipoDespesaId: 244,
                descricao: "20835 - PARAFUSO ESPONJOSO 4.0 X 35 ROSCA CURTA"
            },
            {
                codigo: "000222",
                tipoDespesaId: 244,
                descricao: "20840. - PARAFUSO ESPONJOSO 4.0 X 40 ROSCA CURTA"
            },
            {
                codigo: "000009",
                tipoDespesaId: 244,
                descricao: "20628. - PARAFUSO CORTICAL 3.5 X 28"
            },
            {
                codigo: "004280",
                tipoDespesaId: 244,
                descricao: "FIXADOR EXTERNO TIPO PLATAFORMA - SISTEMA DE ALONGAMENTO / TRANSPLANTE OSSEO"
            },
            {
                codigo: "001033",
                tipoDespesaId: 244,
                descricao: "9009340 - HASTE BLOQUEADA DE TIBIA 09X340"
            },
            {
                codigo: "004622",
                tipoDespesaId: 244,
                descricao: "PS14045.E - PINO DE SCHANZ  5.0 X 200"
            },
            {
                codigo: "004176",
                tipoDespesaId: 244,
                descricao: "1.08.18 - PINO DE SCHANZ 5.0 X 180 MM"
            },
            {
                codigo: "004281",
                tipoDespesaId: 244,
                descricao: "FIXADOR EXTERNO TIPO PLATAFORMA - SISTEMA DE ALONGAMENTO / TRANSPLANTE OSSEO"
            },
            {
                codigo: "000571",
                tipoDespesaId: 244,
                descricao: "31216 - PARAFUSO CANULADO 2.7 X 16"
            },
            {
                codigo: "004079",
                tipoDespesaId: 244,
                descricao: "1090/07 - CABECA INTERCAMBIAVEL CONE 12/14  32 L"
            },
            {
                codigo: "004053",
                tipoDespesaId: 244,
                descricao: "1033/52 - PROTESE ACETABULAR  52 X 32MM"
            },
            {
                codigo: "000288",
                tipoDespesaId: 244,
                descricao: "32055 - PARAFUSO CANULADO 7.0 X 55 ROSCA 32"
            },
            {
                codigo: "006535",
                tipoDespesaId: 244,
                descricao: "216091608 - CANULA DE DEBRIDACAO AT TIPO 09 05,5 X 130 MM CMA"
            },
            {
                codigo: "000570",
                tipoDespesaId: 244,
                descricao: "21260 - PARAFUSO CORTICAL 4.5 X 60"
            },
            {
                codigo: "005833",
                tipoDespesaId: 244,
                descricao: "430212 - PLACA TIBIAL BLOQUEADA DISTAL  ESQUERDA X 12 FUROS"
            },
            {
                codigo: "000127",
                tipoDespesaId: 244,
                descricao: "21254 - PARAFUSO CORTICAL 4.5 X 55"
            },
            {
                codigo: "005341",
                tipoDespesaId: 244,
                descricao: "5708-150-050 - PARAFUSO BLOQUEADO 4.5 X 50"
            },
            {
                codigo: "005342",
                tipoDespesaId: 244,
                descricao: "5708-150-055 - PARAFUSO BLOQUEADO 4.5 X 55"
            },
            {
                codigo: "000110",
                tipoDespesaId: 244,
                descricao: "21236 - PARAFUSO CORTICAL 4.5 X 36"
            },
            {
                codigo: "001515",
                tipoDespesaId: 244,
                descricao: "5401-100-300 - FIO KIRSCHNNER 1,0MM X 300MM"
            },
            {
                codigo: "004767",
                tipoDespesaId: 244,
                descricao: "5708-150-038 - PARAFUSO BLOQUEADO 4.5 X 38"
            },
            {
                codigo: "001367",
                tipoDespesaId: 244,
                descricao: "2.15.18/373 - FIO LISO ILIZAROV 1.8 X 373 MM"
            },
            {
                codigo: "001279",
                tipoDespesaId: 244,
                descricao: "1.22.06/04 - DADO DE 4 FUROS"
            },
            {
                codigo: "001276",
                tipoDespesaId: 244,
                descricao: "1.22.06/01 - DADO DE 1 FURO"
            },
            {
                codigo: "001277",
                tipoDespesaId: 244,
                descricao: "1.22.06/02 - DADO DE 2 FUROS"
            },
            {
                codigo: "001340",
                tipoDespesaId: 244,
                descricao: "1.22.26/00 - PORCA SEXTAVADA"
            },
            {
                codigo: "004181",
                tipoDespesaId: 244,
                descricao: "5-01-16 - SEMI ANEL 160 MM"
            },
            {
                codigo: "001313",
                tipoDespesaId: 244,
                descricao: "1.22.19/15 - PARAFUSO SEXTAVADO 15MM"
            },
            {
                codigo: "001473",
                tipoDespesaId: 244,
                descricao: "5708-135-038 - PARAFUSO BLOQUEADO 3.5 X 38"
            },
            {
                codigo: "005357",
                tipoDespesaId: 244,
                descricao: "4430/05 - PLACA 1/3 TUBULAR 73MM COMP. 06 F"
            },
            {
                codigo: "000305",
                tipoDespesaId: 244,
                descricao: "31950 - PARAFUSO CANULADO 7.0 X 50 ROSCA 16"
            },
            {
                codigo: "004827",
                tipoDespesaId: 244,
                descricao: "5013 - PARAFUSO BLOQUEADO 3.5 X 55"
            },
            {
                codigo: "002794",
                tipoDespesaId: 244,
                descricao: "40091500109 - MINI PARAFUSO CORTICAL 1.5 X 10"
            },
            {
                codigo: "004205",
                tipoDespesaId: 244,
                descricao: "40352700106 - MINI PLACA EM T 2.7 3X2 FUROS"
            },
            {
                codigo: "001691",
                tipoDespesaId: 244,
                descricao: "5117-070-100 - PARAFUSO CANULADO 7.0 X 100 ROSCA 32"
            },
            {
                codigo: "006664",
                tipoDespesaId: 244,
                descricao: "101.007.04020 - CIMENTO OSSEO COM ANTIBIOTICO"
            },
            {
                codigo: "000367",
                tipoDespesaId: 244,
                descricao: "81604 - PLACA PARA RADIO DISTAL PLUS 3F"
            },
            {
                codigo: "000542",
                tipoDespesaId: 244,
                descricao: "473520 - PARAFUSO BLOQUEADO X 20"
            },
            {
                codigo: "000539",
                tipoDespesaId: 244,
                descricao: "473514 - PARAFUSO BLOQUEADO  X 14"
            },
            {
                codigo: "000543",
                tipoDespesaId: 244,
                descricao: "473522 - PARAFUSO BLOQUEADO  X 24"
            },
            {
                codigo: "000540",
                tipoDespesaId: 244,
                descricao: "473516 - PARAFUSO BLOQUEADO 3.5 X 16"
            },
            {
                codigo: "001468",
                tipoDespesaId: 244,
                descricao: "5708-135-030 - PARAFUSO BLOQUEADO 3.5 X 30"
            },
            {
                codigo: "004502",
                tipoDespesaId: 244,
                descricao: "5713-004-108 - PLACA BLOQUEADA LPS OLECRANO  8 FUROS"
            },
            {
                codigo: "001450",
                tipoDespesaId: 244,
                descricao: "5711-007-004 - PLACA BLOQUEADA LPS CLAVICULA DIREITA EM ACO 4 FUROS"
            },
            {
                codigo: "000252",
                tipoDespesaId: 244,
                descricao: "31530 - PARAFUSO CANULADO 4.5 X 30"
            },
            {
                codigo: "000231",
                tipoDespesaId: 244,
                descricao: "31564 - PARAFUSO CANULADO 4.5 X 65"
            },
            {
                codigo: "000103",
                tipoDespesaId: 244,
                descricao: "21222 - PARAFUSO CORTICAL 4.5 X 22"
            },
            {
                codigo: "000060",
                tipoDespesaId: 244,
                descricao: "60806 - PLACA DCP 4.5 LARGA X 06 FUROS"
            },
            {
                codigo: "000101",
                tipoDespesaId: 244,
                descricao: "21218 - PARAFUSO CORTICAL 4.5 X 18"
            },
            {
                codigo: "000102",
                tipoDespesaId: 244,
                descricao: "21220 - PARAFUSO CORTICAL 4.5 X 20"
            },
            {
                codigo: "000104",
                tipoDespesaId: 244,
                descricao: "21224 - PARAFUSO CORTICAL 4.5 X 24"
            },
            {
                codigo: "000230",
                tipoDespesaId: 244,
                descricao: "31566 - PARAFUSO CANULADO 4.5 X 65"
            },
            {
                codigo: "000760",
                tipoDespesaId: 244,
                descricao: "31338 - PARAFUSO CANULADO 3.5 X 35"
            },
            {
                codigo: "002858",
                tipoDespesaId: 244,
                descricao: "40100001453 - ARRUELA DE 10.0 MM"
            },
            {
                codigo: "004673",
                tipoDespesaId: 244,
                descricao: "0121020-045 - PARAFUSO DE BLOQUEIO 4.5 X 35"
            },
            {
                codigo: "004237",
                tipoDespesaId: 244,
                descricao: "450810095 - PARAFUSO DESLIZANTE PFN X 95"
            },
            {
                codigo: "001148",
                tipoDespesaId: 244,
                descricao: "450110170 - HASTE PFN CURTO 10X170"
            },
            {
                codigo: "000173",
                tipoDespesaId: 244,
                descricao: "450810110 - PARAFUSO DESLIZANTE PFN X 110"
            },
            {
                codigo: "000637",
                tipoDespesaId: 244,
                descricao: "222720 - PARAFUSO DE INTERFERENCIA 07X20"
            },
            {
                codigo: "000187",
                tipoDespesaId: 244,
                descricao: "450617000 - END-CAP LONGO"
            },
            {
                codigo: "004477",
                tipoDespesaId: 244,
                descricao: "5711-008-007 - PLACA BLOQUEADA LPS CLAVICULA DISTAL DIREITA EM ACO 7 FUROS"
            },
            {
                codigo: "004735",
                tipoDespesaId: 244,
                descricao: "5810-011-020 - PARAFUSO DE INTERFERENCIA ESTERIL EM TITANIO 11X20 NCR"
            },
            {
                codigo: "004736",
                tipoDespesaId: 244,
                descricao: "5810-011-030 - PARAFUSO DE INTERFERENCIA ESTERIL EM TITANIO 11X30 NCR"
            },
            {
                codigo: "004738",
                tipoDespesaId: 244,
                descricao: "5810-011-025 - PARAFUSO DE INTERFERENCIA ESTERIL EM TITANIO 11X25 NCR"
            },
            {
                codigo: "004329",
                tipoDespesaId: 244,
                descricao: "351020 - PARAFUSO DE INTERFERENCIA ESTERIL 10X20"
            },
            {
                codigo: "004737",
                tipoDespesaId: 244,
                descricao: "5810-010-030 - PARAFUSO DE INTERFERENCIA ESTERIL EM TITANIO 10X30 NCR"
            },
            {
                codigo: "000639",
                tipoDespesaId: 244,
                descricao: "222725 - PARAFUSO DE INTERFERENCIA 07X25"
            },
            {
                codigo: "000640",
                tipoDespesaId: 244,
                descricao: "222730 - PARAFUSO DE INTERFERENCIA 07X30"
            },
            {
                codigo: "000641",
                tipoDespesaId: 244,
                descricao: "223820 - PARAFUSO DE INTERFERENCIA 08X20"
            },
            {
                codigo: "000642",
                tipoDespesaId: 244,
                descricao: "223825 - PARAFUSO DE INTERFERENCIA 08X25"
            },
            {
                codigo: "000643",
                tipoDespesaId: 244,
                descricao: "223830 - PARAFUSO DE INTERFERENCIA 08X30"
            },
            {
                codigo: "000649",
                tipoDespesaId: 244,
                descricao: "224930 - PARAFUSO DE INTERFERENCIA 09X30"
            },
            {
                codigo: "000646",
                tipoDespesaId: 244,
                descricao: "224920 - PARAFUSO DE INTERFERENCIA 09X20"
            },
            {
                codigo: "000648",
                tipoDespesaId: 244,
                descricao: "224925 - PARAFUSO DE INTERFERENCIA 09X25"
            },
            {
                codigo: "004267",
                tipoDespesaId: 244,
                descricao: "0617-11-00 - HASTE ROSQUEADA 60MM"
            },
            {
                codigo: "001289",
                tipoDespesaId: 244,
                descricao: "1.22.13/08 - BARRA ROSQUEADA 80 MM"
            },
            {
                codigo: "001290",
                tipoDespesaId: 244,
                descricao: "1.22.13/10 - BARRA ROSQUEADA 100 MM"
            },
            {
                codigo: "004174",
                tipoDespesaId: 244,
                descricao: "5-24-35 - BARRA ROSQUEADA 350"
            },
            {
                codigo: "001350",
                tipoDespesaId: 244,
                descricao: "1.22.28/16 - SEMI-ANEL 160 MM"
            },
            {
                codigo: "001322",
                tipoDespesaId: 244,
                descricao: "1.22.22/03 - PLACA DE CONEXAO CURTA X 03 FUROS"
            },
            {
                codigo: "001261",
                tipoDespesaId: 244,
                descricao: "1.22.01/02 - ARRUELA CONVEXA"
            },
            {
                codigo: "004285",
                tipoDespesaId: 244,
                descricao: "1.23.07/00 - DADO NUMERADO"
            },
            {
                codigo: "006432",
                tipoDespesaId: 244,
                descricao: "FX.1801 - GDFIX BARRA BARRA FAST"
            },
            {
                codigo: "006634",
                tipoDespesaId: 244,
                descricao: "FX.1803 - GDFIX BARRA PINO FAST 6MM"
            },
            {
                codigo: "006437",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.125 - GDFIX BARRA LONGITUDINAL RANHURADA 125MM"
            },
            {
                codigo: "006435",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.100 - GDFIX BARRA LONGITUDINAL RANHURADA 100MM"
            },
            {
                codigo: "006439",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.150 - GDFIX BARRA LONGITUDINAL RANHURADA 150MM"
            },
            {
                codigo: "006642",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.175 - GDFIX BARRA LONGITUDINAL RANHURADA 175MM"
            },
            {
                codigo: "006646",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.275 - GDFIX BARRA LONGITUDINAL RANHURADA 275MM"
            },
            {
                codigo: "006450",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.300 - GDFIX BARRA LONGITUDINAL RANHURADA 300MM"
            },
            {
                codigo: "006452",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.350 - GDFIX BARRA LONGITUDINAL RANHURADA 350MM"
            },
            {
                codigo: "006455",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.400 - GDFIX BARRA LONGITUDINAL RANHURADA 400MM"
            },
            {
                codigo: "000253",
                tipoDespesaId: 244,
                descricao: "31528 - PARAFUSO CANULADO 4.5 X 28"
            },
            {
                codigo: "000105",
                tipoDespesaId: 244,
                descricao: "21226 - PARAFUSO CORTICAL 4.5 X 26"
            },
            {
                codigo: "000269",
                tipoDespesaId: 244,
                descricao: "31550 - PARAFUSO CANULADO 4.5 X 50"
            },
            {
                codigo: "000236",
                tipoDespesaId: 244,
                descricao: "31558 - PARAFUSO CANULADO 4.5 X 58"
            },
            {
                codigo: "000308",
                tipoDespesaId: 244,
                descricao: "31935 - PARAFUSO CANULADO 7.0 X 35 ROSCA 16"
            },
            {
                codigo: "004089",
                tipoDespesaId: 244,
                descricao: "32080 - PARAFUSO CANULADO 7.0 X 80 ROSCA 32"
            },
            {
                codigo: "001566",
                tipoDespesaId: 244,
                descricao: "5116-070-095 - PARAFUSO CANULADO 7.0 X 95 ROSCA 16"
            },
            {
                codigo: "001679",
                tipoDespesaId: 244,
                descricao: "5116-070-100 - PARAFUSO CANULADO 7.0 X 100 ROSCA 16"
            },
            {
                codigo: "004087",
                tipoDespesaId: 244,
                descricao: "319110 - PARAFUSO CANULADO 7.0 X 110 ROSCA 16"
            },
            {
                codigo: "000301",
                tipoDespesaId: 244,
                descricao: "31975 - PARAFUSO CANULADO 7.0 X 75 ROSCA 16"
            },
            {
                codigo: "004086",
                tipoDespesaId: 244,
                descricao: "319105 - PARAFUSO CANULADO 7.0 X 105 ROSCA 16"
            },
            {
                codigo: "000295",
                tipoDespesaId: 244,
                descricao: "319115 - PARAFUSO CANULADO 7.0 X 115 ROSCA 16"
            },
            {
                codigo: "000309",
                tipoDespesaId: 244,
                descricao: "31930 - PARAFUSO CANULADO 7.0 X 30 ROSCA 16"
            },
            {
                codigo: "000307",
                tipoDespesaId: 244,
                descricao: "31940 - PARAFUSO CANULADO 7.0 X 40 ROSCA 16"
            },
            {
                codigo: "006658",
                tipoDespesaId: 244,
                descricao: "4372 - CHAVE HEXAGONAL P/ USO 1.5"
            },
            {
                codigo: "006659",
                tipoDespesaId: 244,
                descricao: "4118 - CHAVE HEXAGONAL P/ USO 2.7"
            },
            {
                codigo: "002689",
                tipoDespesaId: 244,
                descricao: "40092000088 - MINI PARAFUSO CORTICAL 2.0 X 08"
            },
            {
                codigo: "002775",
                tipoDespesaId: 244,
                descricao: "40092700080 - MINI PARAFUSO CORTICAL 2.7 X 08"
            },
            {
                codigo: "002779",
                tipoDespesaId: 244,
                descricao: "40092700101 - MINI PARAFUSO CORTICAL 2.7 X 10"
            },
            {
                codigo: "002687",
                tipoDespesaId: 244,
                descricao: "40092000061 - MINI PARAFUSO CORTICAL 2.0 X 06"
            },
            {
                codigo: "002690",
                tipoDespesaId: 244,
                descricao: "40092000100 - MINI PARAFUSO CORTICAL 2.0 X 10"
            },
            {
                codigo: "002792",
                tipoDespesaId: 244,
                descricao: "40091500060 - MINI PARAFUSO CORTICAL 1.5 X 06"
            },
            {
                codigo: "002805",
                tipoDespesaId: 244,
                descricao: "40092700284 - PARAFUSO CORTICAL 2,7 X 28 MM"
            },
            {
                codigo: "002807",
                tipoDespesaId: 244,
                descricao: "40092700306 - MINI PARAFUSO CORTICAL 2.7 X 30"
            },
            {
                codigo: "002808",
                tipoDespesaId: 244,
                descricao: "40092700322 - PARAFUSO CORTICAL 2,7 X 32 MM"
            },
            {
                codigo: "002713",
                tipoDespesaId: 244,
                descricao: "40092000280 - PARAFUSO CORTICAL 2,0 X 28 MM"
            },
            {
                codigo: "002815",
                tipoDespesaId: 244,
                descricao: "40092700403 - MINI PARAFUSO CORTICAL 2.7 X 40"
            },
            {
                codigo: "002773",
                tipoDespesaId: 244,
                descricao: "40092700063 - MINI PARAFUSO CORTICAL 2.7 X 06"
            },
            {
                codigo: "002708",
                tipoDespesaId: 244,
                descricao: "40092000223 - MINI PARAFUSO CORTICAL 2.0 X 22"
            },
            {
                codigo: "002789",
                tipoDespesaId: 244,
                descricao: "40092700225 - MINI PARAFUSO CORTICAL 2.7 X 22"
            },
            {
                codigo: "002706",
                tipoDespesaId: 244,
                descricao: "40092000207 - MINI PARAFUSO CORTICAL 2.0 X 20"
            },
            {
                codigo: "002709",
                tipoDespesaId: 244,
                descricao: "40092000240 - MINI PARAFUSO CORTICAL 2.0 X 24"
            },
            {
                codigo: "002797",
                tipoDespesaId: 244,
                descricao: "40091500168 - MINI PARAFUSO CORTICAL 1.5 X 16"
            },
            {
                codigo: "002799",
                tipoDespesaId: 244,
                descricao: "40091500206 - MINI PARAFUSO CORTICAL 1.5 X 20"
            },
            {
                codigo: "002703",
                tipoDespesaId: 244,
                descricao: "40092000169 - MINI PARAFUSO CORTICAL 2.0 X 16"
            },
            {
                codigo: "002796",
                tipoDespesaId: 244,
                descricao: "40091500141 - MINI PARAFUSO CORTICAL 1.5 X 14"
            },
            {
                codigo: "002803",
                tipoDespesaId: 244,
                descricao: "40092700268 - MINI PARAFUSO CORTICAL 2.7 X 26"
            },
            {
                codigo: "002795",
                tipoDespesaId: 244,
                descricao: "40091500125 - MINI PARAFUSO CORTICAL 1.5 X 12"
            },
            {
                codigo: "002696",
                tipoDespesaId: 244,
                descricao: "40092000142 - MINI PARAFUSO CORTICAL 2.0 X 14"
            },
            {
                codigo: "002798",
                tipoDespesaId: 244,
                descricao: "40091500184 - MINI PARAFUSO CORTICAL 1.5 X 18"
            },
            {
                codigo: "002711",
                tipoDespesaId: 244,
                descricao: "40092000260 - MINI PARAFUSO CORTICAL 2.0 X 26"
            },
            {
                codigo: "004211",
                tipoDespesaId: 244,
                descricao: "40352700211 - PLACA EM L 2,7 MM ANG RETO DIREITA"
            },
            {
                codigo: "001925",
                tipoDespesaId: 244,
                descricao: "40012415304 - FIO DE KIRSCHNER 3.0"
            },
            {
                codigo: "000268",
                tipoDespesaId: 244,
                descricao: "31554 - PARAFUSO CANULADO 4.5 X 55"
            },
            {
                codigo: "001745",
                tipoDespesaId: 244,
                descricao: "5711-006-003 - PLACA EM T OBLIQUA BLOQUEADA X 03 FUROS"
            },
            {
                codigo: "000108",
                tipoDespesaId: 244,
                descricao: "21232 - PARAFUSO CORTICAL 4.5 X 32"
            },
            {
                codigo: "004914",
                tipoDespesaId: 244,
                descricao: "5204-001-012 - PLACA DCP 4.5 LARGA X 12 FUROS"
            },
            {
                codigo: "000750",
                tipoDespesaId: 244,
                descricao: "31324 - PARAFUSO CANULADO 3.5 24"
            },
            {
                codigo: "001262",
                tipoDespesaId: 244,
                descricao: "1.22.01/03 - ARRUELA FINA / LISA"
            },
            {
                codigo: "006444",
                tipoDespesaId: 244,
                descricao: "FIXADOR EXTERNO TIPO PLATAFORMA - SISTEMA DE ALONGAMENTO / TRANSPLANTE OSSEO"
            },
            {
                codigo: "006266",
                tipoDespesaId: 244,
                descricao: "FL21048 - FIO LISO GDFIX A 2,0 X 300MM"
            },
            {
                codigo: "001321",
                tipoDespesaId: 244,
                descricao: "1.22.22/02 - PLACA DE CONEXAO CURTA X 02 FUROS"
            },
            {
                codigo: "001293",
                tipoDespesaId: 244,
                descricao: "1.22.13/18 - BARRA ROSQUEADA 180 MM"
            },
            {
                codigo: "001347",
                tipoDespesaId: 244,
                descricao: "1.22.28/13 - SEMI-ANEL 130 MM"
            },
            {
                codigo: "004694",
                tipoDespesaId: 244,
                descricao: "3-11-01 - CONECTOR BARRA PINO (TUBO A TUBO)"
            },
            {
                codigo: "004279",
                tipoDespesaId: 244,
                descricao: "1.11.03/15 - FIXADOR BARRA TUBO A TUBO 150MM"
            },
            {
                codigo: "006644",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.200 - GDFIX BARRA LONGITUDINAL RANHURADA 200MM"
            },
            {
                codigo: "000010",
                tipoDespesaId: 244,
                descricao: "20632 - PARAFUSO CORTICAL 3.5 X 32"
            },
            {
                codigo: "000352",
                tipoDespesaId: 244,
                descricao: "20810 - PARAFUSO ESPONJOSO 4.0 X 10 ROSCA CURTA"
            },
            {
                codigo: "006155",
                tipoDespesaId: 244,
                descricao: "6165/01 - PARAFUSO A 2,5 X 12MM ROSCA TOTAL"
            },
            {
                codigo: "006400",
                tipoDespesaId: 244,
                descricao: "6164/01 - PLACA EM T OBLIQUA ESQUERDA 3 FUROS"
            },
            {
                codigo: "004189",
                tipoDespesaId: 244,
                descricao: "1050210380 - HASTE DFN FEMORAL 10X380"
            },
            {
                codigo: "004465",
                tipoDespesaId: 244,
                descricao: "1050211340 - HASTE DFN FEMORAL 11X340"
            },
            {
                codigo: "001887",
                tipoDespesaId: 244,
                descricao: "40011000120 - FIO P/ CERCLAGEM 1.2 MM"
            },
            {
                codigo: "001174",
                tipoDespesaId: 244,
                descricao: "1050349035 - PARAFUSO DE BLOQUEIO DFN 4.9 X 35"
            },
            {
                codigo: "001175",
                tipoDespesaId: 244,
                descricao: "1050349040 - PARAFUSO DE BLOQUEIO DFN 4.9 X 40"
            },
            {
                codigo: "001181",
                tipoDespesaId: 244,
                descricao: "1050349070 - PARAFUSO DE BLOQUEIO DFN 4.9 X 70"
            },
            {
                codigo: "001182",
                tipoDespesaId: 244,
                descricao: "1050349075 - PARAFUSO DE BLOQUEIO DFN 4.9 X 75"
            },
            {
                codigo: "001183",
                tipoDespesaId: 244,
                descricao: "1050349080 - PARAFUSO DE BLOQUEIO DFN 4.9 X 80"
            },
            {
                codigo: "000244",
                tipoDespesaId: 244,
                descricao: "31544 - PARAFUSO CANULADO 4.5 X 44"
            },
            {
                codigo: "000925",
                tipoDespesaId: 244,
                descricao: "1711 - FRESA CANULADA 5.0"
            },
            {
                codigo: "004043",
                tipoDespesaId: 244,
                descricao: "1090/05 - CABECA INTERCAMBIAVEL CONE 12/14  32 S"
            },
            {
                codigo: "004044",
                tipoDespesaId: 244,
                descricao: "1090/06 - CABECA INTERCAMBIAVEL CONE 12/14  32 M"
            },
            {
                codigo: "006666",
                tipoDespesaId: 244,
                descricao: "2018 - BROCA FLEXIVEL A 3,2"
            },
            {
                codigo: "005793",
                tipoDespesaId: 244,
                descricao: "000100 - CIMENTO OSSEO COM ANTIBIOTICO G 40G 20ML.....880200  Lote: 47892 Validade: 02/01"
            },
            {
                codigo: "006670",
                tipoDespesaId: 244,
                descricao: "392-009-135 - Haste Umeral  135  9 x 115 mm"
            },
            {
                codigo: "006671",
                tipoDespesaId: 244,
                descricao: "0392-044-0EL - Cabeca Umeral  Colo Longo"
            },
            {
                codigo: "002415",
                tipoDespesaId: 244,
                descricao: "40205100074 - PLACA 1/3 TUBULAR X 06 FUROS"
            },
            {
                codigo: "004532",
                tipoDespesaId: 244,
                descricao: "5708-150-080 - PARAFUSO BLOQUEADO 4.5 X 80"
            },
            {
                codigo: "004520",
                tipoDespesaId: 244,
                descricao: "5708-150-070 - PARAFUSO BLOQUEADO 4.5 X 70"
            },
            {
                codigo: "001191",
                tipoDespesaId: 244,
                descricao: "450311340 - HASTE PFN LONGO DIREITO 11X340"
            },
            {
                codigo: "001892",
                tipoDespesaId: 244,
                descricao: "40011000155 - FIO P/ CERCLAGEM"
            },
            {
                codigo: "001178",
                tipoDespesaId: 244,
                descricao: "1050349055 - PARAFUSO DE BLOQUEIO DFN 4.9 X 55"
            },
            {
                codigo: "004576",
                tipoDespesaId: 244,
                descricao: "1050210340 - HASTE DFN FEMORAL 10X380"
            },
            {
                codigo: "000583",
                tipoDespesaId: 244,
                descricao: "31230 - PARAFUSO HERBERT 2.7 X 30"
            },
            {
                codigo: "000581",
                tipoDespesaId: 244,
                descricao: "31226 - PARAFUSO HERBERT 2.7 X 26"
            },
            {
                codigo: "004278",
                tipoDespesaId: 244,
                descricao: "FIXADOR EXTERNO TIPO PLATAFORMA - SISTEMA DE ALONGAMENTO / TRANSPLANTE OSSEO"
            },
            {
                codigo: "001371",
                tipoDespesaId: 244,
                descricao: "2.1240.50/150 - PINO DE SCHANZ 4.0 X 150"
            },
            {
                codigo: "004215",
                tipoDespesaId: 244,
                descricao: "40352700327 - PLACA EM L 2,7 MM  ESQUERDA"
            },
            {
                codigo: "006677",
                tipoDespesaId: 244,
                descricao: "1033/70 - PROTESE ACETABULAR A70 X A32MM"
            },
            {
                codigo: "006676",
                tipoDespesaId: 244,
                descricao: "1033/68 - PROTESE ACETABULAR A68 X A32MM"
            },
            {
                codigo: "006675",
                tipoDespesaId: 244,
                descricao: "1033/66 - PROTESE ACETABULAR A66 X A32MM"
            },
            {
                codigo: "006674",
                tipoDespesaId: 244,
                descricao: "1033/64 - PROTESE ACETABULAR A64 X A32MM"
            },
            {
                codigo: "001288",
                tipoDespesaId: 244,
                descricao: "1.22.13/06 - BARRA ROSQUEADA 60 MM"
            },
            {
                codigo: "001297",
                tipoDespesaId: 244,
                descricao: "1.22.13/35 - BARRA ROSQUEADA 350 MM"
            },
            {
                codigo: "001351",
                tipoDespesaId: 244,
                descricao: "1.22.28/18 - SEMI-ANEL 180 MM"
            },
            {
                codigo: "001306",
                tipoDespesaId: 244,
                descricao: "1.22.17/01 - FIXA-FIO COM FURO 20 MM"
            },
            {
                codigo: "000216",
                tipoDespesaId: 244,
                descricao: "20624. - PARAFUSO CORTICAL 3.5 X 24"
            },
            {
                codigo: "000324",
                tipoDespesaId: 244,
                descricao: "60205. - PLACA 1/3 TUBULAR X 05 FUROS"
            },
            {
                codigo: "000211",
                tipoDespesaId: 244,
                descricao: "60607. - PLACA DCP 3.5 X 07 FUROS"
            },
            {
                codigo: "004092",
                tipoDespesaId: 244,
                descricao: "32085 - PARAFUSO CANULADO 7.0 X 85 ROSCA 32"
            },
            {
                codigo: "000246",
                tipoDespesaId: 244,
                descricao: "31542 - PARAFUSO CANULADO 4.5 X 40"
            },
            {
                codigo: "000171",
                tipoDespesaId: 244,
                descricao: "450810090 - PARAFUSO DESLIZANTE PFN X 90"
            },
            {
                codigo: "000298",
                tipoDespesaId: 244,
                descricao: "31990 - PARAFUSO CANULADO 7.0 X 90 ROSCA 16"
            },
            {
                codigo: "000135",
                tipoDespesaId: 244,
                descricao: "450517000 - END CAP CURTO"
            },
            {
                codigo: "004232",
                tipoDespesaId: 244,
                descricao: "450112170 - HASTE PFN CURTO 12X170"
            },
            {
                codigo: "000630",
                tipoDespesaId: 244,
                descricao: "40195 - PARAFUSO DESLIZANTE  X 95"
            },
            {
                codigo: "001427",
                tipoDespesaId: 244,
                descricao: "5212-010-123 - PLACA 1/3 TUBULAR X 10 FUROS"
            },
            {
                codigo: "005355",
                tipoDespesaId: 244,
                descricao: "3079 - PARAFUSO CORTICAL 3.5 X 12."
            },
            {
                codigo: "001067",
                tipoDespesaId: 244,
                descricao: "9010360 - HASTE BLOQUEADA DE TIBIA 10X360"
            },
            {
                codigo: "000290",
                tipoDespesaId: 244,
                descricao: "32045 - PARAFUSO CANULADO 7.0 X 45 ROSCA 32"
            },
            {
                codigo: "001353",
                tipoDespesaId: 244,
                descricao: "1.22.28/22 - SEMI-ANEL 220 MM"
            },
            {
                codigo: "001357",
                tipoDespesaId: 244,
                descricao: "1.22.30/14 - SEMI-ANEL DE FEMUR 140"
            },
            {
                codigo: "001358",
                tipoDespesaId: 244,
                descricao: "1.22.32/00 - SUPORTE DE SEMI-ANEL EM C"
            },
            {
                codigo: "001325",
                tipoDespesaId: 244,
                descricao: "1.22.22/06 - PLACA DE CONEXAO CURTA X 06 FUROS"
            },
            {
                codigo: "001278",
                tipoDespesaId: 244,
                descricao: "1.22.06/03 - DADO DE 3 FUROS"
            },
            {
                codigo: "000100",
                tipoDespesaId: 244,
                descricao: "21216 - PARAFUSO CORTICAL 4.5 X 16"
            },
            {
                codigo: "004005",
                tipoDespesaId: 244,
                descricao: "1001/14 - HASTE FEMORAL UNION TAMANHO 13 CONE 12/14"
            },
            {
                codigo: "004052",
                tipoDespesaId: 244,
                descricao: "1088/05 - CABECA INTERCAMBIAVEL CONE 12/14  28 S"
            },
            {
                codigo: "004277",
                tipoDespesaId: 244,
                descricao: "1.11.03/10 - FIXADOR BARRA TUBO A TUBO 100MM"
            },
            {
                codigo: "006443",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.200 - GDFIX BARRA LONGITUDINAL RANHURADA 200MM"
            },
            {
                codigo: "006635",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.100 - GDFIX BARRA LONGITUDINAL RANHURADA 100MM"
            },
            {
                codigo: "001309",
                tipoDespesaId: 244,
                descricao: "1.22.18/01 - FIXADOR EXTERNO CIRCULAR / SEMI-CIRCULAR"
            },
            {
                codigo: "001338",
                tipoDespesaId: 244,
                descricao: "1.22.25/03 - PLACA TORCIDA X 03 FUROS"
            },
            {
                codigo: "004647",
                tipoDespesaId: 244,
                descricao: "5-21-04 - PLACA TORCIDA 4 FUROS"
            },
            {
                codigo: "001270",
                tipoDespesaId: 244,
                descricao: "1.22.03/03 - BANDEIRA MACHO 3 FUROS"
            },
            {
                codigo: "004665",
                tipoDespesaId: 244,
                descricao: "5-09-04 - BANDEIRA MACHO 4 FUROS"
            },
            {
                codigo: "001346",
                tipoDespesaId: 244,
                descricao: "1.22.28/12 - SEMI-ANEL 120 MM"
            },
            {
                codigo: "001312",
                tipoDespesaId: 244,
                descricao: "1.22.19/10 - PARAFUSO SEXTAVADO 10MM"
            },
            {
                codigo: "001292",
                tipoDespesaId: 244,
                descricao: "1.22.13/15 - BARRA ROSQUEADA 150 MM"
            },
            {
                codigo: "001348",
                tipoDespesaId: 244,
                descricao: "1.22.28/14 - SEMI-ANEL 140 MM"
            },
            {
                codigo: "001280",
                tipoDespesaId: 244,
                descricao: "1.22.07/00 - CARDAM"
            },
            {
                codigo: "000053",
                tipoDespesaId: 244,
                descricao: "951812 - ARRUELA 12.0 MM"
            },
            {
                codigo: "006507",
                tipoDespesaId: 244,
                descricao: "6580/01 - PLACA DE UMERO X 03 FUROS"
            },
            {
                codigo: "004598",
                tipoDespesaId: 244,
                descricao: "0071035-340 - HASTE BLOQUEADA DE TIBIA 10X360"
            },
            {
                codigo: "000023",
                tipoDespesaId: 244,
                descricao: "60209. - PLACA 1/3 TUBULAR X 09 FUROS"
            },
            {
                codigo: "000007",
                tipoDespesaId: 244,
                descricao: "20612. - PARAFUSO CORTICAL 3.5 X 12"
            },
            {
                codigo: "004073",
                tipoDespesaId: 244,
                descricao: "1002/50 - PROTESE ACETABULAR 50MM"
            },
            {
                codigo: "004008",
                tipoDespesaId: 244,
                descricao: "3330/25 - PARAFUSO DE TITANIO 6.5 X 25"
            },
            {
                codigo: "004391",
                tipoDespesaId: 244,
                descricao: "3330/20 - PARAFUSO DE TITANIO 6.5 X 20"
            },
            {
                codigo: "004345",
                tipoDespesaId: 244,
                descricao: "1001/15 - HASTE FEMORAL UNION TAMANHO 14 CONE 12/14"
            },
            {
                codigo: "004611",
                tipoDespesaId: 244,
                descricao: "5711-008-105-0 - PLACA BLOQUEADA LPS CLAVICULA DISTAL ESQUERDA EM ACO 5 FUROS"
            },
            {
                codigo: "004614",
                tipoDespesaId: 244,
                descricao: "5711-008-005-0 - PLACA BLOQUEADA LPS CLAVICULA DISTAL DIREITA EM ACO 5 FUROS"
            },
            {
                codigo: "006418",
                tipoDespesaId: 244,
                descricao: "BR0145 - BROCA DE PERFURACAO OSSEA A3,2 X 180MM"
            },
            {
                codigo: "006419",
                tipoDespesaId: 244,
                descricao: "BR0162 - BROCA DE PERFURACAO OSSEA A4,5 X 200MM"
            },
            {
                codigo: "006420",
                tipoDespesaId: 244,
                descricao: "CH0106 - CHAVE T"
            },
            {
                codigo: "006421",
                tipoDespesaId: 244,
                descricao: "CH0211 - CHAVE COMBINADA 13,0MM"
            },
            {
                codigo: "006422",
                tipoDespesaId: 244,
                descricao: "CX.1831 - GD CAIXA PARA FIXADOR FAST 1"
            },
            {
                codigo: "006632",
                tipoDespesaId: 244,
                descricao: "FX.1801 - GDFIX BARRA BARRA FAST"
            },
            {
                codigo: "006637",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.125 - GDFIX BARRA LONGITUDINAL RANHURADA 125MM"
            },
            {
                codigo: "006640",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.150 - GDFIX BARRA LONGITUDINAL RANHURADA 150MM"
            },
            {
                codigo: "006441",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.175 - GDFIX BARRA LONGITUDINAL RANHURADA 175MM"
            },
            {
                codigo: "006445",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.250 - GDFIX BARRA LONGITUDINAL RANHURADA 250MM"
            },
            {
                codigo: "006447",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.275 - GDFIX BARRA LONGITUDINAL RANHURADA 275MM"
            },
            {
                codigo: "006647",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.300 - GDFIX BARRA LONGITUDINAL RANHURADA 300MM"
            },
            {
                codigo: "006648",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.350 - GDFIX BARRA LONGITUDINAL RANHURADA 350MM"
            },
            {
                codigo: "006650",
                tipoDespesaId: 244,
                descricao: "FX.1804.R.400 - GDFIX BARRA LONGITUDINAL RANHURADA 400MM"
            },
            {
                codigo: "006458",
                tipoDespesaId: 244,
                descricao: "GB1860.3 - GD GUIA DE BROCA TRIPLO DIAM. 6,0MM"
            },
            {
                codigo: "006457",
                tipoDespesaId: 244,
                descricao: "GB1850.3 - GD GUIA DE BROCA TRIPLO DIAM. 5,0MM"
            },
            {
                codigo: "006460",
                tipoDespesaId: 244,
                descricao: "PS21045 - PINO DE SCHANZ RP A 5,0 X 200 R50MM"
            },
            {
                codigo: "006025",
                tipoDespesaId: 244,
                descricao: "6373/03 - PLACA EM L BLOQUEADA  ESQ   05 FUROS"
            },
            {
                codigo: "000079",
                tipoDespesaId: 244,
                descricao: "21775 - PARAFUSO ESPONJOSO 6.5 X 75 ROSCA 32"
            },
            {
                codigo: "000115",
                tipoDespesaId: 244,
                descricao: "21246 - PARAFUSO CORTICAL 4.5 X 46"
            },
            {
                codigo: "000237",
                tipoDespesaId: 244,
                descricao: "31556 - PARAFUSO CANULADO 4.5 X 56"
            },
            {
                codigo: "004578",
                tipoDespesaId: 244,
                descricao: "5708-150-060 - PARAFUSO BLOQUEADO 4.5 X 60"
            },
            {
                codigo: "000225",
                tipoDespesaId: 244,
                descricao: "31572 - PARAFUSO CANULADO 4.5 X 72"
            },
            {
                codigo: "000107",
                tipoDespesaId: 244,
                descricao: "21230 - PARAFUSO CORTICAL 4.5 X 30"
            },
            {
                codigo: "001437",
                tipoDespesaId: 244,
                descricao: "5710-002-008 - PLACA DCP ESTREITA BLOQUEADA X 08 FUROS"
            },
            {
                codigo: "004913",
                tipoDespesaId: 244,
                descricao: "5119-045-025 - PARAFUSO CANULADO 4.5 X 35"
            },
            {
                codigo: "005516",
                tipoDespesaId: 244,
                descricao: "3058 - PARAFUSO CORTICAL 4.5 X 65"
            },
            {
                codigo: "002640",
                tipoDespesaId: 244,
                descricao: "40174516509 - PARAFUSO CANULADO 4.5 X 45"
            },
            {
                codigo: "001505",
                tipoDespesaId: 244,
                descricao: "5104-045-046 - PARAFUSO CORTICAL 4.5 X 45"
            },
            {
                codigo: "004579",
                tipoDespesaId: 244,
                descricao: "5708-150-065 - PARAFUSO BLOQUEADO 4.5 X 65"
            },
            {
                codigo: "001406",
                tipoDespesaId: 244,
                descricao: "5710-001-008 - PLACA DCP BLOQUEADA X 08 FUROS"
            },
            {
                codigo: "001752",
                tipoDespesaId: 244,
                descricao: "5708-150-030 - PARAFUSO BLOQUEADO 4.5 X 30"
            },
            {
                codigo: "005092",
                tipoDespesaId: 244,
                descricao: "5708-150-028 - PARAFUSO BLOQUEADO 4.5 X 28"
            },
            {
                codigo: "006263",
                tipoDespesaId: 244,
                descricao: "740030100 - EQUIPO DE IRRIGACAO RAZEK PUMP - STK"
            },
            {
                codigo: "001176",
                tipoDespesaId: 244,
                descricao: "1050349045 - PARAFUSO DE BLOQUEIO DFN 4.9 X 45"
            },
            {
                codigo: "000226",
                tipoDespesaId: 244,
                descricao: "20820 - PARAFUSO ESPONJOSO 4.0 X 20 ROSCA CURTA"
            },
            {
                codigo: "002574",
                tipoDespesaId: 244,
                descricao: "40173513409 - PARAFUSO CANULADO 3.5 X 35"
            },
            {
                codigo: "005755",
                tipoDespesaId: 244,
                descricao: "4430/06 - PLACA 1/3 TUBO 7 FUROS"
            },
            {
                codigo: "005384",
                tipoDespesaId: 244,
                descricao: "5117-070-065 - PARAFUSO CANULADO 7.0 X 65 ROSCA 32"
            },
            {
                codigo: "001685",
                tipoDespesaId: 244,
                descricao: "5117-070-050 - PARAFUSO CANULADO 7.0 X 50 ROSCA 32"
            },
            {
                codigo: "001548",
                tipoDespesaId: 244,
                descricao: "5116-070-070 - PARAFUSO CANULADO 7.0 X 70 ROSCA 16"
            },
            {
                codigo: "000113",
                tipoDespesaId: 244,
                descricao: "21242 - PARAFUSO CORTICAL 4.5 X 38"
            },
            {
                codigo: "001718",
                tipoDespesaId: 244,
                descricao: "5210-001-007 - PLACA DCP 4.5 ESTREITA X 07 FUROS"
            },
            {
                codigo: "000003",
                tipoDespesaId: 244,
                descricao: "20622. - PARAFUSO CORTICAL 3.5 X 22"
            },
            {
                codigo: "000064",
                tipoDespesaId: 244,
                descricao: "60407 - PLACA DCP 4.5 ESTREITA X 07 FUROS"
            },
            {
                codigo: "001201",
                tipoDespesaId: 244,
                descricao: "450411380 - HASTE PFN LONGO ESQUERDO 11X380"
            },
            {
                codigo: "005059",
                tipoDespesaId: 244,
                descricao: "0121020-050 - PARAFUSO DE BLOQUEIO 4.5 X 50"
            },
            {
                codigo: "000142",
                tipoDespesaId: 244,
                descricao: "45055 - PARAFUSO DE BLOQUEIO 4.5 X 55"
            },
            {
                codigo: "005461",
                tipoDespesaId: 244,
                descricao: "3093/07 - PARAFUSO CORTICAL 3.5 X 50"
            },
            {
                codigo: "005169",
                tipoDespesaId: 244,
                descricao: "40330000349 - PLACA EM T 3.5 3X4 FUROS"
            },
            {
                codigo: "005455",
                tipoDespesaId: 244,
                descricao: "3090 - PARAFUSO CORTICAL 3.5 X 35"
            },
            {
                codigo: "005459",
                tipoDespesaId: 244,
                descricao: "3093/02 - PARAFUSO CORTICAL 3.5 X 42"
            },
            {
                codigo: "005084",
                tipoDespesaId: 244,
                descricao: "4210/19 - PARAFUSO CORTICAL 3.5 X 55"
            },
            {
                codigo: "005458",
                tipoDespesaId: 244,
                descricao: "3093/01 - PARAFUSO CORTICAL 3.5 X 40"
            },
            {
                codigo: "005453",
                tipoDespesaId: 244,
                descricao: "3088 - PARAFUSO CORTICAL 3.5 X 30"
            },
            {
                codigo: "000089",
                tipoDespesaId: 244,
                descricao: "21675 - PARAFUSO ESPONJOSO 6.5 X 75"
            },
            {
                codigo: "000092",
                tipoDespesaId: 244,
                descricao: "21660 - PARAFUSO ESPONJOSO 6.5 X 60 ROSCA 16"
            },
            {
                codigo: "002498",
                tipoDespesaId: 244,
                descricao: "40304002046 - PLACA EM L 4.5 ESQUERDA X 04 FUROS"
            },
            {
                codigo: "000220",
                tipoDespesaId: 244,
                descricao: "21256 - PARAFUSO CORTICAL 4.5 X 56"
            },
            {
                codigo: "005478",
                tipoDespesaId: 244,
                descricao: "3044 - PARAFUSO CORTICAL 4.5 X 44"
            },
            {
                codigo: "001487",
                tipoDespesaId: 244,
                descricao: "5209-002-004 - PLACA EM L 4.5 ESQUERDA X 04 FUROS"
            },
            {
                codigo: "000090",
                tipoDespesaId: 244,
                descricao: "21670 - PARAFUSO ESPONJOSO 6.5 X 70 ROSCA 16"
            },
            {
                codigo: "005515",
                tipoDespesaId: 244,
                descricao: "3056 - PARAFUSO CORTICAL 4.5 X 56"
            },
            {
                codigo: "000016",
                tipoDespesaId: 244,
                descricao: "20642. - PARAFUSO CORTICAL 3.5 X 42"
            },
            {
                codigo: "000011",
                tipoDespesaId: 244,
                descricao: "20634 - PARAFUSO CORTICAL 3.5 X 34"
            },
            {
                codigo: "000024",
                tipoDespesaId: 244,
                descricao: "60210. - PLACA 1/3 TUBULAR X 10 FUROS"
            },
            {
                codigo: "001559",
                tipoDespesaId: 244,
                descricao: "5206-003-004 - PLACA EM T 3.5 3X4 FUROS"
            },
            {
                codigo: "000205",
                tipoDespesaId: 244,
                descricao: "31546 - PARAFUSO CANULADO 4.5 X 46"
            },
            {
                codigo: "000131",
                tipoDespesaId: 244,
                descricao: "45050 - PARAFUSO DE BLOQUEIO 4.5 X 50"
            },
            {
                codigo: "000327",
                tipoDespesaId: 244,
                descricao: "60207. - PLACA 1/3 TUBULAR X 07 FUROS"
            },
            {
                codigo: "001475",
                tipoDespesaId: 244,
                descricao: "5708-135-045 - PARAFUSO BLOQUEADO 3.5 X 45"
            },
            {
                codigo: "000014",
                tipoDespesaId: 244,
                descricao: "20638. - PARAFUSO CORTICAL 3.5 X 38"
            },
            {
                codigo: "000547",
                tipoDespesaId: 244,
                descricao: "473530 - PARAFUSO BLOQUEADO 3.5 X 30"
            },
            {
                codigo: "001467",
                tipoDespesaId: 244,
                descricao: "5708-135-026 - PARAFUSO BLOQUEADO 3.5 X 26"
            },
            {
                codigo: "001469",
                tipoDespesaId: 244,
                descricao: "5708-135-028 - PARAFUSO BLOQUEADO 3.5 X 28"
            },
            {
                codigo: "002416",
                tipoDespesaId: 244,
                descricao: "40205100082 - PLACA 1/3 TUBULAR X 08 FUROS"
            },
            {
                codigo: "001147",
                tipoDespesaId: 244,
                descricao: "450211235 - HASTE PFN CURTO 11X235"
            },
            {
                codigo: "006164",
                tipoDespesaId: 244,
                descricao: "6165/09 - PARAFUSO A 2,5 X 28 ROSCA TOTAL"
            },
            {
                codigo: "006163",
                tipoDespesaId: 244,
                descricao: "6165/08 - PARAFUSO A 2,5 X 26 ROSCA TOTAL"
            },
            {
                codigo: "006162",
                tipoDespesaId: 244,
                descricao: "6165/07 - PARAFUSO A 2,5 X 24 ROSCA TOTAL"
            },
            {
                codigo: "006161",
                tipoDespesaId: 244,
                descricao: "6165/06 - PARAFUSO A 2,5 X 22 ROSCA TOTAL"
            },
            {
                codigo: "005347",
                tipoDespesaId: 244,
                descricao: "430205 - PLACA TIBIAL ESQUERDA X 05 FUROS"
            },
            {
                codigo: "004906",
                tipoDespesaId: 244,
                descricao: "6800/02 - PLACA DISTAL TIBIAL ESQUERDA 6 FUROS"
            },
            {
                codigo: "005348",
                tipoDespesaId: 244,
                descricao: "430209 - PLACA TIBIAL ESQUERDA X 09 FUROS BLOQUEADA"
            },
            {
                codigo: "005349",
                tipoDespesaId: 244,
                descricao: "430203 - PLACA TIBIAL ESQUERDA X 03 FUROS"
            },
            {
                codigo: "006486",
                tipoDespesaId: 244,
                descricao: "430207 - PLACA TIBIAL ESQUERDA X 07 FUROS"
            },
            {
                codigo: "006212",
                tipoDespesaId: 244,
                descricao: "430204 - PLACA TIBIAL ESQUERDA 04 FUROS RMS 80057410037 LF 3466/24 (Qt: 2.00)"
            },
            {
                codigo: "006488",
                tipoDespesaId: 244,
                descricao: "430107 - PLACA BLOQUEADA DE TIBIAL DIREITA 7 FUROS"
            },
            {
                codigo: "006487",
                tipoDespesaId: 244,
                descricao: "430103 - PLACA BLOQUEADA DE TIBIAL DIREITA 3 FUROS"
            },
            {
                codigo: "006211",
                tipoDespesaId: 244,
                descricao: "430112 - PLACA TIBIAL DIREITA 12 FUROS RMS 80057410037 LF 6470/24 (Qt: 1.00)"
            },
            {
                codigo: "005345",
                tipoDespesaId: 244,
                descricao: "430109 - PLACA TIBIAL DIREITA X 09 FUROS"
            },
            {
                codigo: "006704",
                tipoDespesaId: 244,
                descricao: "2010 - IMPACTOR MULLER"
            },
            {
                codigo: "006705",
                tipoDespesaId: 244,
                descricao: "2086/01 - IMPACTOR DE INSERTO 32MM"
            },
            {
                codigo: "006706",
                tipoDespesaId: 244,
                descricao: "2086 - IMPACTOR DE INSERTO A 28MM"
            },
            {
                codigo: "004024",
                tipoDespesaId: 244,
                descricao: "4994 - PARAFUSO BLOQUEADO 3.5 X 16"
            },
            {
                codigo: "006709",
                tipoDespesaId: 244,
                descricao: "5012 - PARAF CORT AUTO ROSQ BLOQ A3,5X50"
            },
            {
                codigo: "006710",
                tipoDespesaId: 244,
                descricao: "6160/01 - PLACA PARA CLAVICULA DISTAL DIREITA 4 FUROS"
            },
            {
                codigo: "006713",
                tipoDespesaId: 244,
                descricao: "6160/04 - PLACA PARA CLAVICULA DISTAL DIREITA 7 FUROS"
            },
            {
                codigo: "004846",
                tipoDespesaId: 244,
                descricao: "6373/04 - PLACA EM L BLOQUEADA  ESQ   06 FUROS"
            },
            {
                codigo: "006412",
                tipoDespesaId: 244,
                descricao: "6371/04 - PLACA EM T CURVO 2 X 6 FUROS X 135"
            },
            {
                codigo: "006721",
                tipoDespesaId: 244,
                descricao: "6371/08 - PLACA EM T CURVO 2 X 10 FUROS X 211"
            },
            {
                codigo: "005025",
                tipoDespesaId: 244,
                descricao: "6373/02 - PLACA EM L BLOQUEADA X 04 FUROS"
            },
            {
                codigo: "006024",
                tipoDespesaId: 244,
                descricao: "6373/08 - PLACA EM L BLOQUEADA  ESQ   10 FUROS"
            },
            {
                codigo: "006728",
                tipoDespesaId: 244,
                descricao: "6372/08 - PLACA EM L BLOQUEADA 2X10 FUROS"
            },
            {
                codigo: "006745",
                tipoDespesaId: 244,
                descricao: "6701 - PARAFUSO AUTO ROSQUEANTE A 5,0 X 65"
            },
            {
                codigo: "006156",
                tipoDespesaId: 244,
                descricao: "6165/02 - PARAFUSO A 2,5 X 14MM ROSCA TOTAL"
            },
            {
                codigo: "006157",
                tipoDespesaId: 244,
                descricao: "6165/03 - PARAFUSO A 2,5 X 16MM ROSCA TOTAL"
            },
            {
                codigo: "006158",
                tipoDespesaId: 244,
                descricao: "6165/04 - PARAFUSO A 2,5 X 18MM ROSCA TOTAL"
            },
            {
                codigo: "006730",
                tipoDespesaId: 244,
                descricao: "6165/05 - PARAFUSO A 2,5 X 20MM ROSCA TOTAL"
            },
            {
                codigo: "006723",
                tipoDespesaId: 244,
                descricao: "6373/01 - PLACA EM L BLOQUEADA 2X3 FUROS"
            },
            {
                codigo: "004989",
                tipoDespesaId: 244,
                descricao: "81235 - PLACA EM T 3.5 BLOQUEADA 3X5 FUROS"
            },
            {
                codigo: "005045",
                tipoDespesaId: 244,
                descricao: "5711-002-005 - PLACA BLOQUEADA EM T X 05 FUROS"
            },
            {
                codigo: "001471",
                tipoDespesaId: 244,
                descricao: "5708-135-034 - PARAFUSO BLOQUEADO 3.5 X 35"
            },
            {
                codigo: "004027",
                tipoDespesaId: 244,
                descricao: "5011 - PARAFUSO BLOQUEADO 3.5 X 45"
            },
            {
                codigo: "001682",
                tipoDespesaId: 244,
                descricao: "5116-070-090 - PARAFUSO CANULADO 7.0 X 90"
            },
            {
                codigo: "002467",
                tipoDespesaId: 244,
                descricao: "40303002034 - PLACA  EM T 03 F"
            },
            {
                codigo: "001490",
                tipoDespesaId: 244,
                descricao: "5220-001-006 - PLACA DCP 3.5 X 06 FUROS"
            },
            {
                codigo: "001541",
                tipoDespesaId: 244,
                descricao: "5220-001-007 - PLACA DCP 3.5 X 07 FUROS"
            },
        ]
    },
    {
        cnpj: "19011425000124",
        razao: "ORTOMIX COM. ATAC. PROD. ORTOPEDICOS EIRELI-EPP",
        itens: [
            {
                codigo: "BA0010FAA",
                tipoDespesaId: 244,
                descricao: "BROCA PERFURACAO CRANIO EASYDRILL 14X11X3 (BRANCO)"
            },
            {
                codigo: "DVEAF35",
                tipoDespesaId: 244,
                descricao: "DVE DRENAGEM VENTRICULAR EXTERNA"
            },
            {
                codigo: "136150306004",
                tipoDespesaId: 244,
                descricao: "PAR.FENDA CRUZ 1,5X04MM"
            },
            {
                codigo: "136150306005",
                tipoDespesaId: 244,
                descricao: "PAR.FENDA CRUZ 1,5X05MM"
            },
            {
                codigo: "136200306005",
                tipoDespesaId: 244,
                descricao: "PAR.FENDA CRUZ 2,0X05MM"
            },
            {
                codigo: "15.1005.272",
                tipoDespesaId: 244,
                descricao: "MICRO PLACA TELA C/ QUAD 0,2MM"
            },
            {
                codigo: "167150110000",
                tipoDespesaId: 244,
                descricao: "MICRO PLACA ORBITAL 10F"
            },
            {
                codigo: "167150204090",
                tipoDespesaId: 244,
                descricao: "MICRO PLACA PONTE 4F 9MM"
            },
            {
                codigo: "167201204125",
                tipoDespesaId: 244,
                descricao: "MINI PLACA L ESQ 12,5MM"
            },
            {
                codigo: "973860000",
                tipoDespesaId: 244,
                descricao: "FRESA ESF DIAMANT 5X55 TPS"
            },
            {
                codigo: "12.5.1116.016E",
                tipoDespesaId: 244,
                descricao: "FRESA CRANIOTOMO 1,6X16 ER-11 (ADULT)"
            },
            {
                codigo: "738420810",
                tipoDespesaId: 244,
                descricao: "FRESA ESF CORT RAP 5,0X95 U2"
            },
            {
                codigo: "136200306006",
                tipoDespesaId: 244,
                descricao: "PAR.FENDA CRUZ 2,0X06MM"
            },
            {
                codigo: "136200306008",
                tipoDespesaId: 244,
                descricao: "PAR.FENDA CRUZ 2,0X08MM"
            },
            {
                codigo: "136200309008",
                tipoDespesaId: 244,
                descricao: "PAR. CORT. LOCK. FENDA CRUZ 2,0X08MM"
            },
            {
                codigo: "136200309010",
                tipoDespesaId: 244,
                descricao: "PAR. CORT. LOCK. FENDA CRUZ 2,0X10MM"
            },
            {
                codigo: "167200004000",
                tipoDespesaId: 244,
                descricao: "MINI PLACA RETA 4F"
            },
            {
                codigo: "167200204030",
                tipoDespesaId: 244,
                descricao: "MINI PLACA PONTE LOCK 4F"
            },
            {
                codigo: "167201104065",
                tipoDespesaId: 244,
                descricao: "MINI PLACA L DIR 6,5MM"
            },
            {
                codigo: "973650000",
                tipoDespesaId: 244,
                descricao: "FRESA ESF DIAMANT 4X44,5 TPS"
            },
            {
                codigo: "ADM10223D",
                tipoDespesaId: 244,
                descricao: "VALVULA HIDRO SPHERA ADUL MEDIA PRESSAO"
            },
            {
                codigo: "167152004075",
                tipoDespesaId: 244,
                descricao: "MICRO PLACA T 4F 7,5MM"
            },
            {
                codigo: "167152504080",
                tipoDespesaId: 244,
                descricao: "MICRO PLACA Y 8MM"
            },
            {
                codigo: "167152504120",
                tipoDespesaId: 244,
                descricao: "MICRO PLACA Y 12MM"
            },
            {
                codigo: "136200306004",
                tipoDespesaId: 244,
                descricao: "PAR.FENDA CRUZ 2,0X04MM"
            },
            {
                codigo: "136230306005",
                tipoDespesaId: 244,
                descricao: "PAR.FENDA CRUZ 2,3X05"
            },
            {
                codigo: "167152004090",
                tipoDespesaId: 244,
                descricao: "MICRO PLACA T 4F 9,0MM"
            },
            {
                codigo: "136170306004",
                tipoDespesaId: 244,
                descricao: "PAR.FENDA CRUZ 1,7X04MM"
            },
            {
                codigo: "136230306006",
                tipoDespesaId: 244,
                descricao: "PAR.FENDA CRUZ 2,3X06"
            },
            {
                codigo: "167150106000",
                tipoDespesaId: 244,
                descricao: "MICRO PLACA ORBITAL 6F"
            },
            {
                codigo: "167201104125",
                tipoDespesaId: 244,
                descricao: "MINI PLACA L DIR 12,5MM"
            },
            {
                codigo: "167201204065",
                tipoDespesaId: 244,
                descricao: "MINI PLACA L ESQ 6,5MM"
            },
            {
                codigo: "BA0210FAA",
                tipoDespesaId: 244,
                descricao: "BROCA PERFURACAO CRANIO EASYDRILL 14X11X1,5 (VERDE)"
            },
            {
                codigo: "DE03",
                tipoDespesaId: 244,
                descricao: "MATRIZ DURADRY ESPONJA 7,5X7,5X0,4CM"
            },
        ]
    },
    {
        cnpj: "19330683000173",
        razao: "CMETK SOLUCOES HOSPITALARES LTDA",
        itens: [
            {
                codigo: "1743",
                tipoDespesaId: 58,
                descricao: "1/4 ALICATE PARA OSSOS, LEKSELL, 23CM/9, 6MM v"
            },
            {
                codigo: "0001",
                tipoDespesaId: 58,
                descricao: "ABAIXA LINGUA BRUENINGS 19CM"
            },
            {
                codigo: "BSZ-20",
                tipoDespesaId: 58,
                descricao: "ABAIXA LINGUA WIEDER 14CM"
            },
            {
                codigo: "2586",
                tipoDespesaId: 58,
                descricao: "ADSON COM DENTE - 12,5CM"
            },
            {
                codigo: "2587",
                tipoDespesaId: 58,
                descricao: "ADSON SEM DENTE - 12,5CM"
            },
            {
                codigo: "BSZ-129",
                tipoDespesaId: 102,
                descricao: "AFASTADOR ADSON BABY ARTICULADO 3X4 ROMBO 14CM"
            },
            {
                codigo: "BSZ-158",
                tipoDespesaId: 102,
                descricao: "AFASTADOR ADSON BABY ARTICULADO 3X4 ROMBO 16CM"
            },
            {
                codigo: "BSZ-250",
                tipoDespesaId: 102,
                descricao: "AFASTADOR ALM 8CM"
            },
            {
                codigo: "QD.188.02",
                tipoDespesaId: 102,
                descricao: "AFASTADOR BAUER DIREITO"
            },
            {
                codigo: "QD.188.03",
                tipoDespesaId: 102,
                descricao: "AFASTADOR BAUER ESQUERDO"
            },
            {
                codigo: "AI00369",
                tipoDespesaId: 102,
                descricao: "Afastador Bennet 24Cm - 80476380011"
            },
            {
                codigo: "BSZ-2344",
                tipoDespesaId: 102,
                descricao: "AFASTADOR CABECA DE COBRA 12MMX35MM 30CM"
            },
            {
                codigo: "BSZ-2332",
                tipoDespesaId: 102,
                descricao: "AFASTADOR CABECA DE COBRA 20MMX45MM 24CM"
            },
            {
                codigo: "FX.10.833",
                tipoDespesaId: 102,
                descricao: "AFASTADOR CUSHING, VALVULA COM LAMINA CURVA DE 16MM DE LARGURA, 24CM - ANVISA 81897719002"
            },
            {
                codigo: "BSZ-14603",
                tipoDespesaId: 102,
                descricao: "AFASTADOR DELTOIDE 40MM 23CM"
            },
            {
                codigo: "0518",
                tipoDespesaId: 102,
                descricao: "AFASTADOR DESMARRES 14MM N 2"
            },
            {
                codigo: "AI0028",
                tipoDespesaId: 102,
                descricao: "Afastador Farabeuf 1,3cmx12,5cm - 80476380011"
            },
            {
                codigo: "0008",
                tipoDespesaId: 102,
                descricao: "AFASTADOR FARABEUF ADULTO 13X125mm"
            },
            {
                codigo: "0006",
                tipoDespesaId: 102,
                descricao: "AFASTADOR FARABEUF BABY 7X100 MM (40P3)"
            },
            {
                codigo: "268",
                tipoDespesaId: 102,
                descricao: "Afastador Farabeuf Extra (15 X 150 mm) Para Uso Geral"
            },
            {
                codigo: "0498",
                tipoDespesaId: 102,
                descricao: "AFASTADOR FARABEUF EXTRA 15X150 MM (46P3) - ANVISA 10304850059"
            },
            {
                codigo: "0499",
                tipoDespesaId: 102,
                descricao: "AFASTADOR FARABEUF EXTRA GRANDE 20X180 MM (46P3)"
            },
            {
                codigo: "0007",
                tipoDespesaId: 102,
                descricao: "AFASTADOR FARABEUF INFANTIL 10X120 MM (45P3)"
            },
            {
                codigo: "0010",
                tipoDespesaId: 102,
                descricao: "AFASTADOR FINOCHIETTO 40X65 COM 18CM"
            },
            {
                codigo: "AI2491",
                tipoDespesaId: 102,
                descricao: "Afastador Finochietto Adulto 230x170mm"
            },
            {
                codigo: "BSZ-846",
                tipoDespesaId: 102,
                descricao: "AFASTADOR FUKUDA 36MM MEDIO"
            },
            {
                codigo: "BSZ-198",
                tipoDespesaId: 102,
                descricao: "AFASTADOR GELPI 16CM"
            },
            {
                codigo: "BSZ-14711",
                tipoDespesaId: 102,
                descricao: "AFASTADOR GELPI ARTICULADO 33CM"
            },
            {
                codigo: "676.2",
                tipoDespesaId: 102,
                descricao: "AFASTADOR GLENOIDE GRANDE 34 MM X 25 CM"
            },
            {
                codigo: "1467",
                tipoDespesaId: 102,
                descricao: "Afastador Gosset Abdominal Com Duplo Barramento Tamanho:16 cm"
            },
            {
                codigo: "0013",
                tipoDespesaId: 102,
                descricao: "AFASTADOR GOSSET COM DUPLO BARRAMENTO 24 CM (101S3)"
            },
            {
                codigo: "0014",
                tipoDespesaId: 102,
                descricao: "AFASTADOR GOSSET COM DUPLO BARRAMENTO 30 CM (18W3)"
            },
            {
                codigo: "QD.639.00",
                tipoDespesaId: 102,
                descricao: "AFASTADOR HARGIS"
            },
            {
                codigo: "B-VIEW-12171",
                tipoDespesaId: 102,
                descricao: "AFASTADOR HOHMAN 22CM (8X8MM)"
            },
            {
                codigo: "B-VIEW-12195",
                tipoDespesaId: 102,
                descricao: "AFASTADOR HOHMAN 24CM (8X43MM)"
            },
            {
                codigo: "B-VIEW-12192",
                tipoDespesaId: 102,
                descricao: "AFASTADOR HOHMAN 25CM (8X22MM)"
            },
            {
                codigo: "BSZ-14003",
                tipoDespesaId: 102,
                descricao: "AFASTADOR HOHMANN EXTRA LONGO 20MM X 43CM"
            },
            {
                codigo: "06885",
                tipoDespesaId: 102,
                descricao: "AFASTADOR HOHMANN MAO N.0 - RH15364"
            },
            {
                codigo: "0934",
                tipoDespesaId: 102,
                descricao: "AFASTADOR HOHMANN PONTA FINA 43 MM (50P4)"
            },
            {
                codigo: "0935",
                tipoDespesaId: 102,
                descricao: "AFASTADOR HOHMANN PONTA FINA 70 MM (09W4)"
            },
            {
                codigo: "BSZOD-3859",
                tipoDespesaId: 102,
                descricao: "AFASTADOR JANSEN ROMBO"
            },
            {
                codigo: "B-VIEW-13986",
                tipoDespesaId: 102,
                descricao: "AFASTADOR LANGENBECK 22 CM (30X14MM)"
            },
            {
                codigo: "0594",
                tipoDespesaId: 102,
                descricao: "AFASTADOR LANGENBECK 35X10 MM (16W3)"
            },
            {
                codigo: "0595",
                tipoDespesaId: 102,
                descricao: "AFASTADOR LANGENBECK 35X15 MM (09W4)"
            },
            {
                codigo: "0593",
                tipoDespesaId: 102,
                descricao: "AFASTADOR LANGENBECK 35X7 MM (12W3)"
            },
            {
                codigo: "2456",
                tipoDespesaId: 102,
                descricao: "Afastador Langenbeck Para Uso Geral 21 cm 35 x 10 mm"
            },
            {
                codigo: "QD.188.01",
                tipoDespesaId: 102,
                descricao: "AFASTADOR LAVASSIER"
            },
            {
                codigo: "BSZ-30",
                tipoDespesaId: 102,
                descricao: "AFASTADOR MINESSOTA CAWOOD SEM DOBRA 14,5CM"
            },
            {
                codigo: "BSZOD-3509",
                tipoDespesaId: 102,
                descricao: "AFASTADOR MINESSOTA COM DOBRA 15CM"
            },
            {
                codigo: "BSZ-20341",
                tipoDespesaId: 102,
                descricao: "AFASTADOR MINESSOTA COM SUGADOR"
            },
            {
                codigo: "QD.252.62",
                tipoDespesaId: 102,
                descricao: "AFASTADOR OBWEGESER PARA BAIXO 62MM"
            },
            {
                codigo: "QD.253.62",
                tipoDespesaId: 102,
                descricao: "AFASTADOR OBWEGESER PARA CIMA 62MM"
            },
            {
                codigo: "QD.250.17",
                tipoDespesaId: 102,
                descricao: "AFASTADOR OBWEGESER PARA MENTO"
            },
            {
                codigo: "QD.250.18",
                tipoDespesaId: 102,
                descricao: "AFASTADOR OBWEGESER PARA PROGENISMO"
            },
            {
                codigo: "QD.251.65",
                tipoDespesaId: 102,
                descricao: "AFASTADOR OBWEGESER PARA RAMO 65MM"
            },
            {
                codigo: "BSZ-795",
                tipoDespesaId: 102,
                descricao: "AFASTADOR RICHARDSON 20X100MM 23CM"
            },
            {
                codigo: "BSZ-796",
                tipoDespesaId: 102,
                descricao: "AFASTADOR RICHARDSON 20X80MM 23CM"
            },
            {
                codigo: "BSZ-447",
                tipoDespesaId: 102,
                descricao: "AFASTADOR SENN-MILLER AGUDO 6X20MM 18CM"
            },
            {
                codigo: "BSZ-445",
                tipoDespesaId: 102,
                descricao: "AFASTADOR SENN-MILLER ROMBO 6X20MM 16CM"
            },
            {
                codigo: "BSZ-446",
                tipoDespesaId: 102,
                descricao: "AFASTADOR SENN-MILLER ROMBO 6X20MM 18CM"
            },
            {
                codigo: "BSZ-211522",
                tipoDespesaId: 102,
                descricao: "AFASTADOR SIRAGE BOOKWALTER"
            },
            {
                codigo: "BSZ-495",
                tipoDespesaId: 102,
                descricao: "AFASTADOR VOLKMAN AGUDO 22 CM 3 DENTES"
            },
            {
                codigo: "BSZ-100",
                tipoDespesaId: 102,
                descricao: "AFASTADOR WEITLAINER AGUDO 3X4 14CM"
            },
            {
                codigo: "BSZ-102",
                tipoDespesaId: 102,
                descricao: "AFASTADOR WEITLANER AGUDO 3x4 16,5CM"
            },
            {
                codigo: "BSZ-109",
                tipoDespesaId: 102,
                descricao: "AFASTADOR WEITLANER AGUDO 3X4 DENTES 13CM"
            },
            {
                codigo: "BSZ-110",
                tipoDespesaId: 102,
                descricao: "AFASTADOR WEITLANER ROMBO 3x4 13CM"
            },
            {
                codigo: "BSZ-103",
                tipoDespesaId: 102,
                descricao: "AFASTADOR WEITLANER ROMBO 3X4 16,5CM"
            },
            {
                codigo: "BSZ-126",
                tipoDespesaId: 102,
                descricao: "AFASTADOR WEITLANER ROMBO 3X4 20CM"
            },
            {
                codigo: "0566",
                tipoDespesaId: 102,
                descricao: "AGULHA OBWESESER 23CM"
            },
            {
                codigo: "0629",
                tipoDespesaId: 102,
                descricao: "ALAVANCA APICAL 304 RETA PARA RAIZES"
            },
            {
                codigo: "BSZOD-1214",
                tipoDespesaId: 102,
                descricao: "ALAVANCA SELDIN DIREITA"
            },
            {
                codigo: "BSZOD-1213",
                tipoDespesaId: 102,
                descricao: "ALAVANCA SELDIN ESQUERDA"
            },
            {
                codigo: "0632",
                tipoDespesaId: 102,
                descricao: "ALAVANCA SELDIN RETA PARA RAIZES N 2 - ABC"
            },
            {
                codigo: "13-721-16",
                tipoDespesaId: 102,
                descricao: "Alavanca Taylor Bone 16,5cm 75,0x30,0mm Anvisa REGISTRO: 81897710018 L"
            },
            {
                codigo: "BSZVI-1001",
                tipoDespesaId: 102,
                descricao: "ALICATE CORTE DE PINO ATE 4MM CABO DOURADO 30CM (RICARDINHO)"
            },
            {
                codigo: "BSZVI-1002",
                tipoDespesaId: 102,
                descricao: "ALICATE CORTE DE PINO ATE 5MM 47CM (RICARDAO)"
            },
            {
                codigo: "BSZVI-1004",
                tipoDespesaId: 102,
                descricao: "ALICATE CORTE LATERAL 23CM COM WIDEA CORTA FIO ATE 2,5MM"
            },
            {
                codigo: "BSZ-1082",
                tipoDespesaId: 102,
                descricao: "ALICATE CORTE LATERAL REIL 18CM COM WIDEA"
            },
            {
                codigo: "BSZ-7756",
                tipoDespesaId: 102,
                descricao: "ALICATE DE PRESSAO 20CM"
            },
            {
                codigo: "BSZVI-1005",
                tipoDespesaId: 102,
                descricao: "ALICATE FRONTAL 23CM COM WIDEA CORTA FIO ATE 2,5MM",
            },
            {
                codigo: "1742",
                tipoDespesaId: 102,
                descricao: "ALICATE PARA OSSOS, ECHIN, 23CM/9 4MM"
            },
            {
                codigo: "BSZ-7770",
                tipoDespesaId: 102,
                descricao: "ALICATE UNIVERSAL CORTA FIO 1,5MM 22CM"
            },
            {
                codigo: "1807",
                tipoDespesaId: 102,
                descricao: "ASPIRADOR CHUVEIRINHO - 25CM"
            },
            {
                codigo: "BSZ-1315",
                tipoDespesaId: 102,
                descricao: "ASPIRADOR FRAZIER 19CM 6FR - ANVISA 81179740006"
            },
            {
                codigo: "BSZ-15023",
                tipoDespesaId: 102,
                descricao: "ASPIRADOR FRAZIER SEM ESFERA 2.7MM 18CM - ANVISA 81179740015"
            },
            {
                codigo: "BSZ-15024",
                tipoDespesaId: 102,
                descricao: "ASPIRADOR FRAZIER SEM ESFERA 2MM 18CM"
            },
            {
                codigo: "BSZ-1111",
                tipoDespesaId: 102,
                descricao: "ASPIRADOR YANKAUER 27CM - ANVISA 81179740006"
            },
            {
                codigo: "BSZ-1113",
                tipoDespesaId: 102,
                descricao: "ASPIRADOR YANKAUER 29CM"
            },
            {
                codigo: "BSZ-EST-1083",
                tipoDespesaId: 102,
                descricao: "BANDEJA 25X20X5CM"
            },
            {
                codigo: "231.054",
                tipoDespesaId: 102,
                descricao: "BANDEJA LISA ECONOX 30X20X4 CM"
            },
            {
                codigo: "231.077",
                tipoDespesaId: 102,
                descricao: "BANDEJA LISA ECONOX 42X30X4,5 CM"
            },
            {
                codigo: "0468",
                tipoDespesaId: 102,
                descricao: "BOTICAO FORCEPS ADULTO 150"
            },
            {
                codigo: "0469",
                tipoDespesaId: 102,
                descricao: "BOTICAO FORCEPS ADULTO 151"
            },
            {
                codigo: "0462",
                tipoDespesaId: 102,
                descricao: "BOTICAO FORCEPS ADULTO 17"
            },
            {
                codigo: "0464",
                tipoDespesaId: 102,
                descricao: "BOTICAO FORCEPS ADULTO 18R"
            },
            {
                codigo: "0466",
                tipoDespesaId: 102,
                descricao: "BOTICAO FORCEPS ADULTO 69"
            },
            {
                codigo: "0463",
                tipoDespesaId: 102,
                descricao: "BOTICAO FORVEPS ADULTO 18L"
            },
            {
                codigo: "BSZ-15159",
                tipoDespesaId: 102,
                descricao: "CABO BIPOLAR - ANVISA 81179740015"
            },
            {
                codigo: "BSZ-1157",
                tipoDespesaId: 102,
                descricao: "CABO DE BISTURI NAo3"
            },
            {
                codigo: "BSZ-1161",
                tipoDespesaId: 102,
                descricao: "CABO DE BISTURI NAo4"
            },
            {
                codigo: "0640",
                tipoDespesaId: 102,
                descricao: "CABO PARA SERRA DE GIGLI (16W4)"
            },
            {
                codigo: "212.069",
                tipoDespesaId: 102,
                descricao: "caixa 400x200x50 - ANVISA ISENTO ANVISA"
            },
            {
                codigo: "212.082",
                tipoDespesaId: 102,
                descricao: "CAIXA 400x200x75 - ANVISA ISENTO ANVISA"
            },
            {
                codigo: "CXBG1",
                tipoDespesaId: 102,
                descricao: "Caixa Basica Geral"
            },
            {
                codigo: "PRD00005",
                tipoDespesaId: 102,
                descricao: "CAIXA DE RETIRADA"
            },
            {
                codigo: "BSZ-EST-1027",
                tipoDespesaId: 102,
                descricao: "CAIXA EM ACO INOX 30X20X5CM COM TRAVA"
            },
            {
                codigo: "BSZ-EST-1054",
                tipoDespesaId: 102,
                descricao: "CAIXA EM ACO INOX PERFURADA 25X13X5CM"
            },
            {
                codigo: "CXLAP1",
                tipoDespesaId: 102,
                descricao: "Caixa Laparotomia"
            },
            {
                codigo: "CXPC1",
                tipoDespesaId: 102,
                descricao: "Caixa Pequena Cirurgia"
            },
            {
                codigo: "CTORAX1",
                tipoDespesaId: 102,
                descricao: "Caixa Toraxica"
            },
            {
                codigo: "CXVASC1",
                tipoDespesaId: 102,
                descricao: "Caixa Vascular"
            },
            {
                codigo: "CXVIABIL",
                tipoDespesaId: 102,
                descricao: "Caixa Via Biliar"
            },
            {
                codigo: "PRD00001",
                tipoDespesaId: 102,
                descricao: "CAIXAS ORTOPEDICA DE OMBRO"
            },
            {
                codigo: "PRD00003",
                tipoDespesaId: 102,
                descricao: "CAIXAS ORTOPEDICAS DE JOELHO"
            },
            {
                codigo: "PRD00002",
                tipoDespesaId: 102,
                descricao: "CAIXAS ORTOPEDICAS DE MAO"
            },
            {
                codigo: "PRD00004",
                tipoDespesaId: 102,
                descricao: "CAIXAS ORTOPEDICAS DE PE"
            },
            {
                codigo: "BSZ-14061",
                tipoDespesaId: 102,
                descricao: "CHAVE SEXTAVADA 1,5CM"
            },
            {
                codigo: "BSZ-14062",
                tipoDespesaId: 102,
                descricao: "CHAVE SEXTAVADA 2,5CM"
            },
            {
                codigo: "BSZ-3636",
                tipoDespesaId: 102,
                descricao: "CHAVE SEXTAVADA 3,5CM"
            },
            {
                codigo: "BSZ-14064",
                tipoDespesaId: 102,
                descricao: "CHAVE SEXTAVADA 4,5CM"
            },
            {
                codigo: "AI00189",
                tipoDespesaId: 102,
                descricao: "Chave Sextavada P/ Grandes Fragmentos 4,5mm"
            },
            {
                codigo: "AI02517",
                tipoDespesaId: 102,
                descricao: "Chave Sextavada P/ Grandes Fragmentos 5,5mm"
            },
            {
                codigo: "AI01049",
                tipoDespesaId: 102,
                descricao: "Chave Sextavada P/ Pequenos Fragmentos 2,5Mm"
            },
            {
                codigo: "AI00190",
                tipoDespesaId: 102,
                descricao: "Chave Sextavada P/ Pequenos Fragmentos 3,5mm"
            },
            {
                codigo: "AI00188",
                tipoDespesaId: 102,
                descricao: "Chave T p/ insercao e remocao de fios c/150mm"
            },
            {
                codigo: "QD.197.00",
                tipoDespesaId: 102,
                descricao: "CINZEL PARA DISJUNCAO PALATINA (SVERZUT)"
            },
            {
                codigo: "QX.308.06",
                tipoDespesaId: 102,
                descricao: "CINZEL PONTA EM V - 06MM"
            },
            {
                codigo: "BSZ-3782",
                tipoDespesaId: 102,
                descricao: "CINZEL SVERTZULT 16CM"
            },
            {
                codigo: "BSZ-1351",
                tipoDespesaId: 102,
                descricao: "CIZALHA LISTON CURVA ARTICULADA 23CM"
            },
            {
                codigo: "06-652-18",
                tipoDespesaId: 102,
                descricao: "Clamp Glover Atrauma Bulldog Curva 5,5cm Anvisa REGISTRO: 8189771"
            },
            {
                codigo: "0863",
                tipoDespesaId: 102,
                descricao: "CLIPS MAYO 14CM"
            },
            {
                codigo: "BSZ-2536",
                tipoDespesaId: 102,
                descricao: "COMPASSO CASTROVIEJO RETO 9CM"
            },
            {
                codigo: "AI00316",
                tipoDespesaId: 102,
                descricao: "Conjunto de Estiletes de Fistula Rigido ( 5 Pecas ) - 80476380018"
            },
            {
                codigo: "0663",
                tipoDespesaId: 102,
                descricao: "COSTOTOMO SAUERBRUCH 26CM"
            },
            {
                codigo: "823",
                tipoDespesaId: 58,
                descricao: "Crile Rankin Pinca Hemostatica, curva, em formato de S, 16cm"
            },
            {
                codigo: "231.012",
                tipoDespesaId: 102,
                descricao: "CUBA ASSEPSIA ECONOX 8X4 CM, 150 ML"
            },
            {
                codigo: "231.014",
                tipoDespesaId: 102,
                descricao: "CUBA ASSEPSIA ECONOX 9X5 CM, 200 ML"
            },
            {
                codigo: "BSZ-EST-1139",
                tipoDespesaId: 102,
                descricao: "CUBA REDONDA 10X5CM 300ML"
            },
            {
                codigo: "BSZ-1467",
                tipoDespesaId: 102,
                descricao: "CURETA BRUNS CABO INOX No00 3,2MM 22CM"
            },
            {
                codigo: "BSZ-1438",
                tipoDespesaId: 102,
                descricao: "CURETA BRUNS NAo 0000 2MM 17CM"
            },
            {
                codigo: "BSZ-1441",
                tipoDespesaId: 102,
                descricao: "CURETA BRUNS NAo0 5MM 17CM"
            },
            {
                codigo: "BSZ-1440",
                tipoDespesaId: 102,
                descricao: "CURETA BRUNS NAo00 4MM 17CM"
            },
            {
                codigo: "BSZ-1439",
                tipoDespesaId: 102,
                descricao: "CURETA BRUNS NAo000 3MM 17CM"
            },
            {
                codigo: "BSZ-1442",
                tipoDespesaId: 102,
                descricao: "CURETA BRUNS NAo1 6MM 17CM"
            },
            {
                codigo: "BSZ-1443",
                tipoDespesaId: 102,
                descricao: "CURETA BRUNS NAo2 7MM 17CM"
            },
            {
                codigo: "BSZ-1446",
                tipoDespesaId: 102,
                descricao: "CURETA BRUNS NAo5 10MM 17CM"
            },
            {
                codigo: "BSZ-1447",
                tipoDespesaId: 102,
                descricao: "CURETA BRUNS NAo6 12MM 17CM"
            },
            {
                codigo: "BSZOD-1638",
                tipoDespesaId: 102,
                descricao: "CURETA DE LUCAS #85"
            },
            {
                codigo: "0771",
                tipoDespesaId: 102,
                descricao: "CURETA DE LUCAS N. 85 (32P4)"
            },
            {
                codigo: "BSZOD-3617",
                tipoDespesaId: 102,
                descricao: "CURETA DESCOLADOR MOLT2/4 CENTRAL CABO GROSSO"
            },
            {
                codigo: "QD.013.05",
                tipoDespesaId: 102,
                descricao: "CURETA PARA SEIO MAXILAR N. 5"
            },
            {
                codigo: "BSZ-2113",
                tipoDespesaId: 102,
                descricao: "CURETA SCHROEDER NAo2 30CM"
            },
            {
                codigo: "BSZ-2116",
                tipoDespesaId: 102,
                descricao: "CURETA SCHROEDER NAo5 30CM"
            },
            {
                codigo: "BSZ-1547",
                tipoDespesaId: 102,
                descricao: "CURETA SIMON NAo0 5MM 30CM ANGULADA"
            },
            {
                codigo: "BSZ-1546",
                tipoDespesaId: 102,
                descricao: "CURETA SIMON NAo00 4MM 30CM ANGULADA"
            },
            {
                codigo: "BSZ-1545",
                tipoDespesaId: 102,
                descricao: "CURETA SIMON NAo000 3MM 30CM ANGULADA"
            },
            {
                codigo: "BSZ-1548",
                tipoDespesaId: 102,
                descricao: "CURETA SIMON NAo1 6MM 30CM ANGULADA"
            },
            {
                codigo: "BSZ-1549",
                tipoDespesaId: 102,
                descricao: "CURETA SIMON NAo2 7MM 30CM ANGULADA"
            },
            {
                codigo: "BSZ-1550",
                tipoDespesaId: 102,
                descricao: "CURETA SIMON NAo3 9MM 30CM ANGULADA"
            },
            {
                codigo: "BSZ-1552",
                tipoDespesaId: 102,
                descricao: "CURETA SIMON NAo5 12MM 30CM ANGULADA"
            },
            {
                codigo: "BSZ-1553",
                tipoDespesaId: 102,
                descricao: "CURETA SIMON NAo6 13MM 30CM ANGULADA"
            },
            {
                codigo: "BSZ-1537",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN 21CM #0 4MM"
            },
            {
                codigo: "BSZ-1536",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN 21CM #00 3MM"
            },
            {
                codigo: "BSZ-1605",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN CABO INOX No0 4MM 25CM"
            },
            {
                codigo: "BSZ-1604",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN CABO INOX No00 3MM 25CM"
            },
            {
                codigo: "BSZ-1606",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN CABO INOX No1 5MM 25CM"
            },
            {
                codigo: "BSZ-1607",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN CABO INOX No2 6MM 25CM"
            },
            {
                codigo: "BSZ-1608",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN CABO INOX No3 7MM 25CM"
            },
            {
                codigo: "BSZ-1609",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN CABO INOX No4 8MM 25CM"
            },
            {
                codigo: "BSZ-1610",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN CABO INOX No5 9MM 25CM"
            },
            {
                codigo: "BSZ-1611",
                tipoDespesaId: 102,
                descricao: "CURETA VOLKMAN CABO INOX No6 10MM 25CM"
            },
            {
                codigo: "2548",
                tipoDespesaId: 102,
                descricao: "DEBAKEY VASCULAR PERIFERICA ANGULADA"
            },
            {
                codigo: "BSZ-14826",
                tipoDespesaId: 102,
                descricao: "DESCOLADOR COBB 15MM X 30CM"
            },
            {
                codigo: "BSZOD-3639",
                tipoDespesaId: 102,
                descricao: "DESCOLADOR MOLT 9 18CM"
            },
            {
                codigo: "QD.190.20",
                tipoDespesaId: 102,
                descricao: "DESCOLADOR PARA RAMO (SVERZUT)"
            },
            {
                codigo: "BSZ-3665",
                tipoDespesaId: 102,
                descricao: "DESCOLADOR PENFIELD,N1"
            },
            {
                codigo: "BSZ-2219",
                tipoDespesaId: 102,
                descricao: "DILATADOR BAKES 1MM 30CM"
            },
            {
                codigo: "BSZ-2220",
                tipoDespesaId: 102,
                descricao: "DILATADOR BAKES 2MM 30CM"
            },
            {
                codigo: "CFOP6108 (4)",
                tipoDespesaId: 102,
                descricao: "Dilatador Bakes 31,5 2mm"
            },
            {
                codigo: "CFOP6108 (5)",
                tipoDespesaId: 102,
                descricao: "Dilatador Bakes 31,5 3mm"
            },
            {
                codigo: "CFOP6108 (6)",
                tipoDespesaId: 102,
                descricao: "Dilatador Bakes 31,5 4mm"
            },
            {
                codigo: "CFOP6108 (7)",
                tipoDespesaId: 102,
                descricao: "Dilatador Bakes 31,5 5mm"
            },
            {
                codigo: "CFOP6108 (8)",
                tipoDespesaId: 102,
                descricao: "Dilatador Bakes 31,5 6mm"
            },
            {
                codigo: "CFOP6108 (9)",
                tipoDespesaId: 102,
                descricao: "Dilatador Bakes 31,5 7mm"
            },
            {
                codigo: "CFOP6108 (10)",
                tipoDespesaId: 102,
                descricao: "Dilatador Bakes 31,5 8mm"
            },
            {
                codigo: "CFOP6108 (2)",
                tipoDespesaId: 102,
                descricao: "Dilatador Bakes 31,5 9mm"
            },
            {
                codigo: "BSZ-2222",
                tipoDespesaId: 102,
                descricao: "DILATADOR BAKES 4MM 30CM"
            },
            {
                codigo: "BSZ-2225",
                tipoDespesaId: 102,
                descricao: "DILATADOR BAKES 7MM 30CM"
            },
            {
                codigo: "BSZ-2226",
                tipoDespesaId: 102,
                descricao: "DILATADOR BAKES 8MM 30CM"
            },
            {
                codigo: "BSZ-2227",
                tipoDespesaId: 102,
                descricao: "DILATADOR BAKES 9MM 30CM"
            },
            {
                codigo: "AI00441",
                tipoDespesaId: 102,
                descricao: "Dilatador Bakes n5"
            },
            {
                codigo: "30.24.134.00",
                tipoDespesaId: 102,
                descricao: "DILATADOR CORONARIO BAKES 3mm"
            },
            {
                codigo: "30.24.137.00",
                tipoDespesaId: 102,
                descricao: "DILATADOR CORONARIO BAKES 6mm"
            },
            {
                codigo: "15-252-24",
                tipoDespesaId: 102,
                descricao: "Dissector Olivecrona Dura 24,0cm Anvisa REGISTRO: 81897710023 LOTE:"
            },
            {
                codigo: "15-287-02",
                tipoDespesaId: 102,
                descricao: "DissectorHoen Dura 15,0cm Fig 1 Anvisa REGISTRO: 81897710023 LOTE: 2"
            },
            {
                codigo: "PRD00006",
                tipoDespesaId: 102,
                descricao: "EQUIPAMENTOS ORTOPEDICOS AVULSOS"
            },
            {
                codigo: "2593",
                tipoDespesaId: 102,
                descricao: "ESPATULA - 21CM"
            },
            {
                codigo: "2568",
                tipoDespesaId: 102,
                descricao: "ESPATULA 20CM"
            },
            {
                codigo: "2567",
                tipoDespesaId: 102,
                descricao: "ESPATULA 30CM"
            },
            {
                codigo: "BSZ-14301",
                tipoDespesaId: 102,
                descricao: "ESPATULA MALEAVEL 20MM X 16CM"
            },
            {
                codigo: "BSZ-14285",
                tipoDespesaId: 102,
                descricao: "ESPATULA MALEAVEL 20MM X 18CM"
            },
            {
                codigo: "0371",
                tipoDespesaId: 102,
                descricao: "ESPECULO MATHIEU RETAL TRIVALVE (100S4)"
            },
            {
                codigo: "0994",
                tipoDespesaId: 102,
                descricao: "ESPECULO PITANGA SANTOS RETAL (21W4)"
            },
            {
                codigo: "212.044",
                tipoDespesaId: 102,
                descricao: "ESTOJO PERFURADO ECONOX 26X12X6 CM"
            },
            {
                codigo: "212.056",
                tipoDespesaId: 102,
                descricao: "ESTOJO PERFURADO ECONOX 32X16X8 CM"
            },
            {
                codigo: "212.086",
                tipoDespesaId: 102,
                descricao: "ESTOJO PERFURADO ECONOX 46X28X12CM (DIN) - ANVISA ISENTO ANVISA"
            },
            {
                codigo: "AI00199",
                tipoDespesaId: 102,
                descricao: "FRESA DE HUDSON 14MM OVAL"
            },
            {
                codigo: "AI00891",
                tipoDespesaId: 102,
                descricao: "FRESA DE HUDSON 22MM OVAL"
            },
            {
                codigo: "AI00200",
                tipoDespesaId: 102,
                descricao: "FRESA DE HUDSON 9MM OVAL"
            },
            {
                codigo: "AI00197",
                tipoDespesaId: 102,
                descricao: "FRESA LISA DE CUSHING 13MM 22MM OVAL"
            },
            {
                codigo: "QD.248.15",
                tipoDespesaId: 102,
                descricao: "GANCHO BARROS"
            },
            {
                codigo: "BSZ-2250",
                tipoDespesaId: 102,
                descricao: "GANCHO GILLES NAo3 19CM"
            },
            {
                codigo: "BSZ-2305",
                tipoDespesaId: 102,
                descricao: "GANCHO LAMBOTTE PARA OSSO 20MM"
            },
            {
                codigo: "BSZ-2317",
                tipoDespesaId: 102,
                descricao: "GANCHO LAMBOTTE PARA OSSO 25MM"
            },
            {
                codigo: "2595",
                tipoDespesaId: 102,
                descricao: "KELLY CURVA - 14CM"
            },
            {
                codigo: "1766",
                tipoDespesaId: 102,
                descricao: "KELLY CURVA 18CM"
            },
            {
                codigo: "1767",
                tipoDespesaId: 102,
                descricao: "KELLY RETA 14CM"
            },
            {
                codigo: "BSZ-3911",
                tipoDespesaId: 102,
                descricao: "MARTELO 400GR"
            },
            {
                codigo: "BSZ-3918",
                tipoDespesaId: 102,
                descricao: "MARTELO 500G"
            },
            {
                codigo: "BSZ-3919",
                tipoDespesaId: 102,
                descricao: "MARTELO com teflon 150g"
            },
            {
                codigo: "BSZ-3942",
                tipoDespesaId: 102,
                descricao: "MARTELO NEUFIELD 250GR"
            },
            {
                codigo: "BSZ-4264",
                tipoDespesaId: 102,
                descricao: "OSTEOTOMO CINZEL WAGNER RETO 4MM"
            },
            {
                codigo: "BSZ-14499",
                tipoDespesaId: 102,
                descricao: "OSTEOTOMO LAMBOTTE 16MM RETA 18CM"
            },
            {
                codigo: "BSZ-14500",
                tipoDespesaId: 102,
                descricao: "OSTEOTOMO LAMBOTTE 18MM RETA 18CM"
            },
            {
                codigo: "BSZ-14501",
                tipoDespesaId: 102,
                descricao: "OSTEOTOMO LAMBOTTE 20MM RETA 18CM"
            },
            {
                codigo: "BSZ-14494",
                tipoDespesaId: 102,
                descricao: "OSTEOTOMO LAMBOTTE 6MM RETA 18CM"
            },
            {
                codigo: "BSZ-14495",
                tipoDespesaId: 102,
                descricao: "OSTEOTOMO LAMBOTTE 8MM RETA 18CM - ANVISA 81179740014"
            },
            {
                codigo: "QO.376.02",
                tipoDespesaId: 102,
                descricao: "OSTEOTOMO LAMBOTTE MINI 12,5CM RETO - 02MM"
            },
            {
                codigo: "BSZ-4313",
                tipoDespesaId: 102,
                descricao: "OSTEOTOMO STILLE RETO 18MM 20CM"
            },
            {
                codigo: "BSZ-7032",
                tipoDespesaId: 102,
                descricao: "PASSADOR DE VALVULA ADULTO (PASSADOR DE CATETER C/ MANDRIL 60CM)"
            },
            {
                codigo: "BSZ-7033",
                tipoDespesaId: 102,
                descricao: "PASSADOR DE VALVULA INFANTIL (PASSADOR DE CATETER C/ MANDRIL 36CM)"
            },
            {
                codigo: "BSZOD-3628",
                tipoDespesaId: 102,
                descricao: "PERIOTOMO RETO FLEX"
            },
            {
                codigo: "0162",
                tipoDespesaId: 58,
                descricao: "PINCA ABADIE 27CM"
            },
            {
                codigo: "BSZ-5890",
                tipoDespesaId: 58,
                descricao: "PINCA ADSON BROW 15CM"
            },
            {
                codigo: "b-view-14667.",
                tipoDespesaId: 58,
                descricao: "PINCA ADSON C/ DENTE 12CM"
            },
            {
                codigo: "1179",
                tipoDespesaId: 58,
                descricao: "PINCA ADSON COM DENTE 1X2 18CM"
            },
            {
                codigo: "BSZ-5870",
                tipoDespesaId: 58,
                descricao: "PINCA ADSON DENTE 12CM"
            },
            {
                codigo: "BSZ-5864",
                tipoDespesaId: 58,
                descricao: "PINCA ADSON DENTE 15CM"
            },
            {
                codigo: "AI01468",
                tipoDespesaId: 58,
                descricao: "Pinca Adson Dente De Rato 18Cm - 80476380011"
            },
            {
                codigo: "BSZ-5873",
                tipoDespesaId: 58,
                descricao: "PINCA ADSON SERRILHA 15CM"
            },
            {
                codigo: "0166",
                tipoDespesaId: 58,
                descricao: "PINCA ALLIS 15 CM (19W4)"
            },
            {
                codigo: "BSZ-2558",
                tipoDespesaId: 58,
                descricao: "PINCA ALLIS 15CM"
            },
            {
                codigo: "25-08108-16",
                tipoDespesaId: 58,
                descricao: "PINCA ALLIS 16CM - MS 81725810014 (B-view-48-044)"
            },
            {
                codigo: "0167",
                tipoDespesaId: 58,
                descricao: "PINCA ALLIS 18 CM"
            },
            {
                codigo: "25-08108-16-8",
                tipoDespesaId: 58,
                descricao: "PINCA ALLIS 18CM - MS 81725810014 (B-view-48-045)"
            },
            {
                codigo: "0168",
                tipoDespesaId: 58,
                descricao: "PINCA ALLIS 20 CM (21W4)"
            },
            {
                codigo: "BSZ-2564",
                tipoDespesaId: 58,
                descricao: "PINCA ALLIS 20CM"
            },
            {
                codigo: "0169",
                tipoDespesaId: 58,
                descricao: "PINCA ALLIS 25 CM (19W4)"
            },
            {
                codigo: "1773",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA - 24CM"
            },
            {
                codigo: "BSZ-5623",
                tipoDespesaId: 58,
                descricao: "Pinca anatomica 16,0 cm - LOTE: B-236 - FAB: 11/12/23"
            },
            {
                codigo: "BSZ-5872",
                tipoDespesaId: 58,
                descricao: "Pinca Anatomica Adson, pontas retas, finas com 1x2 dentes, 12cm - ANVISA 81179740004"
            },
            {
                codigo: "b-view-14452",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA C/ DENTE 11,5CM"
            },
            {
                codigo: "b-view-14436",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DE DISSECCAO S/ DENTE 18CM"
            },
            {
                codigo: "BSZ-5641",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DENTE 20CM"
            },
            {
                codigo: "BSZ-5640",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DENTE 25CM"
            },
            {
                codigo: "BSZ-5634",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DENTE 3MM 14CM"
            },
            {
                codigo: "BSZ-5635",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DENTE 3MM 16CM"
            },
            {
                codigo: "BSZ-5639",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DENTE 3MM 18CM"
            },
            {
                codigo: "0176",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DENTE DE RATO 12CM"
            },
            {
                codigo: "0179",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DENTE DE RATO 18CM"
            },
            {
                codigo: "b-view-14469",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DISSECCAO 11,5CM"
            },
            {
                codigo: "0173",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA DISSECCAO 18 CM (21W4)"
            },
            {
                codigo: "BSZ-5620",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA SERRILHA 12CM"
            },
            {
                codigo: "BSZ-5622",
                tipoDespesaId: 58,
                descricao: "PINCA ANATOMICA SERRILHA 3MM 14CM"
            },
            {
                codigo: "BSZ-5625",
                tipoDespesaId: 58,
                descricao: "Pinca Anatomica Standard, pontas retas, largas e serrilhadas, 20cm - ANVISA 81179740004"
            },
            {
                codigo: "BSZ-5626",
                tipoDespesaId: 58,
                descricao: "Pinca anatomica, 25 cm - LOTE: B-237 - FAB: 11/12/23"
            },
            {
                codigo: "BSZ-5263",
                tipoDespesaId: 58,
                descricao: "Pinca Arterial Kocher (Ochsner) 1/2 Curva 16,0cm - LOTE: B-237 - FAB: 11/12/23"
            },
            {
                codigo: "BSZ-3891",
                tipoDespesaId: 58,
                descricao: "PINCA ASCH CURVA 22CM"
            },
            {
                codigo: "0971",
                tipoDespesaId: 58,
                descricao: "PINCA ATRAUMATICA SATINSKY 26CM"
            },
            {
                codigo: "29-09534-30",
                tipoDespesaId: 58,
                descricao: "Pinca Atraumatica, DeBakey, para Cirurgia Cardiovascular, 30cm/12, 1.5mm"
            },
            {
                codigo: "0182",
                tipoDespesaId: 58,
                descricao: "PINCA BABCOCK 16 CM (47P4)"
            },
            {
                codigo: "0183",
                tipoDespesaId: 58,
                descricao: "PINCA BABCOCK 20CM"
            },
            {
                codigo: "AI0899",
                tipoDespesaId: 58,
                descricao: "Pinca Babcock 20cm - 80476380011"
            },
            {
                codigo: "0185",
                tipoDespesaId: 58,
                descricao: "PINCA BACKHAUS 10 CM (46P4)"
            },
            {
                codigo: "V-5554",
                tipoDespesaId: 58,
                descricao: "PINCA BACKHAUS 11CM"
            },
            {
                codigo: "BSZ-5555",
                tipoDespesaId: 58,
                descricao: "PINCA BACKHAUS 13,5CM"
            },
            {
                codigo: "1180",
                tipoDespesaId: 58,
                descricao: "PINCA BACKHAUS 15 CM (22W4)"
            },
            {
                codigo: "BSZ-5553",
                tipoDespesaId: 58,
                descricao: "PINCA BACKHAUS 9CM"
            },
            {
                codigo: "1182",
                tipoDespesaId: 58,
                descricao: "PINCA BACKHAUS NAO PERFURANTE 13CM (02SN4)"
            },
            {
                codigo: "B-view-48-234",
                tipoDespesaId: 58,
                descricao: "PINCA BAKHAUS 16CM"
            },
            {
                codigo: "BSZ-6146",
                tipoDespesaId: 58,
                descricao: "PINCA BIPOLAR BAIONETA 18CM 2MM"
            },
            {
                codigo: "BSZ-6147",
                tipoDespesaId: 58,
                descricao: "PINCA BIPOLAR BAIONETA 20CM 2MM"
            },
            {
                codigo: "BSZ-14244",
                tipoDespesaId: 58,
                descricao: "PINCA BULLDOG DEBAKEY CURVA 5,5CM"
            },
            {
                codigo: "BSZ-14243",
                tipoDespesaId: 58,
                descricao: "PINCA BULLDOG DEBAKEY CURVA 5CM"
            },
            {
                codigo: "BSZ-14247",
                tipoDespesaId: 58,
                descricao: "PINCA BULLDOG DEBAKEY CURVA 7CM"
            },
            {
                codigo: "BSZ-14249",
                tipoDespesaId: 58,
                descricao: "PINCA BULLDOG DEBAKEY CURVA 8CM"
            },
            {
                codigo: "BSZ-14222",
                tipoDespesaId: 58,
                descricao: "PINCA BULLDOG DEBAKEY RETA 5,5CM"
            },
            {
                codigo: "BSZ-14221",
                tipoDespesaId: 58,
                descricao: "PINCA BULLDOG DEBAKEY RETA 5CM"
            },
            {
                codigo: "BSZ-14226",
                tipoDespesaId: 58,
                descricao: "PINCA BULLDOG DEBAKEY RETA 7.5CM"
            },
            {
                codigo: "BSZ-14225",
                tipoDespesaId: 58,
                descricao: "PINCA BULLDOG DEBAKEY RETA 7CM"
            },
            {
                codigo: "1703",
                tipoDespesaId: 58,
                descricao: "PINCA CHERON 25CM"
            },
            {
                codigo: "0199",
                tipoDespesaId: 58,
                descricao: "PINCA COLLIN CORACAO 16 CM"
            },
            {
                codigo: "AI0928",
                tipoDespesaId: 58,
                descricao: "Pinca Collin Coracao Reta 16cm - 80476380011"
            },
            {
                codigo: "BSZ-5161",
                tipoDespesaId: 58,
                descricao: "PINCA CRILLE CURVA 14CM"
            },
            {
                codigo: "BSZ-5162",
                tipoDespesaId: 58,
                descricao: "PINCA CRILLE CURVA 18CM"
            },
            {
                codigo: "BSZ-5164",
                tipoDespesaId: 58,
                descricao: "PINCA CRILLE RETA 16CM"
            },
            {
                codigo: "BSZ-5774",
                tipoDespesaId: 58,
                descricao: "PINCA CUSHING DENTE RETA 18CM"
            },
            {
                codigo: "0132",
                tipoDespesaId: 58,
                descricao: "PINCA DANDY PARA COURO CABELUDO,14CM"
            },
            {
                codigo: "B-VIEW-14436-06",
                tipoDespesaId: 58,
                descricao: "PINCA DE DISSECCAO ANATOMICA 18CM"
            },
            {
                codigo: "B-VIEW-14449-07",
                tipoDespesaId: 58,
                descricao: "PINCA DE DISSECCAO ANATOMICA C/ DENTE 25CM"
            },
            {
                codigo: "06-250-14",
                tipoDespesaId: 58,
                descricao: "Pinca de Tecido Dente de Rato 1x2 dentes 14,5cm"
            },
            {
                codigo: "0968",
                tipoDespesaId: 58,
                descricao: "PINCA DEBAKEY 27CM"
            },
            {
                codigo: "14-461-27",
                tipoDespesaId: 58,
                descricao: "Pinca DeBakey Atrauma Cardiovascular Aneurisma da Aorta 27,0cm Anvisa"
            },
            {
                codigo: "BSZ-2758",
                tipoDespesaId: 58,
                descricao: "PINCA DEBAKEY CABO ANGULADO CURVA 65Ao 20CM"
            },
            {
                codigo: "2105",
                tipoDespesaId: 58,
                descricao: "PINCA DENTE DE RATO - 16CM"
            },
            {
                codigo: "2577",
                tipoDespesaId: 58,
                descricao: "PINCA DIETRICH 20CM"
            },
            {
                codigo: "BSZ-5871",
                tipoDespesaId: 58,
                descricao: "Pinca Disseccao Adson, Serrilhada, Standard, 12cm - LOTE: B-237 - FAB: 11/12/23"
            },
            {
                codigo: "BSZ-5583",
                tipoDespesaId: 58,
                descricao: "PINCA DISSECCAO DEBAKEY 16CM"
            },
            {
                codigo: "BSZ-5584",
                tipoDespesaId: 58,
                descricao: "PINCA DISSECCAO DEBAKEY 18CM"
            },
            {
                codigo: "BSZ-5585",
                tipoDespesaId: 58,
                descricao: "PINCA DISSECCAO DEBAKEY 20CM"
            },
            {
                codigo: "BSZ-5586",
                tipoDespesaId: 58,
                descricao: "PINCA DISSECCAO DEBAKEY 25CM"
            },
            {
                codigo: "BSZ-5601",
                tipoDespesaId: 58,
                descricao: "PINCA DISSECCAO DEBAKEY CABO CHATO 24CM 3MM"
            },
            {
                codigo: "BSZ-5604",
                tipoDespesaId: 58,
                descricao: "PINCA DISSECCAO DEBAKEY CABO CHATO 30CM 3MM"
            },
            {
                codigo: "BSZ-14378",
                tipoDespesaId: 58,
                descricao: "PINCA DOYEN DEBAKEY CURVA 22CM"
            },
            {
                codigo: "BSZ-14351",
                tipoDespesaId: 58,
                descricao: "PINCA ESPANHOLA 14CM"
            },
            {
                codigo: "BSZ-14353",
                tipoDespesaId: 58,
                descricao: "PINCA ESPANHOLA 17CM"
            },
            {
                codigo: "BSZ-14354",
                tipoDespesaId: 58,
                descricao: "PINCA ESPANHOLA 19CM"
            },
            {
                codigo: "BSZ-14357",
                tipoDespesaId: 58,
                descricao: "PINCA ESPANHOLA 24CM"
            },
            {
                codigo: "0214",
                tipoDespesaId: 58,
                descricao: "PINCA FAURE (49P4)"
            },
            {
                codigo: "BSZ-6588",
                tipoDespesaId: 58,
                descricao: "PINCA FAURE CURVA 22CM"
            },
            {
                codigo: "BSZ-6587",
                tipoDespesaId: 58,
                descricao: "PINCA FAURE RETA 22CM"
            },
            {
                codigo: "BSZ-5441",
                tipoDespesaId: 58,
                descricao: "PINCA FOERSTER CURVA 16CM"
            },
            {
                codigo: "BSZ-5443",
                tipoDespesaId: 58,
                descricao: "PINCA FOERSTER CURVA 18CM"
            },
            {
                codigo: "BSZ-5444",
                tipoDespesaId: 58,
                descricao: "PINCA FOERSTER CURVA 20CM"
            },
            {
                codigo: "BSZ-5445",
                tipoDespesaId: 58,
                descricao: "PINCA FOERSTER CURVA 24CM"
            },
            {
                codigo: "BSZ-5435",
                tipoDespesaId: 58,
                descricao: "PINCA FOERSTER RETA 16CM"
            },
            {
                codigo: "BSZ-5436",
                tipoDespesaId: 58,
                descricao: "PINCA FOERSTER RETA 18CM"
            },
            {
                codigo: "BSZ-5437",
                tipoDespesaId: 58,
                descricao: "PINCA FOERSTER RETA 20CM"
            },
            {
                codigo: "BSZ-5439",
                tipoDespesaId: 58,
                descricao: "PINCA FOERSTER RETA 24CM"
            },
            {
                codigo: "0219",
                tipoDespesaId: 58,
                descricao: "PINCA FOESTER SERRILHA CURVA 24CM"
            },
            {
                codigo: "BSZ-4940",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA ALVEOLOTOMO CURVO 15CM"
            },
            {
                codigo: "BSZ-4975",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA BEYER BIARTICULADA 18CM"
            },
            {
                codigo: "BSZ-4965",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA BEYER RETA PRATA 18CM"
            },
            {
                codigo: "BSZ-4980",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA ECHILIN 2MM 23CM"
            },
            {
                codigo: "BSZ-4982",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA ECHILIN 4MM 23CM"
            },
            {
                codigo: "BSZ-4989",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA LEKSELL 8MM 23CM"
            },
            {
                codigo: "BSZ-4917",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA LUER RETA 18CM"
            },
            {
                codigo: "BSZ-4996",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA STILLE LUER PRATA RETA 10MM 22CM"
            },
            {
                codigo: "BSZ-5002",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA STILLE LUER RETA 10MM 26CM"
            },
            {
                codigo: "BSZ-5000",
                tipoDespesaId: 58,
                descricao: "PINCA GOIVA STILLE LUER RETA 8MM 23CM"
            },
            {
                codigo: "BSZ-5119",
                tipoDespesaId: 58,
                descricao: "PINCA HALSTEAD MOSQUITO CURVA 10CM"
            },
            {
                codigo: "0225",
                tipoDespesaId: 58,
                descricao: "PINCA HALSTEAD MOSQUITO CURVA 12CM"
            },
            {
                codigo: "BSZ-5120",
                tipoDespesaId: 58,
                descricao: "PINCA HALSTEAD MOSQUITO RETA 12CM - ANVISA 81179740001"
            },
            {
                codigo: "BSZ-5157",
                tipoDespesaId: 58,
                descricao: "PINCA KELLY CURVA 14CM"
            },
            {
                codigo: "BSZ-5192",
                tipoDespesaId: 58,
                descricao: "PINCA KELLY CURVA 16CM"
            },
            {
                codigo: "b-view-14991",
                tipoDespesaId: 58,
                descricao: "PINCA KELLY CURVA 19CM"
            },
            {
                codigo: "BSZ-5156",
                tipoDespesaId: 58,
                descricao: "PINCA KELLY RETA 14CM - ANVISA 81179740001"
            },
            {
                codigo: "BSZ-5191",
                tipoDespesaId: 58,
                descricao: "PINCA KELLY RETA 16CM"
            },
            {
                codigo: "07-234-16",
                tipoDespesaId: 58,
                descricao: "PINCA KELLY RETA 16CM - ANVISA 81897710001"
            },
            {
                codigo: "BSZ-5158",
                tipoDespesaId: 58,
                descricao: "PINCA KELLY RETA 18CM"
            },
            {
                codigo: "BSZ-6048",
                tipoDespesaId: 58,
                descricao: "PINCA KERRISON 18CM 40o P/ CIMA,5MM"
            },
            {
                codigo: "BSZ-6114",
                tipoDespesaId: 58,
                descricao: "PINCA KERRISON PARA CIMA 2MM 40Ao 18CM DIFERENTE"
            },
            {
                codigo: "2140",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER CURVA - 16CM."
            },
            {
                codigo: "0236",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER CURVA 14cm"
            },
            {
                codigo: "B-VIEW-14895",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER CURVA 16CM"
            },
            {
                codigo: "BSZ-5264",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER CURVA 18CM"
            },
            {
                codigo: "B-view-48-786",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER CURVA 20UN"
            },
            {
                codigo: "0244",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER INTESTINAL 25CM CURVA"
            },
            {
                codigo: "AI1656",
                tipoDespesaId: 58,
                descricao: "Pinca Kocher Intestinal 25cm Curva - 80476380011"
            },
            {
                codigo: "0243",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER INTESTINAL 25CM RETA"
            },
            {
                codigo: "AI1024",
                tipoDespesaId: 58,
                descricao: "Pinca Kocher Intestinal 25cm Reta - 80476380011"
            },
            {
                codigo: "BSZ-5246",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER RETA 14CM"
            },
            {
                codigo: "BSZ-5247",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER RETA 16CM"
            },
            {
                codigo: "BSZ-5248",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER RETA 18CM"
            },
            {
                codigo: "BSZ-5249",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER RETA 20CM"
            },
            {
                codigo: "BSZ-5251",
                tipoDespesaId: 58,
                descricao: "PINCA KOCHER RETA 24CM"
            },
            {
                codigo: "1237",
                tipoDespesaId: 58,
                descricao: "PINCA LAMBERT-KAY 21CM CORPO EM S"
            },
            {
                codigo: "BSZ-4846",
                tipoDespesaId: 58,
                descricao: "PINCA LUCAE 20CM BAIONETA"
            },
            {
                codigo: "BSZ-5867",
                tipoDespesaId: 58,
                descricao: "PINCA MICRO ADSON SERRILHA 1MM 12CM"
            },
            {
                codigo: "BSZ-5373",
                tipoDespesaId: 58,
                descricao: "PINCA MIXTER 16CM"
            },
            {
                codigo: "BSZ-5390",
                tipoDespesaId: 58,
                descricao: "PINCA MIXTER 18CM"
            },
            {
                codigo: "BSZ-5391",
                tipoDespesaId: 58,
                descricao: "PINCA MIXTER 20CM"
            },
            {
                codigo: "b-view-14963",
                tipoDespesaId: 58,
                descricao: "PINCA MIXTER 23CM"
            },
            {
                codigo: "AI1688",
                tipoDespesaId: 58,
                descricao: "Pinca Mixter 24cm - 80476380011"
            },
            {
                codigo: "CFOP5102 (2)",
                tipoDespesaId: 58,
                descricao: "Pinca Mixter 25cm - 80476380011"
            },
            {
                codigo: "AI2419",
                tipoDespesaId: 58,
                descricao: "Pinca Mixter 35cm - 80476380011"
            },
            {
                codigo: "BSZ-5374",
                tipoDespesaId: 58,
                descricao: "PINCA MIXTER BABY 14CM"
            },
            {
                codigo: "B-VIEW-14724",
                tipoDespesaId: 58,
                descricao: "PINCA MOSQUITO CURVA 12,5CM"
            },
            {
                codigo: "AI1062",
                tipoDespesaId: 58,
                descricao: "Pinca Moynihan 24cm - 80476380011"
            },
            {
                codigo: "0657",
                tipoDespesaId: 58,
                descricao: "PINCA NELSON 20CM"
            },
            {
                codigo: "AI00667",
                tipoDespesaId: 58,
                descricao: "Pinca Nelson 20cm - 80476380011"
            },
            {
                codigo: "BSZ-5006",
                tipoDespesaId: 58,
                descricao: "PINCA PARA PLACA 14CM"
            },
            {
                codigo: "BSZ-5219",
                tipoDespesaId: 58,
                descricao: "PINCA PEAN 14CM RETA"
            },
            {
                codigo: "BSZ-5099",
                tipoDespesaId: 58,
                descricao: "PINCA PELVICA 23CM RETA"
            },
            {
                codigo: "BSZ-5009",
                tipoDespesaId: 58,
                descricao: "PINCA PELVICA 23CM RETA"
            },
            {
                codigo: "BSZ-2574",
                tipoDespesaId: 58,
                descricao: "PINCA PENNINGTON 20CM (DUVAL)"
            },
            {
                codigo: "0658",
                tipoDespesaId: 58,
                descricao: "PINCA PENNINGTON RETA TRIANGULAR 20CM"
            },
            {
                codigo: "BSZ-5096",
                tipoDespesaId: 58,
                descricao: "PINCA PERIARTICULAR 40CM REDONDA"
            },
            {
                codigo: "BSZ-14136",
                tipoDespesaId: 58,
                descricao: "PINCA PONTA A PONTA SPEED LOCK 20CM"
            },
            {
                codigo: "2564",
                tipoDespesaId: 58,
                descricao: "PINCA POTTS SMITH COM WIDEA - 20CM"
            },
            {
                codigo: "AI1091",
                tipoDespesaId: 58,
                descricao: "Pinca Randall 23Cm N1 P/ Calculo Renal - 80476380011"
            },
            {
                codigo: "AI1092",
                tipoDespesaId: 58,
                descricao: "Pinca Randall 23Cm N2 P/ Calculo Renal - 80476380011"
            },
            {
                codigo: "AI1093",
                tipoDespesaId: 58,
                descricao: "Pinca Randall 23Cm N3 P/ Calculo Renal - 80476380011"
            },
            {
                codigo: "AI1094",
                tipoDespesaId: 58,
                descricao: "Pinca Randall 23Cm N4 P/ Calculo Renal - 80476380011"
            },
            {
                codigo: "AI1987",
                tipoDespesaId: 58,
                descricao: "Pinca Randall 23Cm N5 P/ Calculo Renal"
            },
            {
                codigo: "AI1988",
                tipoDespesaId: 58,
                descricao: "Pinca Randall 23Cm N6 P/ Calculo Renal"
            },
            {
                codigo: "BSZ-14140",
                tipoDespesaId: 58,
                descricao: "PINCA REDUCAO COM PONTA - ANVISA 81179740014"
            },
            {
                codigo: "AI1107",
                tipoDespesaId: 58,
                descricao: "Pinca Rochester Curva 24Cm - 80476380011"
            },
            {
                codigo: "0282",
                tipoDespesaId: 58,
                descricao: "PINCA ROCHESTER PEAN 24 CM RETA (47P4)"
            },
            {
                codigo: "B-VIEW-14814",
                tipoDespesaId: 58,
                descricao: "PINCA ROCHESTER PEAN CURVA 20CM"
            },
            {
                codigo: "0283",
                tipoDespesaId: 58,
                descricao: "PINCA ROCHESTER PEAN CURVA 24CM"
            },
            {
                codigo: "BSZ-5201",
                tipoDespesaId: 58,
                descricao: "PINCA ROCHESTER PEAN RETA 18CM"
            },
            {
                codigo: "B-VIEW-14804",
                tipoDespesaId: 58,
                descricao: "PINCA ROCHESTER PEAN RETA 18CM"
            },
            {
                codigo: "B-VIEW-14807",
                tipoDespesaId: 58,
                descricao: "PINCA ROCHESTER PEAN RETA 24CM"
            },
            {
                codigo: "0616",
                tipoDespesaId: 58,
                descricao: "PINCA ROWE DIREITA 23cm"
            },
            {
                codigo: "0617",
                tipoDespesaId: 58,
                descricao: "PINCA ROWE ESQUERDA 23CM"
            },
            {
                codigo: "BSZ-2817",
                tipoDespesaId: 58,
                descricao: "PINCA SATINSKY 25MM 20CM"
            },
            {
                codigo: "BSZ-2822",
                tipoDespesaId: 58,
                descricao: "PINCA SATINSKY 40MM 24CM"
            },
            {
                codigo: "BSZ-2818",
                tipoDespesaId: 58,
                descricao: "PINCA SATINSKY 45MM 25CM"
            },
            {
                codigo: "AI1115",
                tipoDespesaId: 58,
                descricao: "Pinca Satinsky Atraumatica 26cm - 80476380011"
            },
            {
                codigo: "0940",
                tipoDespesaId: 58,
                descricao: "PINCA SATINSKY BABY SERRA CRUZADA 15CM"
            },
            {
                codigo: "BSZ-4815",
                tipoDespesaId: 58,
                descricao: "PINCA SPLINTER HITOLOGICA 14CM"
            },
            {
                codigo: "BSZCO-1018",
                tipoDespesaId: 102,
                descricao: "PINO ADULTO"
            },
            {
                codigo: "BSZCO-1013",
                tipoDespesaId: 102,
                descricao: "PINO INFANTIL"
            },
            {
                codigo: "BSZ-6778",
                tipoDespesaId: 102,
                descricao: "Porta agulha 20cm"
            },
            {
                codigo: "B-view-50-052",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA 24CM"
            },
            {
                codigo: "BSZ-6902",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA CASTROVIEJO RETO COM WIDEA 14CM CABO CHATO"
            },
            {
                codigo: "BSZVI-1033",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA CASTROVIEJO RETO COM WIDEA 16CM CABO REDONDO"
            },
            {
                codigo: "BSZ-6906",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA CASTROVIEJO RETO COM WIDEA 18CM CABO CHATO - ANVISA 81179740001"
            },
            {
                codigo: "1709",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA COM WIDIA - 20CM"
            },
            {
                codigo: "BSZ-6630",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA CRILLE WOOD COM WIDEA 12CM"
            },
            {
                codigo: "BSZ-6631",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA CRILLE WOOD COM WIDEA 14CM"
            },
            {
                codigo: "BSZ-6633",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA CRILLE WOOD COM WIDEA 16CM"
            },
            {
                codigo: "BSZ-6632",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA CRILLE WOOD COM WIDEA 20CM"
            },
            {
                codigo: "BSZ-6857",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA FINOCHIETO COM WIDEA CURVO 30CM"
            },
            {
                codigo: "BSZ-6686",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MATHIEU 17CM SEM WIDEA"
            },
            {
                codigo: "V-6737",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO COM WIDEA 14CM"
            },
            {
                codigo: "BSZ-6776",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO COM WIDEA 16CM"
            },
            {
                codigo: "2168",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR - 16CM COM WIDIA."
            },
            {
                codigo: "2106",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR - 18CM COM WIDIA"
            },
            {
                codigo: "0296",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR 14 CM (48P4)"
            },
            {
                codigo: "0362",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR 18 CM T/C (45P4)"
            },
            {
                codigo: "0297",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR 18CM"
            },
            {
                codigo: "b-view-32347",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR 18CM C/ VIDEA"
            },
            {
                codigo: "298",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR 20 CM"
            },
            {
                codigo: "b-view-32353",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR 24CM C/ VIDEA"
            },
            {
                codigo: "1157",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR 30CM"
            },
            {
                codigo: "CFOP5102 (16)",
                tipoDespesaId: 102,
                descricao: "Porta Agulha Mayo Hegar com Videa 26cm - 80476380012"
            },
            {
                codigo: "AI1181",
                tipoDespesaId: 102,
                descricao: "Porta Agulha Mayo Hegar Com Videa 30cm - 80476380012"
            },
            {
                codigo: "BSZ-6604",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR SEM WIDEA 16CM"
            },
            {
                codigo: "11-552-18",
                tipoDespesaId: 102,
                descricao: "PORTA AGULHA MAYO HEGAR, COM VIDEA 180MM - ANVISA 81897710001"
            },
            {
                codigo: "BSZ-6797",
                tipoDespesaId: 102,
                descricao: "Porta agulha ryder com videa 18cm"
            },
            {
                codigo: "AI01488",
                tipoDespesaId: 102,
                descricao: "PROLONGADOR DE BROCA HUDSON"
            },
            {
                codigo: "BSZ-6986",
                tipoDespesaId: 102,
                descricao: "RASPA OSSO 8mm 16cm reto"
            },
            {
                codigo: "0885",
                tipoDespesaId: 102,
                descricao: "RUGINA DE MILLER N 11"
            },
            {
                codigo: "AI00139",
                tipoDespesaId: 102,
                descricao: "Rugina Doyen Direita 17cm - 80476380011"
            },
            {
                codigo: "BSZ-1737",
                tipoDespesaId: 102,
                descricao: "RUGINA DOYEN ESQUERDA"
            },
            {
                codigo: "AI1258",
                tipoDespesaId: 102,
                descricao: "Rugina Farabeuf Curva - 80476380011"
            },
            {
                codigo: "0300",
                tipoDespesaId: 102,
                descricao: "RUGINA FARABEUF CURVA (10W3)"
            },
            {
                codigo: "CFOP5102 (18)",
                tipoDespesaId: 102,
                descricao: "Rugina Farabeuf Curva 15cm - 80476380011"
            },
            {
                codigo: "BSZ-6919",
                tipoDespesaId: 102,
                descricao: "RUGINA LAMBOTTE CURVA 15MM 21CM"
            },
            {
                codigo: "BSZ-6955",
                tipoDespesaId: 102,
                descricao: "RUGINA LAMBOTTE CURVA 16MM 21CM"
            },
            {
                codigo: "BSZ-6920",
                tipoDespesaId: 102,
                descricao: "RUGINA LAMBOTTE CURVA 20MM 21CM"
            },
            {
                codigo: "BSZ-6953",
                tipoDespesaId: 102,
                descricao: "RUGINA LAMBOTTE CURVA 8MM 21CM"
            },
            {
                codigo: "2557",
                tipoDespesaId: 102,
                descricao: "SATINSKY - 26CM"
            },
            {
                codigo: "QD.260.20",
                tipoDespesaId: 102,
                descricao: "SEPARADOR CAVIDADE"
            },
            {
                codigo: "QD.936.02",
                tipoDespesaId: 102,
                descricao: "SEPARADOR SAGITAL DIREITO 9MM"
            },
            {
                codigo: "QD.936.01",
                tipoDespesaId: 102,
                descricao: "SEPARADOR SAGITAL ESQUERDO 9MM"
            },
            {
                codigo: "0308",
                tipoDespesaId: 102,
                descricao: "TENTACANULA (SONDA ACANELADA) (93S3)"
            },
            {
                codigo: "BSZOD-3503",
                tipoDespesaId: 102,
                descricao: "TENTACANULA 14CM"
            },
            {
                codigo: "1327",
                tipoDespesaId: 102,
                descricao: "Tesoura Boyd CURVA 14CM"
            },
            {
                codigo: "BSZ-7444",
                tipoDespesaId: 102,
                descricao: "TESOURA CASTROVIEJO CURVA 11CM"
            },
            {
                codigo: "QZ.772.14",
                tipoDespesaId: 102,
                descricao: "TESOURA CASTROVIEJO RETA 14CM"
            },
            {
                codigo: "BSZ-7209",
                tipoDespesaId: 102,
                descricao: "TESOURA CIRURGICA R/R RETA 15CM"
            },
            {
                codigo: "05-265-13",
                tipoDespesaId: 102,
                descricao: "Tesoura de Dissecacao Fomon 13,5cm Anvisa REGIST"
            },
            {
                codigo: "BSZ-7746",
                tipoDespesaId: 102,
                descricao: "Tesoura debakey 60o"
            },
            {
                codigo: "1298",
                tipoDespesaId: 102,
                descricao: "TESOURA DIETRICH 18CM 90"
            },
            {
                codigo: "1797",
                tipoDespesaId: 102,
                descricao: "TESOURA IRIS CURVA - 12CM."
            },
            {
                codigo: "14-01965-11",
                tipoDespesaId: 102,
                descricao: "TESOURA IRIS CURVA 11,5CM - MS 81725810014 (B-view-61-116)"
            },
            {
                codigo: "BSZ-7100",
                tipoDespesaId: 102,
                descricao: "Tesoura Iris Curva 12cm"
            },
            {
                codigo: "1875",
                tipoDespesaId: 102,
                descricao: "Tesoura Iris ou Gengiva Reta 12 cm"
            },
            {
                codigo: "0321",
                tipoDespesaId: 102,
                descricao: "TESOURA IRIS OU GENGIVA RETA 12 CM (48P4)"
            },
            {
                codigo: "03222",
                tipoDespesaId: 102,
                descricao: "TESOURA IRIS OU GENGIVA RETA 12CM"
            },
            {
                codigo: "1798",
                tipoDespesaId: 102,
                descricao: "TESOURA IRIS RETA - 12CM."
            },
            {
                codigo: "BSZ-7099",
                tipoDespesaId: 102,
                descricao: "Tesoura Iris Reta 12cm"
            },
            {
                codigo: "0456",
                tipoDespesaId: 102,
                descricao: "TESOURA IRIS RETA DELICADA,12CM"
            },
            {
                codigo: "FX.09.413",
                tipoDespesaId: 102,
                descricao: "TESOURA IRIS RETA FINA CHANFRADAS C/ PONTAS AGUDAS 11,5CM - ANVISA 81897719002"
            },
            {
                codigo: "BSZ-7128",
                tipoDespesaId: 102,
                descricao: "TESOURA JOSEPH CURVA SEM VIDEA 14CM"
            },
            {
                codigo: "BSZ-7728",
                tipoDespesaId: 102,
                descricao: "TESOURA JOSEPH RETA SEM WIDEA 14CM"
            },
            {
                codigo: "BSZ-7513",
                tipoDespesaId: 102,
                descricao: "TESOURA LISTER 18CM"
            },
            {
                codigo: "05-921-14",
                tipoDespesaId: 102,
                descricao: "Tesoura Lister para Ataduras e roupas 18,0 cm LISTER BANDAGE CLOTHING SCISSORS 18.0CM Anvisa REGIS"
            },
            {
                codigo: "FX.09.381",
                tipoDespesaId: 102,
                descricao: "TESOURA MAYO CURVA ROMBA 17CM - ANVISA 81897719002"
            },
            {
                codigo: "BSZ-7274",
                tipoDespesaId: 102,
                descricao: "TESOURA MAYO RETA 15CM"
            },
            {
                codigo: "B-view-61-211",
                tipoDespesaId: 102,
                descricao: "TESOURA MAYO RETA 23CM"
            },
            {
                codigo: "BSZ-7257",
                tipoDespesaId: 102,
                descricao: "TESOURA MAYO STILLE CURVA 15CM"
            },
            {
                codigo: "BSZ-7253",
                tipoDespesaId: 102,
                descricao: "TESOURA MAYO STILLE RETA 17CM"
            },
            {
                codigo: "BSZ-7252",
                tipoDespesaId: 102,
                descricao: "TESOURA MAYO STILLE RETA 21CM"
            },
            {
                codigo: "0333",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM 15 CM CURVA (22W4)"
            },
            {
                codigo: "0332",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM 15 CM RETA (22W4)"
            },
            {
                codigo: "0334",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM 18 CM RETA (96S4) - ANVISA 10304850053"
            },
            {
                codigo: "0339",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM 25 CM CURVA (23W4)"
            },
            {
                codigo: "0893",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM 28 CM CURVA (19W4)"
            },
            {
                codigo: "1793",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM CURVA - 18CM."
            },
            {
                codigo: "1794",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM CURVA - 20CM."
            },
            {
                codigo: "BSZ-7345",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM CURVA 14CM"
            },
            {
                codigo: "BSZ-7343",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM CURVA 15CM"
            },
            {
                codigo: "BSZ-7332",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM CURVA 18CM"
            },
            {
                codigo: "BSZ-7333",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM CURVA 20CM"
            },
            {
                codigo: "BSZVI-1094",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM CURVA COM WIDEA 18CM"
            },
            {
                codigo: "BSZ-7342",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM RETA 15CM"
            },
            {
                codigo: "BSZ-7326",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM RETA 18CM"
            },
            {
                codigo: "BSZ-7328",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM RETA 23CM"
            },
            {
                codigo: "B-VIEW-16844",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM RETA 25CM"
            },
            {
                codigo: "BSZ-7330",
                tipoDespesaId: 102,
                descricao: "TESOURA METZEMBAUM RETA 28CM"
            },
            {
                codigo: "1187",
                tipoDespesaId: 102,
                descricao: "TESOURA METZENBAUM 23CM CURVA (02.SN4)"
            },
            {
                codigo: "QT.285.12",
                tipoDespesaId: 102,
                descricao: "TESOURA METZENBAUM CURVA 12CM"
            },
            {
                codigo: "1543",
                tipoDespesaId: 102,
                descricao: "TESOURA P/ FIO DE ACO 11CM (25W4)"
            },
            {
                codigo: "BSZ-7661",
                tipoDespesaId: 102,
                descricao: "TESOURA POTTS SMITT ANGULADA 25Ao DIREITA 18CM"
            },
            {
                codigo: "BSZ-7167",
                tipoDespesaId: 102,
                descricao: "TESOURA SPENCER RETA 13CM"
            },
            {
                codigo: "05-794-12",
                tipoDespesaId: 102,
                descricao: "TESOURA UNIVERSAL 12 CM CORTA FIO DE ACO"
            },
            {
                codigo: "BSZOD-3400",
                tipoDespesaId: 102,
                descricao: "TREFINA - 2MM"
            },
            {
                codigo: "BSZOD-3404",
                tipoDespesaId: 102,
                descricao: "TREFINA - 5MM"
            },
            {
                codigo: "BSZ-215526",
                tipoDespesaId: 102,
                descricao: "TREFINA 2MM - ANVISA 81179740022"
            },
            {
                codigo: "BSZOD-3401",
                tipoDespesaId: 102,
                descricao: "TREFINA 3.5MM"
            },
            {
                codigo: "BSZOD-3402",
                tipoDespesaId: 102,
                descricao: "TREFINA 4MM"
            },
            {
                codigo: "BSZ-215532",
                tipoDespesaId: 102,
                descricao: "TREFINA 5MM - ANVISA 81179740022"
            },
            {
                codigo: "BSZOD-3405",
                tipoDespesaId: 102,
                descricao: "TREFINA 6MM"
            },
            {
                codigo: "BSZ-215535",
                tipoDespesaId: 102,
                descricao: "TREFINA 8MM - ANVISA 81179740022"
            },
            {
                codigo: "BSZ-4650",
                tipoDespesaId: 102,
                descricao: "TREPANO DE HUDSON"
            },
            {
                codigo: "BSZ-759",
                tipoDespesaId: 102,
                descricao: "VALVULA DOYEN 60X120MM"
            },
            {
                codigo: "BSZ-760",
                tipoDespesaId: 102,
                descricao: "VALVULA DOYEN 60X90MM"
            },
            {
                codigo: "b-view-10502",
                tipoDespesaId: 102,
                descricao: "VALVULA DOYEN SUPRAPUBICA 28CM"
            },
        ]
    },
    {
        cnpj: "22577298000130",
        razao: "PRIME COMERCIO DE PRODUTOS HOSPITALARES LTDA - ME",
        itens: [
            {
                codigo: "KIT 4GR",
                tipoDespesaId: 58,
                descricao: "KIT COM 1 ESCOVA E 1 GEL DENTAL 4GR - ED03 LOTE: 123; L09/4G"
            },
        ]
    },
    {
        cnpj: "26643869000148",
        razao: "OPME LOG LOGISTICA INTEGRADA S.A",
        itens: [
            {
                codigo: "3201010",
                tipoDespesaId: 244,
                descricao: "ADAP.EQX UMERAL REVERSO 10"
            },
            {
                codigo: "3201000",
                tipoDespesaId: 244,
                descricao: "ADAP.EQX UMERAL REVERSO(A)+0"
            },
            {
                codigo: "3172003",
                tipoDespesaId: 244,
                descricao: "AFAST. EQUINOXE PARA DELTOIDE"
            },
            {
                codigo: "3172001",
                tipoDespesaId: 244,
                descricao: "AFAST. EQUINOXE PLAYBOY PEQ(A)"
            },
            {
                codigo: "01A054-02",
                tipoDespesaId: 244,
                descricao: "AFASTADOR DELTOIDE G 41MMX23CM"
            },
            {
                codigo: "AI00768",
                tipoDespesaId: 244,
                descricao: "AFASTADOR FUKUDA MEDIO AFASTADOR FUKUDA MEDIO"
            },
            {
                codigo: "01A092-04",
                tipoDespesaId: 244,
                descricao: "AFASTADOR TAYLOR 180MM"
            },
            {
                codigo: "10212000001",
                tipoDespesaId: 244,
                descricao: "BAND.GEN. NIV.UNICO MET.DO TAM.PAD"
            },
            {
                codigo: "3214102",
                tipoDespesaId: 244,
                descricao: "BANDEJA E BANDEJA METALICA"
            },
            {
                codigo: "3014101",
                tipoDespesaId: 244,
                descricao: "BANDEJA METALICA"
            },
            {
                codigo: "3014102",
                tipoDespesaId: 244,
                descricao: "BANDEJA METALICA"
            },
            {
                codigo: "3154101",
                tipoDespesaId: 244,
                descricao: "BANDEJA METALICA"
            },
            {
                codigo: "3152763",
                tipoDespesaId: 244,
                descricao: "BR.MOD. CANNULATED CENTER PEG"
            },
            {
                codigo: "3212000",
                tipoDespesaId: 244,
                descricao: "BR.MODULAR DE DIA.3.2MME BR.EQX INICIAL 2.0MM OMBRO REV. PAR ."
            },
            {
                codigo: "3152762",
                tipoDespesaId: 244,
                descricao: "BR.MODULAR PERIFERICA PEG DRILL"
            },
            {
                codigo: "T21 1 320",
                tipoDespesaId: 244,
                descricao: "BROCA INOX D 2,0 X 40 X 150"
            },
            {
                codigo: "T21 1 350",
                tipoDespesaId: 244,
                descricao: "BROCA INOX D.3,2 X 40 X 150"
            },
            {
                codigo: "3152760",
                tipoDespesaId: 244,
                descricao: "BROCA MODULAR CENTER PEG/KEEL"
            },
            {
                codigo: "3152761",
                tipoDespesaId: 244,
                descricao: "BROCA MODULAR PEQUENA KEEL"
            },
            {
                codigo: "3213813",
                tipoDespesaId: 244,
                descricao: "CAB. PRV EQ.CONSTRITA 38MM+2.5"
            },
            {
                codigo: "3214213",
                tipoDespesaId: 244,
                descricao: "CAB. PRV EQ.CONSTRITA 42MM+2.5"
            },
            {
                codigo: "3110141",
                tipoDespesaId: 244,
                descricao: "CABECA DE PRV CURTO(A)EQ. 41MM"
            },
            {
                codigo: "3110144",
                tipoDespesaId: 244,
                descricao: "CABECA DE PRV CURTO(A)EQ. 44MM"
            },
            {
                codigo: "3110138",
                tipoDespesaId: 244,
                descricao: "CABECA DE PRV CURTO(A)EQ.38MM"
            },
            {
                codigo: "3110147",
                tipoDespesaId: 244,
                descricao: "CABECA DE PRV CURTO(A)EQ.47MM"
            },
            {
                codigo: "3110150",
                tipoDespesaId: 244,
                descricao: "CABECA DE PRV CURTO(A)EQ.50MM"
            },
            {
                codigo: "3110153",
                tipoDespesaId: 244,
                descricao: "CABECA DE PRV CURTO(A)EQ.53MM"
            },
            {
                codigo: "3213800",
                tipoDespesaId: 244,
                descricao: "CABECA DE PRV EQUINOXE 38MM+0"
            },
            {
                codigo: "3214200",
                tipoDespesaId: 244,
                descricao: "CABECA DE PRV EQUINOXE 42MM+0"
            },
            {
                codigo: "3110238",
                tipoDespesaId: 244,
                descricao: "CABECA PRV ELEVADO(A)EQ.38MM"
            },
            {
                codigo: "3110241",
                tipoDespesaId: 244,
                descricao: "CABECA PRV ELEVADO(A)EQ.41MM"
            },
            {
                codigo: "3110244",
                tipoDespesaId: 244,
                descricao: "CABECA PRV ELEVADO(A)EQ.44MM"
            },
            {
                codigo: "3110247",
                tipoDespesaId: 244,
                descricao: "CABECA PRV ELEVADO(A)EQ.47MM"
            },
            {
                codigo: "3110250",
                tipoDespesaId: 244,
                descricao: "CABECA PRV ELEVADO(A)EQ.50MM"
            },
            {
                codigo: "3110253",
                tipoDespesaId: 244,
                descricao: "CABECA PRV ELEVADO(A)EQ.53MM"
            },
            {
                codigo: "3213810",
                tipoDespesaId: 244,
                descricao: "CABECA PRV EQ.CONSTRITA 38MM+0"
            },
            {
                codigo: "3214210",
                tipoDespesaId: 244,
                descricao: "CABECA PRV EQ.CONSTRITA 42MM+0"
            },
            {
                codigo: "3213803",
                tipoDespesaId: 244,
                descricao: "CABECA PRV EQUINOXE 38MM+2.5"
            },
            {
                codigo: "3214203",
                tipoDespesaId: 244,
                descricao: "CABECA PRV EQUINOXE 42MM+2.5"
            },
            {
                codigo: "3110353",
                tipoDespesaId: 244,
                descricao: "CABECA PRV EXPANDIDO EQ.53MM"
            },
            {
                codigo: "3110347",
                tipoDespesaId: 244,
                descricao: "CABECA PRV EXPANDIDO(A)EQ.47MM"
            },
            {
                codigo: "3110350",
                tipoDespesaId: 244,
                descricao: "CABECA PRV EXPANDIDO(A)EQ.50MM"
            },
            {
                codigo: "3010780",
                tipoDespesaId: 244,
                descricao: "CABO DE CHV EQUINOXE C/CATRACA"
            },
            {
                codigo: "3010301",
                tipoDespesaId: 244,
                descricao: "CABO DE RASPA MODULAR EQUINOXE"
            },
            {
                codigo: "3210128",
                tipoDespesaId: 244,
                descricao: "CABO DO INTRO DA GLENOSFERA"
            },
            {
                codigo: "3010730",
                tipoDespesaId: 244,
                descricao: "CABO EM T EQUINOXE"
            },
            {
                codigo: "3010770",
                tipoDespesaId: 244,
                descricao: "CABO EM T EQUINOXE PEQUENO(A)"
            },
            {
                codigo: "3210705",
                tipoDespesaId: 244,
                descricao: "CABO EQUINOXE DO IMPACTOR"
            },
            {
                codigo: "3141313",
                tipoDespesaId: 244,
                descricao: "CAGE GLENOID MEDIO BETA"
            },
            {
                codigo: "3014103",
                tipoDespesaId: 244,
                descricao: "CAIXA E BANDEJA METALICA"
            },
            {
                codigo: "3014104",
                tipoDespesaId: 244,
                descricao: "CAIXA E BANDEJA METALICA"
            },
            {
                codigo: "3154102",
                tipoDespesaId: 244,
                descricao: "CAIXA E BANDEJA METALICA"
            },
            {
                codigo: "3214101",
                tipoDespesaId: 244,
                descricao: "CAIXA E BANDEJA METALICA"
            },
            {
                codigo: "3214103",
                tipoDespesaId: 244,
                descricao: "CAIXA E BANDEJA METALICA"
            },
            {
                codigo: "10-111-00-0001",
                tipoDespesaId: 244,
                descricao: "CAIXA METALICA C/ TAMPA"
            },
            {
                codigo: "3211035",
                tipoDespesaId: 244,
                descricao: "CB EQ.MOD. PL REPLICADORA REV."
            },
            {
                codigo: "3150720",
                tipoDespesaId: 244,
                descricao: "CB G. P/PERF EQUINOXE"
            },
            {
                codigo: "3110705",
                tipoDespesaId: 244,
                descricao: "CB IMPACTOR IMPL EQUINOXE"
            },
            {
                codigo: "3011000",
                tipoDespesaId: 244,
                descricao: "CB MODULAR PL REPLICADORA FRAT"
            },
            {
                codigo: "3011035",
                tipoDespesaId: 244,
                descricao: "CB REPLICADOR MODULAR EQUINOXE"
            },
            {
                codigo: "3010310",
                tipoDespesaId: 244,
                descricao: "CB RETROVERSAO EQUINOXE TUSS:"
            },
            {
                codigo: "3010750",
                tipoDespesaId: 244,
                descricao: "CHAVE PARA PARAF EXACTECH"
            },
            {
                codigo: "3211508",
                tipoDespesaId: 244,
                descricao: "CHV PARAF EQUINOXE HEXEXACTECH"
            },
            {
                codigo: "3011010",
                tipoDespesaId: 244,
                descricao: "CHV REMOVEDORA PARAF. TORQUE"
            },
            {
                codigo: "40000003000",
                tipoDespesaId: 244,
                descricao: "CIMENTO OSSEO SUBITON 40G"
            },
            {
                codigo: "3140203",
                tipoDespesaId: 244,
                descricao: "COMP.GLENOIDAL C/PINO ALFA M."
            },
            {
                codigo: "3140204",
                tipoDespesaId: 244,
                descricao: "COMP.GLENOIDAL C/PINO ALFAGDE."
            },
            {
                codigo: "3140202",
                tipoDespesaId: 244,
                descricao: "COMP.GLENOIDAL C/PINO ALFAPEQ."
            },
            {
                codigo: "3140214",
                tipoDespesaId: 244,
                descricao: "COMP.GLENOIDAL C/PINO BETAGDE."
            },
            {
                codigo: "3140212",
                tipoDespesaId: 244,
                descricao: "COMP.GLENOIDAL C/PINO BETAPEQ."
            },
            {
                codigo: "3100138",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CABECA C. EQ.38X16MM"
            },
            {
                codigo: "3100141",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CABECA C. EQ.41X16MM"
            },
            {
                codigo: "3100144",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CABECA C. EQ.44X17MM"
            },
            {
                codigo: "3100147",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CABECA C. EQ.47X18MM"
            },
            {
                codigo: "3100150",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CABECA C. EQ.50X19MM"
            },
            {
                codigo: "3100153",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CABECA C. EQ.53X20MM"
            },
            {
                codigo: "3100238",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CBCA ALTA EQ.38X19MM"
            },
            {
                codigo: "3100241",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CBCA ALTA EQ.41X20MM"
            },
            {
                codigo: "3100244",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CBCA ALTA EQ.44X21MM"
            },
            {
                codigo: "3100247",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CBCA ALTA EQ.47X22MM"
            },
            {
                codigo: "3100250",
                tipoDespesaId: 244,
                descricao: "COMP.UM. CBCA ALTA EQ.50X23MM"
            },
            {
                codigo: "3211522",
                tipoDespesaId: 244,
                descricao: "CONJUNTO UNIVERSAL MESA ( 3 PECA"
            },
            {
                codigo: "3013600",
                tipoDespesaId: 244,
                descricao: "CX DE INSTRUMENTAL EQUINOXE 5"
            },
            {
                codigo: "3150903",
                tipoDespesaId: 244,
                descricao: "DILAT. GLENOI TRASPA EQ.MED/GD"
            },
            {
                codigo: "3150902",
                tipoDespesaId: 244,
                descricao: "DILATADOR GLENOI TRASPA EQ.PEQ"
            },
            {
                codigo: "3011515",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO TIPO FRESA 15MM"
            },
            {
                codigo: "3010111",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO TRASPA EQ. 11MM"
            },
            {
                codigo: "3010113",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO TRASPA EQ. 13MM"
            },
            {
                codigo: "3010109",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO TRASPA EQ. 9MM"
            },
            {
                codigo: "3010115",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO TRASPA EQ.15MM"
            },
            {
                codigo: "3010107",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO TRASPA EQ.7MM"
            },
            {
                codigo: "3011511",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO(A)TFRESA 11MM"
            },
            {
                codigo: "3011513",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO(A)TFRESA 13MM"
            },
            {
                codigo: "3011517",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO(A)TFRESA 17MM"
            },
            {
                codigo: "3011507",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO(A)TFRESA 7MM"
            },
            {
                codigo: "3011509",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO(A)TFRESA 9MM"
            },
            {
                codigo: "3010117",
                tipoDespesaId: 244,
                descricao: "DILATADOR RETO(A)TRASPA EQ.17MM"
            },
            {
                codigo: "3211523",
                tipoDespesaId: 244,
                descricao: "ENCAIXE PRIMARIO PARA MESA"
            },
            {
                codigo: "3213538",
                tipoDespesaId: 244,
                descricao: "ESC. MOD. REVERSO CAN 38MM"
            },
            {
                codigo: "3213542",
                tipoDespesaId: 244,
                descricao: "ESC. MOD. REVERSO CAN 42MM"
            },
            {
                codigo: "3213501",
                tipoDespesaId: 244,
                descricao: "ESC. MOD. REVERSO CAN STARTER"
            },
            {
                codigo: "3212538",
                tipoDespesaId: 244,
                descricao: "ESC. MOD.REV. PILOTIT IP 38MM"
            },
            {
                codigo: "3212542",
                tipoDespesaId: 244,
                descricao: "ESC. MOD.REV. PILOTIT IP 42MM"
            },
            {
                codigo: "3152513",
                tipoDespesaId: 244,
                descricao: "ESC. PILOTIT IP MOD PRIM.M."
            },
            {
                codigo: "3152512",
                tipoDespesaId: 244,
                descricao: "ESC. PILOTIT IP MOD PRIM.PEQ"
            },
            {
                codigo: "3212501",
                tipoDespesaId: 244,
                descricao: "ESC.MOD.REV.PILOTIT IP STARTER"
            },
            {
                codigo: "3152511",
                tipoDespesaId: 244,
                descricao: "ESC.PILOTIT IP MOD PRIM.EXTRAPQ"
            },
            {
                codigo: "3110501",
                tipoDespesaId: 244,
                descricao: "EXTRATOR DE CABECA EQUINOXE"
            },
            {
                codigo: "3211511",
                tipoDespesaId: 244,
                descricao: "EXTRATOR EQUINOXE CABECA UMERAL"
            },
            {
                codigo: "3210215",
                tipoDespesaId: 244,
                descricao: "EXTRATOR EQUINOXE GLENOSFERA"
            },
            {
                codigo: "40013420307",
                tipoDespesaId: 244,
                descricao: "FIO DE STEINMAN 2.0 X 300 MM"
            },
            {
                codigo: "3152514",
                tipoDespesaId: 244,
                descricao: "FRESA MOD.PRIM.ARIA PT DO G.GD"
            },
            {
                codigo: "3211533",
                tipoDespesaId: 244,
                descricao: "G. BR. PL.MOD.GLEN.D.P.DIR."
            },
            {
                codigo: "3211532",
                tipoDespesaId: 244,
                descricao: "G. BR. PL.MOD.GLEN.D.P.ESQ"
            },
            {
                codigo: "3211531",
                tipoDespesaId: 244,
                descricao: "G. BR. PL.MOD.GLEN.LAT.SUP.DIR"
            },
            {
                codigo: "3211530",
                tipoDespesaId: 244,
                descricao: "G. BR. PL.MOD.GLEN.LAT.SUP.ESQ"
            },
            {
                codigo: "3152703",
                tipoDespesaId: 244,
                descricao: "G. DE BR.CENTRAL HOLE PEG,DIR"
            },
            {
                codigo: "3152702",
                tipoDespesaId: 244,
                descricao: "G. DE BR.CENTRAL HOLE PEG,ESQ."
            },
            {
                codigo: "3152704",
                tipoDespesaId: 244,
                descricao: "G. DE BR.PERIF.HOLE PEG,ESQ."
            },
            {
                codigo: "3152705",
                tipoDespesaId: 244,
                descricao: "G. DE BROCA PERIF.HOLE PEG,DIR"
            },
            {
                codigo: "3110110",
                tipoDespesaId: 244,
                descricao: "G. OSTEOTOMIA 132.5 EQUINOXE"
            },
            {
                codigo: "3110101",
                tipoDespesaId: 244,
                descricao: "G. OSTEOTOMIA ANATOMICA EQX"
            },
            {
                codigo: "3211504",
                tipoDespesaId: 244,
                descricao: "G.ANGULACAO EQ.AJUSTAVEL REVERSA"
            },
            {
                codigo: "3211735",
                tipoDespesaId: 244,
                descricao: "G.BR.GLENOI AUM.SUP./POST.DIR."
            },
            {
                codigo: "3211734",
                tipoDespesaId: 244,
                descricao: "G.BR.GLENOI AUM.SUP./POST.ESQ."
            },
            {
                codigo: "3211732",
                tipoDespesaId: 244,
                descricao: "G.BR.MOD.PLGLENOI AU.POST ESQ."
            },
            {
                codigo: "3211733",
                tipoDespesaId: 244,
                descricao: "G.BR.MOD.PLGLENOI AU.POST.DIR."
            },
            {
                codigo: "3211730",
                tipoDespesaId: 244,
                descricao: "G.BR.MOD.PLGLENOI AU.SUP.ESQ."
            },
            {
                codigo: "3211731",
                tipoDespesaId: 244,
                descricao: "G.BR.MOD.PLGLENOI AU.SUP.ESQ."
            },
            {
                codigo: "3200142",
                tipoDespesaId: 244,
                descricao: "GLENOSFERA EQX REVERSO 42MM"
            },
            {
                codigo: "3200138",
                tipoDespesaId: 244,
                descricao: "GLENOSFERA EQX REVERSO(A) 38MM"
            },
            {
                codigo: "3152706",
                tipoDespesaId: 244,
                descricao: "GUIA DE BROCA DA QUILHA"
            },
            {
                codigo: "3000111",
                tipoDespesaId: 244,
                descricao: "HASTE EQX UMERAL PRES FIT 11MM"
            },
            {
                codigo: "3000113",
                tipoDespesaId: 244,
                descricao: "HASTE EQX UMERAL PRES FIT 13MM"
            },
            {
                codigo: "3000115",
                tipoDespesaId: 244,
                descricao: "HASTE EQX UMERAL PRES FIT 15MM"
            },
            {
                codigo: "3000117",
                tipoDespesaId: 244,
                descricao: "HASTE EQX UMERAL PRES FIT 17MM"
            },
            {
                codigo: "3000107",
                tipoDespesaId: 244,
                descricao: "HASTE EQX UMERAL PRESS FIT 7MM"
            },
            {
                codigo: "3000109",
                tipoDespesaId: 244,
                descricao: "HASTE EQX UMERAL PRESS FIT 9MM"
            },
            {
                codigo: "3110707",
                tipoDespesaId: 244,
                descricao: "IMPACTOR CABECA UMERAL EQUINOXE"
            },
            {
                codigo: "3011038",
                tipoDespesaId: 244,
                descricao: "IND.  ROTACIONAL IMPL.EQ.38MM"
            },
            {
                codigo: "3011041",
                tipoDespesaId: 244,
                descricao: "INDICADOR ROT.IMPLANTE EQ.41MM"
            },
            {
                codigo: "3011044",
                tipoDespesaId: 244,
                descricao: "INDICADOR(A)OFFSET EQX 44MM"
            },
            {
                codigo: "3011047",
                tipoDespesaId: 244,
                descricao: "INDICADOR(A)OFFSET EQX 47MM"
            },
            {
                codigo: "3011050",
                tipoDespesaId: 244,
                descricao: "INDICADOR(A)OFFSET EQX 50MM"
            },
            {
                codigo: "3011053",
                tipoDespesaId: 244,
                descricao: "INDICADOR(A)OFFSET EQX 53MM"
            },
            {
                codigo: "3210129",
                tipoDespesaId: 244,
                descricao: "INSERSOR CLAMP GLENOSFERA UNIVERSAL"
            },
            {
                codigo: "3210131",
                tipoDespesaId: 244,
                descricao: "INSERTOR GLENOSFERA EXACTECH"
            },
            {
                codigo: "3210127",
                tipoDespesaId: 244,
                descricao: "INTRO DESLIZANTE DA GLENOSFERA"
            },
            {
                codigo: "3010710",
                tipoDespesaId: 244,
                descricao: "INTRO E EXTRATOR HASTE EQUINOXE"
            },
            {
                codigo: "3210125",
                tipoDespesaId: 244,
                descricao: "INTRO EQUINOXE DE GLENOSFERA"
            },
            {
                codigo: "3210126",
                tipoDespesaId: 244,
                descricao: "INTRO PILOTO EQX GLENOSFERA"
            },
            {
                codigo: "3211513",
                tipoDespesaId: 244,
                descricao: "INTRO/IMPACTOR EQ.DA BASE GLENOIDAL"
            },
            {
                codigo: "140190090100",
                tipoDespesaId: 244,
                descricao: "LAMINA S STD 19X90X1 LH-01"
            },
            {
                codigo: "505210",
                tipoDespesaId: 244,
                descricao: "MANGUEIRA PNEUMATICA UNIVERSAL"
            },
            {
                codigo: "MAN005/MAN006",
                tipoDespesaId: 244,
                descricao: "MANOMETRO MANOMETRO"
            },
            {
                codigo: "3010701",
                tipoDespesaId: 244,
                descricao: "MARTELO TUSS:"
            },
            {
                codigo: "3110120",
                tipoDespesaId: 244,
                descricao: "MEDIDOR CABECA UMERAL EQUINOXE"
            },
            {
                codigo: "3211509",
                tipoDespesaId: 244,
                descricao: "MEDIDOR PROFUNDIDA EQ.GLENOIDE"
            },
            {
                codigo: "3152500",
                tipoDespesaId: 244,
                descricao: "MODULAR CANULADO TRIDRIVE"
            },
            {
                codigo: "3002002",
                tipoDespesaId: 244,
                descricao: "PARAF DE TORQUE DRIVE EQUINOXE"
            },
            {
                codigo: "3202018",
                tipoDespesaId: 244,
                descricao: "PARAF EQ.C/PRESSAO LCK4.5X18MM"
            },
            {
                codigo: "3202022",
                tipoDespesaId: 244,
                descricao: "PARAF EQ.C/PRESSAO LCK4.5X22MM"
            },
            {
                codigo: "3202026",
                tipoDespesaId: 244,
                descricao: "PARAF EQ.C/PRESSAO LCK4.5X26MM"
            },
            {
                codigo: "3202030",
                tipoDespesaId: 244,
                descricao: "PARAF EQ.C/PRESSAO LCK4.5X30MM"
            },
            {
                codigo: "3202034",
                tipoDespesaId: 244,
                descricao: "PARAF EQ.C/PRESSAO LCK4.5X34MM"
            },
            {
                codigo: "3202038",
                tipoDespesaId: 244,
                descricao: "PARAF EQ.C/PRESSAO LCK4.5X38MM"
            },
            {
                codigo: "3202042",
                tipoDespesaId: 244,
                descricao: "PARAF EQ.C/PRESSAO LCK4.5X42MM"
            },
            {
                codigo: "3202000",
                tipoDespesaId: 244,
                descricao: "PARAF EQUINOXE REVERSO TORQUE"
            },
            {
                codigo: "3201505",
                tipoDespesaId: 244,
                descricao: "PARAF EQUINOXE TRAVAMENTO MCT"
            },
            {
                codigo: "2000-000",
                tipoDespesaId: 244,
                descricao: "PERF PNEUMATICO CANUL MOD.2000"
            },
            {
                codigo: "3150740",
                tipoDespesaId: 244,
                descricao: "PINO DE FIXACAO EQUINOXE"
            },
            {
                codigo: "3150730",
                tipoDespesaId: 244,
                descricao: "PINO FIXACAO CENTRAL EQUINOXE"
            },
            {
                codigo: "3152740",
                tipoDespesaId: 244,
                descricao: "PINO FIXADOR G.BR.PERIFERICA PEG"
            },
            {
                codigo: "3201005",
                tipoDespesaId: 244,
                descricao: "PL ADAP.A UMERAL REVERSO +5"
            },
            {
                codigo: "3201501",
                tipoDespesaId: 244,
                descricao: "PL EQUINOXE GLENOIDAL REVERSO"
            },
            {
                codigo: "3201504",
                tipoDespesaId: 244,
                descricao: "PL GLENOI AUM.POST.DIR.8 GRAUS OMBRO REV."
            },
            {
                codigo: "3201503",
                tipoDespesaId: 244,
                descricao: "PL GLENOI AUM.POST.ESQ.8 GRAUS OMBRO REV."
            },
            {
                codigo: "3201502",
                tipoDespesaId: 244,
                descricao: "PL GLENOI AUMENTO SUPERIOR 10"
            },
            {
                codigo: "3001015",
                tipoDespesaId: 244,
                descricao: "PL REPLICADOR ANATOMICO OFFSET 1.5"
            },
            {
                codigo: "3001045",
                tipoDespesaId: 244,
                descricao: "PL.REP.ANATOMICO OFFSET EQ.4.5MM"
            },
            {
                codigo: "3203803",
                tipoDespesaId: 244,
                descricao: "POLI  EQ.UM. REVERSO 38MM+2.5"
            },
            {
                codigo: "3204203",
                tipoDespesaId: 244,
                descricao: "POLI  EQ.UM. REVERSO 42MM+2.5"
            },
            {
                codigo: "3203810",
                tipoDespesaId: 244,
                descricao: "POLI  EQ.UM.REV.CONS. 38MM+0"
            },
            {
                codigo: "3203813",
                tipoDespesaId: 244,
                descricao: "POLI  EQ.UM.REV.CONS. 38MM+2.5"
            },
            {
                codigo: "3204210",
                tipoDespesaId: 244,
                descricao: "POLI  EQ.UM.REV.CONS. 42MM+0"
            },
            {
                codigo: "3204213",
                tipoDespesaId: 244,
                descricao: "POLI  EQ.UM.REV.CONS. 42MM+2.5"
            },
            {
                codigo: "3204200",
                tipoDespesaId: 244,
                descricao: "POLI  EQX UM.REVERSO 42MM+0"
            },
            {
                codigo: "3203800",
                tipoDespesaId: 244,
                descricao: "POLI LINER EQX UM.REVERSO 38MM"
            },
            {
                codigo: "3150906",
                tipoDespesaId: 244,
                descricao: "PRESSURIZADOR TPEGS EQUINOXE"
            },
            {
                codigo: "3150905",
                tipoDespesaId: 244,
                descricao: "PRESSURIZADOR TQUILHA EQ.M./GD"
            },
            {
                codigo: "3150904",
                tipoDespesaId: 244,
                descricao: "PRESSURIZADOR TQUILHA EQ.PEQ"
            },
            {
                codigo: "3010720",
                tipoDespesaId: 244,
                descricao: "PROTETOR DE HASTE EQUINOXE"
            },
            {
                codigo: "3010760",
                tipoDespesaId: 244,
                descricao: "PROTETOR HASTE EQUINOXE PEQ(A)"
            },
            {
                codigo: "3151204",
                tipoDespesaId: 244,
                descricao: "PROVA DE CAVILHA,LONGA"
            },
            {
                codigo: "3151203",
                tipoDespesaId: 244,
                descricao: "PROVA DE CAVILHA,MEDIA"
            },
            {
                codigo: "3151202",
                tipoDespesaId: 244,
                descricao: "PROVA DE CAVILHA,PEQUENA"
            },
            {
                codigo: "3210138",
                tipoDespesaId: 244,
                descricao: "PROVA GLENOSFERA 38MM"
            },
            {
                codigo: "3150104",
                tipoDespesaId: 244,
                descricao: "PRV GLENOIDE TQUILHA EQ.G.(A)"
            },
            {
                codigo: "3150103",
                tipoDespesaId: 244,
                descricao: "PRV GLENOIDE TQUILHA EQ.M.(A)"
            },
            {
                codigo: "3150102",
                tipoDespesaId: 244,
                descricao: "PRV GLENOIDE TQUILHA EQ.PEQ(A)"
            },
            {
                codigo: "3211011",
                tipoDespesaId: 244,
                descricao: "PRV PL ADAPT.UM.+10,PARAF.CAPT."
            },
            {
                codigo: "3210738",
                tipoDespesaId: 244,
                descricao: "PT DO IMPACTOR LINER UM. 38MM"
            },
            {
                codigo: "3210742",
                tipoDespesaId: 244,
                descricao: "PT EQ.DO IMPACTOR PRV UM. 42MM"
            },
            {
                codigo: "3170104",
                tipoDespesaId: 244,
                descricao: "RETRATOR AFAST. BIFURCADO EQX"
            },
            {
                codigo: "3170102",
                tipoDespesaId: 244,
                descricao: "RETRATOR AFAST. CABECA UM. EQ."
            },
            {
                codigo: "3170106",
                tipoDespesaId: 244,
                descricao: "RETRATOR AFAST. THOHMANN EQX"
            },
            {
                codigo: "3170108",
                tipoDespesaId: 244,
                descricao: "RETRATOR AFAST. WOLFE EQUINOXE"
            },
            {
                codigo: "3170105",
                tipoDespesaId: 244,
                descricao: "RETRATOR AFAST.GLENOI EQUINOXE"
            },
            {
                codigo: "3170103",
                tipoDespesaId: 244,
                descricao: "RETRATOR AFAST.RETO EQUINOXE"
            },
            {
                codigo: "3210710",
                tipoDespesaId: 244,
                descricao: "SERRA EQ.TCORING REAMER BASE GLEN"
            },
            {
                codigo: "212",
                tipoDespesaId: 244,
                descricao: "SERRA OSCIL.PNEUM"
            },
            {
                codigo: "0234251-090",
                tipoDespesaId: 244,
                descricao: "SUTURFIX SUT CIR.TRANCADA 2AGUS"
            },
            {
                codigo: "10-301-03-0001",
                tipoDespesaId: 244,
                descricao: "TAMPA METALICA"
            },
            {
                codigo: "3211000",
                tipoDespesaId: 244,
                descricao: "TESTE DE BASE EQ.UMERAL + 0"
            },
            {
                codigo: "3211005",
                tipoDespesaId: 244,
                descricao: "TESTE DE BASE EQ.UMERAL + 5"
            },
            {
                codigo: "3210142",
                tipoDespesaId: 244,
                descricao: "TESTE DE GLENOSFERA EQ. 42MM"
            },
            {
                codigo: "3210111",
                tipoDespesaId: 244,
                descricao: "TESTE DE HASTE EQ.UMERAL 11MM"
            },
            {
                codigo: "3210113",
                tipoDespesaId: 244,
                descricao: "TESTE DE HASTE EQ.UMERAL 13MM"
            },
            {
                codigo: "3210115",
                tipoDespesaId: 244,
                descricao: "TESTE DE HASTE EQ.UMERAL 15MM"
            },
            {
                codigo: "3210117",
                tipoDespesaId: 244,
                descricao: "TESTE DE HASTE EQ.UMERAL 17MM"
            },
            {
                codigo: "3210107",
                tipoDespesaId: 244,
                descricao: "TESTE DE HASTE EQ.UMERAL 7MM"
            },
            {
                codigo: "3210109",
                tipoDespesaId: 244,
                descricao: "TESTE DE HASTE EQ.UMERAL 9MM"
            },
            {
                codigo: "3210308",
                tipoDespesaId: 244,
                descricao: "TESTE HASTE UM.REVISAO 8X215MM"
            },
            {
                codigo: "3210208",
                tipoDespesaId: 244,
                descricao: "TESTE HASTE UMERAL REVISAO MCT"
            },
        ]
    },
    {
        cnpj: "29349061000140",
        razao: "QUIRON PHARMA LTDA",
        itens: [
            {
                codigo: "00000688",
                tipoDespesaId: 58,
                descricao: "ACIDOS GRAXOS ESSENCIAIS VIT. A,E LOCAO 100ML  - DERMABEN MAYBEN"
            },
            {
                codigo: "00000331",
                tipoDespesaId: 235,
                descricao: "ALBUMINA HUMANA 20% SOL INJ IV (1) FA 50ML - GRIFOLS ALBUMINA HUMANA"
            },
            {
                codigo: "00000522",
                tipoDespesaId: 57,
                descricao: "CEFAZOLINA SODICA 1G PO INJ IM/IV (20) FA - ARISTON FAZOLON"
            },
            {
                codigo: "00000679",
                tipoDespesaId: 57,
                descricao: "COMPLEXO B SOL  INJ IM/IV (100) AMP 2ML - HYPOFARMA HYPLEX B"
            },
            {
                codigo: "00000591",
                tipoDespesaId: 57,
                descricao: "DIPIRONA MONOIDRATADA IM/IV 500MG/ML (100) AMP 2ML - SANTISA  GENERICO"
            },
            {
                codigo: "00000669",
                tipoDespesaId: 57,
                descricao: "ETOMIDATO 2 MG/ML (C1) SOL. INJ IV (5) AMP 10ML - BLAU GENERICO"
            },
            {
                codigo: "00000695",
                tipoDespesaId: 57,
                descricao: "FUROSEMIDA 10MG/ML SOL INJ (100) 2ML HYPOFARMA GENERICO"
            },
            {
                codigo: "00000656",
                tipoDespesaId: 57,
                descricao: "HIDROXIDO FERRICO SACARATO 20MG/ML INJ (50) AMP 5ML - BLAU FERROPUR"
            },
            {
                codigo: "00000646",
                tipoDespesaId: 57,
                descricao: "MANITOL 20% IV (1) FA 250ML-JP"
            },
            {
                codigo: "00000562",
                tipoDespesaId: 57,
                descricao: "METILPREDNISOLONA SUCC SOD 125MG PO IM/IV (25) FA+DL 2ML BLAU GENERICO"
            },
            {
                codigo: "00000642",
                tipoDespesaId: 57,
                descricao: "METRONIDAZOL 5MG/ML SOL INJ IV (1) BO 100ML -JP GENERICO"
            },
        ]
    },
    {
        cnpj: "31378288000409",
        razao: "MEDICAMENTAL HOSPITALAR LTDA",
        itens: [
            {
                codigo: "26921",
                tipoDespesaId: 57,
                descricao: "AMICACINA 250MG/ML SOL INJ C/50 AMP 2ML/TEUTO/AM"
            },
            {
                codigo: "28644",
                tipoDespesaId: 57,
                descricao: "BERIPLAST P PO LIOF 2 FR + 2 DIL 1ML/CSL BEHRING"
            },
            {
                codigo: "29436",
                tipoDespesaId: 57,
                descricao: "BUPIVACAINA PESADA 05+80MG/ML SOL INJ IT C/100 AMP 4ML/HIPOLABOR"
            },
            {
                codigo: "38376",
                tipoDespesaId: 58,
                descricao: "CAIXA RETORNAVEL ECOBOX 12LT N39 STABLE TECH"
            },
            {
                codigo: "38389",
                tipoDespesaId: 58,
                descricao: "CURATIVO ALGINATO DE CALCIO E PRATA 10CMX10CM 10UN/MISSNER"
            },
            {
                codigo: "38462",
                tipoDespesaId: 58,
                descricao: "FIXADOR DE TUBOS E SONDAS NASAL ADULTO PCT C/10 UN/POLAR FIX"
            },
            {
                codigo: "37667",
                tipoDespesaId: 57,
                descricao: "HEPTRIS 40MG/0,4ML INJ IV/SC C/10 SER + SIST SEG/MYLAN"
            },
            {
                codigo: "33811",
                tipoDespesaId: 58,
                descricao: "TUBO EXTENSOR LUER ROTATIVO 12FX 120CM/MEDSONDA"
            },
        ]
    },
    {
        cnpj: "32487278000121",
        razao: "METROLAB SOLUCOES EM ENGENHARIA CLINICA LTDA",
        itens: [
            {
                codigo: "PR-055",
                tipoDespesaId: 58,
                descricao: "Avental plumbifero adulto frente 0,50mmpb ombro 0,25mmpb"
            },
            {
                codigo: "005MON",
                tipoDespesaId: 58,
                descricao: "BRACADEIRA ADULTO PNI 1 VIA"
            },
            {
                codigo: "9797",
                tipoDespesaId: 58,
                descricao: "BRACADEIRA OBESO PNI 1 VIA"
            },
            {
                codigo: "10040036",
                tipoDespesaId: 58,
                descricao: "CAB DE ECG C/ TERMS INJETS COMPL 3 VIAS CONEC GARRA LIFEMED"
            },
            {
                codigo: "27849",
                tipoDespesaId: 58,
                descricao: "CABO DE ECG 5 VIAS PARA MOMITOR LIFEMED M10 /M12"
            },
            {
                codigo: "7898575247936",
                tipoDespesaId: 227,
                descricao: "CABO FORCA PLUGUE 2PT 10A 5 MT DE COMP."
            },
            {
                codigo: "VENT2323",
                tipoDespesaId: 58,
                descricao: "Conector reto 15M x 15F/22M Com porta de entrada de O223"
            },
            {
                codigo: "43589",
                tipoDespesaId: 227,
                descricao: "DISCO RIGIDO PARA VIGILANCIA WD PURPLE 6TB CACHE 256MB MODELO WD64PURZ"
            },
            {
                codigo: "PR-029",
                tipoDespesaId: 237,
                descricao: "Porta avental de parede c/ apoio cilindro em aco 1020"
            },
            {
                codigo: "AC-033",
                tipoDespesaId: 58,
                descricao: "Protetor de tiroide Plumbifero adulto"
            },
            {
                codigo: "10270050",
                tipoDespesaId: 58,
                descricao: "SENSOR DE TEMPERATURA ADULTO"
            },
            {
                codigo: "550-430",
                tipoDespesaId: 108,
                descricao: "PLD1-3 - PLUG MACHO PRETO 10A P/ENERGIA 3 PINOS"
            },
        ]
    },
    {
        cnpj: "34551834000107",
        razao: "INMED HOSPITALAR EIRELI",
        itens: [
            {
                codigo: "5357",
                tipoDespesaId: 58,
                descricao: "AGULHA INTRAOSSEA BIG PEDIATRICO"
            },
        ]
    },
    {
        cnpj: "36979350000199",
        razao: "BF DE ANDRADE HOSPITALAR",
        itens: [
            {
                codigo: "0003900",
                tipoDespesaId: 58,
                descricao: "TIRAS REAG. GLICOSE ONCALL PLUS II.C/50"
            },
        ]
    },
    {
        cnpj: "37821276000140",
        razao: "HOSPMED COMERCIO DE PRODUTOS HOSPITALARES LTDA",
        itens: [
            {
                codigo: "1157",
                tipoDespesaId: 227,
                descricao: "HEADSET PTELEFONE RJ9 PRETO CHS 40 INTELBRAS CX 1 UN"
            },
        ]
    },
    {
        cnpj: "37824218000170",
        razao: "LUNAX COMERCIO DE PRODUTOS EM SAUDE LTDA",
        itens: [
            {
                codigo: "28",
                tipoDespesaId: 58,
                descricao: "00137-AVENTAL CAPOTE TNT BCO GR 50 C/10 (1,40 X 1,00)"
            },
            {
                codigo: "78",
                tipoDespesaId: 58,
                descricao: "BISTURI DESCARTAVEL COM DISPO SEGURANCA LAMINA INOX 22 C/10 - LOTE: SG240501C VAL : 05/2029"
            },
            {
                codigo: "25",
                tipoDespesaId: 58,
                descricao: "BISTURI DESCARTAVEL COM DISPOSITIVO SEGURANCA LAMINA INOX 15 C/10 - LOTE : SG240101 - VAL : 28/02/2029"
            },
            {
                codigo: "56",
                tipoDespesaId: 58,
                descricao: "COLCHAO HOSPITALAR D-33 1,88X0,78X12CM - REAL"
            },
            {
                codigo: "60",
                tipoDespesaId: 58,
                descricao: "CONJUNTO DE ANESTESIA EM LATEX BALAO 0,5 L INFANTIL COM TRAQUEIA - LOTE 36"
            },
            {
                codigo: "59",
                tipoDespesaId: 58,
                descricao: "CONJUNTO DE ANESTESIA EM LATEX BALAO 2,0 L ADULTO COM TRAQUEIA - LOTE 33 4 PECAS E LOTE 35 6 PECAS"
            },
            {
                codigo: "CFOP6108",
                tipoDespesaId: 58,
                descricao: "PIELSANA SACHE GAZE DE RAYON 7,5X7,5CM C/24 LOTE : 058/25"
            },
            {
                codigo: "CFOP6102",
                tipoDespesaId: 58,
                descricao: "PIELSANA SACHE GAZE DE RAYON 7,5X7,5CM C/24 LOTE : 058/25"
            },
            {
                codigo: "55",
                tipoDespesaId: 58,
                descricao: "TRAVESSEIRO HOSPITALAR IMP. 65X45X15CM - REAL"
            },
        ]
    },
    {
        cnpj: "37844479000233",
        razao: "BIOLINE FIOS CIRURGICOS LTDA",
        itens: [
            {
                codigo: "ABS1MR40R",
                tipoDespesaId: 58,
                descricao: "ABS PGA 1 AG1/2 CIL4,0-70CM"
            },
            {
                codigo: "ABS1MR48ER",
                tipoDespesaId: 58,
                descricao: "ABS PGA 1 AG1/2 CIL4,8-90CM"
            },
            {
                codigo: "AA20SA45",
                tipoDespesaId: 58,
                descricao: "ALGODAO 2-0  S/AG 15X45CM"
            },
            {
                codigo: "PDO1MR65L",
                tipoDespesaId: 57,
                descricao: "BIOPDO 1 AG1/2 CIL6,5-120CM-L"
            },
            {
                codigo: "NL20CT19S3",
                tipoDespesaId: 58,
                descricao: "NYLON 2-0 AG3/8 COR1,9-45CM"
            },
            {
                codigo: "NL20CT30S3",
                tipoDespesaId: 58,
                descricao: "NYLON 2-0 AG3/8 COR3,0-45CM"
            },
            {
                codigo: "NL20CT35S3",
                tipoDespesaId: 58,
                descricao: "NYLON 2-0 AG3/8 COR3,5-45CM"
            },
            {
                codigo: "NL20CT40S3",
                tipoDespesaId: 58,
                descricao: "NYLON 2-0 AG3/8 COR4,0-45CM"
            },
            {
                codigo: "NL30CT24S3",
                tipoDespesaId: 58,
                descricao: "NYLON 3-0 AG3/8 COR2,4-45CM"
            },
            {
                codigo: "NL40CT30S3",
                tipoDespesaId: 58,
                descricao: "NYLON 4-0 AG3/8 COR3,0-45CM"
            },
            {
                codigo: "PGCL30MR17",
                tipoDespesaId: 58,
                descricao: "PGCL-25 3-0 AG1/2 CIL1,7-70CM"
            },
            {
                codigo: "PGLA0MR26G",
                tipoDespesaId: 58,
                descricao: "PGLA-910 0 AG1/2 CIL2,6-70CM"
            },
            {
                codigo: "PGLA1MR40R",
                tipoDespesaId: 58,
                descricao: "PGLA-910 1 AG1/2 CIL4,0-70CM"
            },
            {
                codigo: "PGLA20MR30G",
                tipoDespesaId: 58,
                descricao: "PGLA-910 2-0 AG1/2 CIL3,0-70CM"
            },
            {
                codigo: "PGLA30MR30G",
                tipoDespesaId: 58,
                descricao: "PGLA-910 3-0 AG1/2 CIL3,0-70CM"
            },
            {
                codigo: "PGLA30MR37R",
                tipoDespesaId: 58,
                descricao: "PGLA-910 3-0 AG1/2 CIL3,7-70CM"
            },
            {
                codigo: "PEV5MTC48O",
                tipoDespesaId: 58,
                descricao: "POLIEST 5 AG 1/2 TC 4,8-75CM"
            },
            {
                codigo: "PL602CR13AP",
                tipoDespesaId: 58,
                descricao: "POLIPRO 6-0 2AG3/8 CIL1,3-75CM"
            },
        ]
    },
    {
        cnpj: "41740140000183",
        razao: "EFIKAS DISTRIBUIDORA PAP. E DESC. LTDA",
        itens: [
            {
                codigo: "220398",
                tipoDespesaId: 237,
                descricao: "BATERIA 9 VOLTS ALCALINA ELGIN"
            },
            {
                codigo: "280117",
                tipoDespesaId: 58,
                descricao: "BOBINA PAPEL 80X20 PARA ECG"
            },
            {
                codigo: "157047",
                tipoDespesaId: 237,
                descricao: "BOBINA TERMOSENSIVEL 80X40 AMARELA"
            },
            {
                codigo: "150463",
                tipoDespesaId: 228,
                descricao: "CLIPS 6/0 GALVANIZADO C/220UND"
            },
            {
                codigo: "110111",
                tipoDespesaId: 237,
                descricao: "COPO DESC. PLASTICO 180ML ABNT (CX C/2500UND)"
            },
            {
                codigo: "150388",
                tipoDespesaId: 228,
                descricao: "ELASTICO TIPO LATEX N.18 C/100GRS REDBOR"
            },
            {
                codigo: "230505",
                tipoDespesaId: 228,
                descricao: "ENVELOPE SACO KRAFT NAT. 240X340"
            },
            {
                codigo: "150192",
                tipoDespesaId: 228,
                descricao: "ESTILETE LARGO C/TRAVA COMUM"
            },
            {
                codigo: "230122",
                tipoDespesaId: 228,
                descricao: "ETIQUETA ROLO 105X35MM C/30MTS BRANCA"
            },
            {
                codigo: "230705",
                tipoDespesaId: 228,
                descricao: "ETIQUETA TP-12 C/210UND AMARELA CLAMAR"
            },
            {
                codigo: "230708",
                tipoDespesaId: 228,
                descricao: "ETIQUETA TP-12 C/210UND AZUL CLAMAR"
            },
            {
                codigo: "230709",
                tipoDespesaId: 228,
                descricao: "ETIQUETA TP-12 C/210UND LARANJA CLAMAR"
            },
            {
                codigo: "230706",
                tipoDespesaId: 228,
                descricao: "ETIQUETA TP-12 C/210UND VERMELHA CLAMAR"
            },
            {
                codigo: "230165",
                tipoDespesaId: 228,
                descricao: "ETIQUETA TP-12 C/4000 AMARELA PIMACO"
            },
            {
                codigo: "230152",
                tipoDespesaId: 228,
                descricao: "ETIQUETA TP-12 C/4000 AZUL PIMACO"
            },
            {
                codigo: "150659",
                tipoDespesaId: 228,
                descricao: "EXTRATOR GRAMPO TIPO ESPATULA CARBRINK"
            },
            {
                codigo: "156060",
                tipoDespesaId: 237,
                descricao: "FITA DUPLA FACE FIXA FORTE 19MMX2M ADELBRAS"
            },
            {
                codigo: "158366",
                tipoDespesaId: 237,
                descricao: "FITA EMP. PP 45X100 CRISTAL"
            },
            {
                codigo: "160108",
                tipoDespesaId: 237,
                descricao: "LACRE P/MALOTE 16CM NUMERADO C/100 AZUL"
            },
            {
                codigo: "250133",
                tipoDespesaId: 228,
                descricao: "LIVRO ATA S/MARGEM C/100FLS CAPA DURA"
            },
            {
                codigo: "158257",
                tipoDespesaId: 228,
                descricao: "MARCA TEXTO MASTERPRINT AMARELO"
            },
            {
                codigo: "130643",
                tipoDespesaId: 237,
                descricao: "PANO MULTI USO TIPO PERFEX BCO 28X300MTS"
            },
            {
                codigo: "310022",
                tipoDespesaId: 228,
                descricao: "PAPEL A4 75G 210X297 C/500FLS REPORT BCO"
            },
            {
                codigo: "158354",
                tipoDespesaId: 237,
                descricao: "PASTA EM L A4 C/10 CRISTAL"
            },
            {
                codigo: "230106",
                tipoDespesaId: 58,
                descricao: "PULSEIRA DE IDENTIFICACAO TERMICA ADULTO ROLO C/150UND"
            },
            {
                codigo: "201361",
                tipoDespesaId: 228,
                descricao: "REGUA PLASTICA 30CM CRISTAL"
            },
            {
                codigo: "150501",
                tipoDespesaId: 237,
                descricao: "RIBBON DE CERA PARA ETIQUETAS 110X360"
            },
            {
                codigo: "157465",
                tipoDespesaId: 228,
                descricao: "TESOURA MULTI USO 19CM C/PONTA JOCAR"
            },
            {
                codigo: "157961",
                tipoDespesaId: 228,
                descricao: "TINTA P/CARIMBO PRINTY PRETA CARBRINK 40ML"
            },
        ]
    },
    {
        cnpj: "43272807000196",
        razao: "OONZE MEDICAL TECNOLOGIA EM MEDICINA LTDA",
        itens: [
            {
                codigo: "CT300",
                tipoDespesaId: 58,
                descricao: "CLIPE HEMOSTATICO EM TITANIO CT300 MEDIO/GRANDE CARTUCHO COM 6"
            },
            {
                codigo: "300-DLA13-B",
                tipoDespesaId: 58,
                descricao: "LA13-B TROCATER DESCARTAVEL COM LAMINA 12,5MM X 100MM"
            },
            {
                codigo: "ATRKFS1210",
                tipoDespesaId: 58,
                descricao: "TROCARTE KF 12MMX10CM C/PONTA ESPIRAL- UNIMICRO MEDICAL SYST EMS"
            },
            {
                codigo: "CN-TCI-12S",
                tipoDespesaId: 58,
                descricao: "TROCATER LINEAR ENDOSCOPICO 12MM ENDOMAIS"
            },
        ]
    },
    {
        cnpj: "43420629000101",
        razao: "Comercio Importacao Erecta ltda",
        itens: [
            {
                codigo: "355.56.M",
                tipoDespesaId: 244,
                descricao: "A-LOCK MODULAR MULTIFURO-COMPONENTE ACETABULAR NAO CIMENTADO"
            },
            {
                codigo: "355.58.M",
                tipoDespesaId: 244,
                descricao: "A-LOCK MODULAR MULTIFURO-COMPONENTE ACETABULAR NAO CIMENTADO"
            },
            {
                codigo: "355.60.M",
                tipoDespesaId: 244,
                descricao: "A-LOCK MODULAR MULTIFURO-COMPONENTE ACETABULAR NAO CIMENTADO"
            },
            {
                codigo: "355.62.M",
                tipoDespesaId: 244,
                descricao: "A-LOCK MODULAR MULTIFURO-COMPONENTE ACETABULAR NAO CIMENTADO"
            },
            {
                codigo: "355.64.M",
                tipoDespesaId: 244,
                descricao: "A-LOCK MODULAR MULTIFURO-COMPONENTE ACETABULAR NAO CIMENTADO"
            },
            {
                codigo: "355.66.M",
                tipoDespesaId: 244,
                descricao: "A-LOCK MODULAR MULTIFURO-COMPONENTE ACETABULAR NAO CIMENTADO"
            },
            {
                codigo: "355.68.M",
                tipoDespesaId: 244,
                descricao: "A-LOCK MODULAR MULTIFURO-COMPONENTE ACETABULAR NAO CIMENTADO"
            },
            {
                codigo: "355.70.M",
                tipoDespesaId: 244,
                descricao: "A-LOCK MODULAR MULTIFURO-COMPONENTE ACETABULAR NAO CIMENTADO"
            },
            {
                codigo: "1031",
                tipoDespesaId: 244,
                descricao: "CABO DE CERCLAGEM COM PRESILHA"
            },
            {
                codigo: "IN9144",
                tipoDespesaId: 244,
                descricao: "CAMPO CIRURGICO 91X44 CM PHARMAPLAST"
            },
            {
                codigo: "347.A.40",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR METALICO DE FIXACAO BIOLOGICA PRIMARIA OU REVISAO"
            },
            {
                codigo: "347.A.42",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR METALICO DE FIXACAO BIOLOGICA PRIMARIA OU REVISAO"
            },
            {
                codigo: "347.A.44",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR METALICO DE FIXACAO BIOLOGICA PRIMARIA OU REVISAO"
            },
            {
                codigo: "347.A.46",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR METALICO DE FIXACAO BIOLOGICA PRIMARIA OU REVISAO"
            },
            {
                codigo: "347.A.48",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR METALICO DE FIXACAO BIOLOGICA PRIMARIA OU REVISAO"
            },
            {
                codigo: "347.A.50",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR METALICO DE FIXACAO BIOLOGICA PRIMARIA OU REVISAO"
            },
            {
                codigo: "347.A.52",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR METALICO DE FIXACAO BIOLOGICA PRIMARIA OU REVISAO"
            },
            {
                codigo: "347.A.54",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR METALICO DE FIXACAO BIOLOGICA PRIMARIA OU REVISAO"
            },
            {
                codigo: "143.B.40.22",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.44.22",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.48.28",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.52.28",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.56.28",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.60.28",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.64.28",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.68.28",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.52.32",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.56.32",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.60.32",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.64.32",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "143.B.68.32",
                tipoDespesaId: 244,
                descricao: "COMPONENTE ACETABULAR POLIETILENO P/COMPONENTE METALICO PRIMARIO REVISAO FIXACAO BIOLOGICA"
            },
            {
                codigo: "1234.S.32.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DE QUADRIL"
            },
            {
                codigo: "1234.M.22.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DO QUADRIL"
            },
            {
                codigo: "1234.L.22.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DO QUADRIL"
            },
            {
                codigo: "1234.S.28.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DO QUADRIL"
            },
            {
                codigo: "1234.M.28.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DO QUADRIL"
            },
            {
                codigo: "1234.L.28.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DO QUADRIL"
            },
            {
                codigo: "1234.XL.28.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DO QUADRIL"
            },
            {
                codigo: "1234.M.32.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DO QUADRIL"
            },
            {
                codigo: "1234.L.32.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DO QUADRIL"
            },
            {
                codigo: "1234.XL.32.X",
                tipoDespesaId: 244,
                descricao: "COMPONENTE CEFALICO PARA ARTROPLASTIA TOTAL DO QUADRIL"
            },
            {
                codigo: "356.14.225",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.14.305",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.15.225",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.15.265",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.15.305",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.16.225",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.16.265",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.16.305",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.17.225",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.17.305",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.19.225",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.19.265",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.19.305",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.21.225",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.21.265",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "356.21.305",
                tipoDespesaId: 244,
                descricao: "COMPONENTE FEMORAL MODULAR DE REVISAO NAO CIMENTADA PARA REVESTIMENTO TOTAL"
            },
            {
                codigo: "VM030201",
                tipoDespesaId: 244,
                descricao: "FILTRO ASPIRADOR VIA ASPIRATE MEDIUM"
            },
            {
                codigo: "1001-E001-011",
                tipoDespesaId: 244,
                descricao: "LAMINA DE SERRA ESTERIL 90 X 25 X 1.2"
            },
            {
                codigo: "2500D-DP-ST01Z",
                tipoDespesaId: 244,
                descricao: "OSRON PULSE LAVAGE SYSTEM"
            },
            {
                codigo: "152.6.15",
                tipoDespesaId: 244,
                descricao: "PARAFUSO PARA COMPONENTE ACETABULAR"
            },
            {
                codigo: "152.6.20",
                tipoDespesaId: 244,
                descricao: "PARAFUSO PARA COMPONENTE ACETABULAR"
            },
            {
                codigo: "152.6.25",
                tipoDespesaId: 244,
                descricao: "PARAFUSO PARA COMPONENTE ACETABULAR"
            },
            {
                codigo: "152.6.30",
                tipoDespesaId: 244,
                descricao: "PARAFUSO PARA COMPONENTE ACETABULAR"
            },
            {
                codigo: "152.6.35",
                tipoDespesaId: 244,
                descricao: "PARAFUSO PARA COMPONENTE ACETABULAR"
            },
            {
                codigo: "152.6.40",
                tipoDespesaId: 244,
                descricao: "PARAFUSO PARA COMPONENTE ACETABULAR"
            },
        ]
    },
    {
        cnpj: "46080624000167",
        razao: "DIMED COMERCIO HOSPITALAR E REPRESENTACAO LTDA",
        itens: [
            {
                codigo: "0002428",
                tipoDespesaId: 58,
                descricao: "COLCHAO 1,88X78X12 D33"
            },
        ]
    },
    {
        cnpj: "47631568000174",
        razao: "I2M Store LTDA",
        itens: [
            {
                codigo: "304010001",
                tipoDespesaId: 228,
                descricao: "MP-300 GRAMPEADOR DE METAL PEQUENO 11,5CM ATE 20 FOLHAS MASTERPRINT"
            },
            {
                codigo: "329010001",
                tipoDespesaId: 228,
                descricao: "MP-PLASTIFICACAO A4 100 FOLHAS 125MICRAS 0,05 ESPESSURA MASTERPRINT"
            },
            {
                codigo: "CFOP5102",
                tipoDespesaId: 237,
                descricao: "PILHA ALCALINA PALITO AAA ELGIN"
            },
            {
                codigo: "120",
                tipoDespesaId: 237,
                descricao: "PRANCHETA A4 PEGADOR EM ACO CRISTAL ACRINIL"
            },
            {
                codigo: "1088",
                tipoDespesaId: 237,
                descricao: "ROLO MULTIUSO 28X300M BRANCO -LOTE:ITLL799 VAL.01/06/2029 INOVEN"
            },
        ]
    },
    {
        cnpj: "48791685000168",
        razao: "C.B.S. MEDICO CIENTIFICA LTDA",
        itens: [
            {
                codigo: "000462",
                tipoDespesaId: 58,
                descricao: "ABAIXADOR LINGUA ESTILO C/100                                LOTE: 24624A771 DT VAL: 30/09/27"
            },
            {
                codigo: "000067",
                tipoDespesaId: 58,
                descricao: "BANDAGEM ADESIVA ELASTICA TENSOPLAST 7,5 X 4,5 BSN           LOTE: 408 DT VAL: 31/01/28"
            },
            {
                codigo: "001699",
                tipoDespesaId: 58,
                descricao: "BOLSA COLO DRENAVEL OPACA ACTIVE LIFE 19/64MM CONVATEC (10)  LOTE: 4H05311 DT VAL: 30/08/29"
            },
            {
                codigo: "007061",
                tipoDespesaId: 58,
                descricao: "CANULA DE GUEDEL N 4  NAO ESTERIL VERMELHA 10,0CM PROTEC     LOTE: 114657001 DT VAL: 02/05/00"
            },
            {
                codigo: "003618",
                tipoDespesaId: 58,
                descricao: "CANULA TRAQUEOSTOMIA  8,0 C/BALAO CPL                        LOTE: 81158 DT VAL: 01/03/28"
            },
            {
                codigo: "002267",
                tipoDespesaId: 58,
                descricao: "CAPA P/ LAPAROSCOPIO 13,0X250CM SANFONADA PANIAGUA           LOTE: SSJ240617 DT VAL: 30/06/27"
            },
            {
                codigo: "003065",
                tipoDespesaId: 58,
                descricao: "CAPA P/COLCHAO ANTI-ESCARA C/ELASTICO TAYLOR                 LOTE: TB19525 DT VAL: 19/05/28"
            },
            {
                codigo: "001506",
                tipoDespesaId: 58,
                descricao: "CLIP P/BOLSA SUR-FIT ACTIVE LIFE CONVATEC (10)               LOTE: 4H04140 DT VAL: 01/08/29"
            },
            {
                codigo: "011059",
                tipoDespesaId: 58,
                descricao: "COLETOR PERFURO CORTANTE 07L AMARELO ECO FLEXPELL (20)       LOTE: C2210231C DT VAL: 30/01/30"
            },
            {
                codigo: "012467",
                tipoDespesaId: 58,
                descricao: "COMPRESSA DE GAZE EST 7,5X7,5 13F RX CLARA PR 15X30AMED C/10 LOTE: C31-1 DT VAL: 29/07/29"
            },
            {
                codigo: "004932",
                tipoDespesaId: 58,
                descricao: "CUBA REDONDA 09X05CM 200ML ECONOX                            LOTE: 11444 DT VAL: 30/01/00"
            },
            {
                codigo: "002416",
                tipoDespesaId: 58,
                descricao: "CURATIVO BLOOD STOP BANDAGEM ANTISEPTICA ADULTO AMP (500)    LOTE: 19525 DT VAL: 23/05/28"
            },
            {
                codigo: "010496",
                tipoDespesaId: 58,
                descricao: "CURATIVO DE CARVAO ATIVADO C/ AG 10X10CM RECORTAVEL URGO(30) LOTE: 25012205 DT VAL: 22/01/27"
            },
            {
                codigo: "012536",
                tipoDespesaId: 58,
                descricao: "DISPOSITIVO P/TRANSFERENCIA SOLUCOES 2 PONTAS EST SEROFIX    LOTE: 253674/1 DT VAL: 30/05/28"
            },
            {
                codigo: "011394",
                tipoDespesaId: 58,
                descricao: "DOSADOR ORAL/ENTERAL 10ML MEDIX (80)                         LOTE: HYOS10-241225 DT VAL: 30/11/29"
            },
            {
                codigo: "011395",
                tipoDespesaId: 58,
                descricao: "DOSADOR ORAL/ENTERAL 20ML MEDIX (40)                         LOTE: HYOS20-241225 DT VAL: 30/11/29"
            },
            {
                codigo: "012591",
                tipoDespesaId: 58,
                descricao: "ELETRODO ADULTO SF22 MEDIX (50)                              LOTE: 24DIX2307 DT VAL: 30/01/28"
            },
            {
                codigo: "012538",
                tipoDespesaId: 58,
                descricao: "EQUIPO P/ IRRIGACAO/ARTROSCOPIA 4V C/CON 2,5M ESTERIL SEROAR LOTE: 253408/1 DT VAL: 30/03/28"
            },
            {
                codigo: "012540",
                tipoDespesaId: 58,
                descricao: "EXTENSAO PARA ASPIRACAO 3M CRISTAL EST C/CONECT SEROFLEX     LOTE: 253617/1 DT VAL: 30/04/28"
            },
            {
                codigo: "008772",
                tipoDespesaId: 58,
                descricao: "FIXADOR DE CATETERES E SONDAS NASAIS HELPFIX (10)            LOTE: 15125 DT VAL: 30/10/26"
            },
            {
                codigo: "002212",
                tipoDespesaId: 58,
                descricao: "GEL PARA ECG  100G AZUL MULTIGEL                             LOTE: 122805 DT VAL: 30/05/27"
            },
            {
                codigo: "013116",
                tipoDespesaId: 58,
                descricao: "LENCINHO UMEDECIDO C/ALCOOL SWAB MEDIX (100)                 LOTE: 25010006 DT VAL: 30/12/27"
            },
            {
                codigo: "000584",
                tipoDespesaId: 58,
                descricao: "LUVA CIRURGICA SENSITEX 8,0 MUCAMBO 106                      LOTE: 2509 DT VAL: 14/03/28"
            },
            {
                codigo: "005391",
                tipoDespesaId: 58,
                descricao: "LUVA NITRILICA POWDER FREE AZUL G MEDIX C/100 (10)           LOTE: IN24021886 DT VAL: 30/01/30"
            },
            {
                codigo: "005390",
                tipoDespesaId: 58,
                descricao: "LUVA NITRILICA POWDER FREE AZUL M MEDIX C/100 (10)           LOTE: IN24019612 DT VAL: 30/12/29"
            },
            {
                codigo: "005389",
                tipoDespesaId: 58,
                descricao: "LUVA NITRILICA POWDER FREE AZUL P MEDIX C/100 (10)           LOTE: IN24013799 DT VAL: 30/10/29"
            },
            {
                codigo: "003680",
                tipoDespesaId: 58,
                descricao: "MASCARA  ALTA CONCENTRACAO INFANTIL PROTEC                   LOTE: 111387001 DT VAL: 30/01/00"
            },
            {
                codigo: "012746",
                tipoDespesaId: 58,
                descricao: "MASCARA PFF2 N95 S/VALVULA BRANCA UAL 500 N95 ALLIANCE       LOTE: L05 DT VAL: 30/05/28"
            },
            {
                codigo: "001076",
                tipoDespesaId: 58,
                descricao: "SERRA DE GIGLI STYLLE 50CM                                   LOTE: EF30425 DT VAL: 30/04/28"
            },
            {
                codigo: "002803",
                tipoDespesaId: 58,
                descricao: "SONDA ARAMADA PVC C/BALAO N 7,5 SOLIDOR                      LOTE: 38324051 DT VAL: 09/05/29"
            },
            {
                codigo: "001420",
                tipoDespesaId: 58,
                descricao: "SONDA ENDOTRAQUEAL PVC  C/BALAO  4,0 SOLIDOR                 LOTE: 28324111 DT VAL: 01/11/29"
            },
            {
                codigo: "011340",
                tipoDespesaId: 58,
                descricao: "SONDA ENDOTRAQUEAL PVC C/BALAO 4,0 MEDIX                     LOTE: 2487740C DT VAL: 28/02/30"
            },
            {
                codigo: "011347",
                tipoDespesaId: 58,
                descricao: "SONDA ENDOTRAQUEAL PVC C/BALAO 7,5 MEDIX                     LOTE: 2468075C DT VAL: 30/11/29"
            },
            {
                codigo: "011348",
                tipoDespesaId: 58,
                descricao: "SONDA ENDOTRAQUEAL PVC C/BALAO 8,0 MEDIX                     LOTE: 2482180C DT VAL: 30/12/29"
            },
            {
                codigo: "011369",
                tipoDespesaId: 58,
                descricao: "SONDA FOLEY 15-30ML 2 VIAS N 16 MEDIX                        LOTE: 24K05 DT VAL: 30/10/29"
            },
            {
                codigo: "011370",
                tipoDespesaId: 58,
                descricao: "SONDA FOLEY 15-30ML 2 VIAS N 18 MEDIX                        LOTE: 24K06 DT VAL: 30/10/29"
            },
            {
                codigo: "011371",
                tipoDespesaId: 58,
                descricao: "SONDA FOLEY 15-30ML 2 VIAS N 20 MEDIX                        LOTE: 24K07 DT VAL: 30/10/29"
            },
            {
                codigo: "011375",
                tipoDespesaId: 58,
                descricao: "SONDA FOLEY 30-50ML 3 VIAS N 18 MEDIX                        LOTE: 24561318 DT VAL: 30/10/29"
            },
            {
                codigo: "002726",
                tipoDespesaId: 58,
                descricao: "SONDA P/VARIZES ESOFAG BLACKMORE SENGSTAKEN PVC 21 BCI       LOTE: 0588123 DT VAL: 31/10/28"
            },
            {
                codigo: "005938",
                tipoDespesaId: 58,
                descricao: "SONDA RETAL N 06 MARK MED                                    LOTE: 22327 DT VAL: 31/08/28"
            },
            {
                codigo: "001221",
                tipoDespesaId: 58,
                descricao: "TELA DE POLIPROPILENO (MARLEX) 15,0X15,0CM WALTEX            LOTE: EA09525 DT VAL: 09/05/28"
            },
            {
                codigo: "006015",
                tipoDespesaId: 58,
                descricao: "TUBO EXTENSOR LUER LOCK N.08 120CM MARK MED                  LOTE: 23529 DT VAL: 31/05/29"
            },
        ]
    },
    {
        cnpj: "50108413000162",
        razao: "SEVENZ CIRURGICAL LTDA",
        itens: [
            {
                codigo: "CCI0006",
                tipoDespesaId: 58,
                descricao: "CAMPO CIRURGICO IODOFORADO ADESIVO 50X80 - L: 15C24 V: 27/03/26"
            },
            {
                codigo: "HCS0023",
                tipoDespesaId: 58,
                descricao: "HEMOSTATICO DE CELLULOSE SURGICEL 5.1X 7.6CM - REF: SOO-0203 - L: ORC0224001 V: 01/27"
            },
        ]
    },
    {
        cnpj: "50247071000161",
        razao: "MOGAMI IMP. E EXP. LTDA",
        itens: [
            {
                codigo: "TCR75",
                tipoDespesaId: 58,
                descricao: "CARGA 75MM P/GRAMPEADOR LINEAR CORTANTE TLC TECIDO NORMAL 1,5 MM AZUL"
            },
            {
                codigo: "TLC75",
                tipoDespesaId: 58,
                descricao: "GRAMPEADOR LINEAR CORTANTE 75MM COM CARGA TECIDO NORMAL AZUL"
            },
            {
                codigo: "CAD7050",
                tipoDespesaId: 58,
                descricao: "SILVERCEL CURATIVO ANTIMICROBIANO 5 X 5 CM ALGINATO COM PRATA NAO ADERENTE"
            },
        ]
    },
    {
        cnpj: "50252439000180",
        razao: "DAPH EMBALAGENS PLÁSTICA LTDA",
        itens: [
            {
                codigo: "4282",
                tipoDespesaId: 237,
                descricao: "BOBINA PICOTADA TRANSP 4,5X8 CM"
            },
            {
                codigo: "4778",
                tipoDespesaId: 237,
                descricao: "Saco Plástico 60 x 80 cm"
            },
        ]
    },
    {
        cnpj: "51943645000107",
        razao: "BIOMEDICAL EQUIPAMENTOS PRODUTOS MEDICO-CIRURGICOS LTDA",
        itens: [
            {
                codigo: "CH7D20BW",
                tipoDespesaId: 58,
                descricao: "CATETER PARA SUBCLAVIA DUPLO LUMEN PARA CVC, 7FR X 20CM BW   R.O.P.M: 0702040150"
            },
            {
                codigo: "I5V10B",
                tipoDespesaId: 58,
                descricao: "INTRODUTOR PARA CATETER, 5FR X 10CM (PERCUTANEO) R.O.P.M: 0702050342"
            },
        ]
    },
    {
        cnpj: "52170386000183",
        razao: "RECORD PINTURAS ELETROSTATICA LTDA",
        itens: [
            {
                codigo: "IND0401016",
                tipoDespesaId: 236,
                descricao: "FECHADURA PUXE CRUZETA"
            },
        ]
    },
    {
        cnpj: "55126981000100",
        razao: "GFE DO BRASIL LTDA",
        itens: [
            {
                codigo: "GF4207BS",
                tipoDespesaId: 58,
                descricao: "ESCOVA RETA PARA LIMPEZA DE ENDOSCOPIO."
            },
        ]
    },
    {
        cnpj: "57561115000172",
        razao: "ACE DISTRIBUIDORA LTDA",
        itens: [
            {
                codigo: "424",
                tipoDespesaId: 58,
                descricao: "AVENTAL DESC LAMINADO NAO CIRURGICO ML G50 PCT C 10"
            },
            {
                codigo: "458",
                tipoDespesaId: 58,
                descricao: "BABY EASY CPAP NASAL INFANTIL N. 2 - IMPACTO"
            },
            {
                codigo: "459",
                tipoDespesaId: 58,
                descricao: "BABY EASY CPAP NASAL INFANTIL N. 3 - IMPACTO"
            },
            {
                codigo: "460",
                tipoDespesaId: 58,
                descricao: "BABY EASY CPAP NASAL INFANTIL N. 4 - IMPACTO"
            },
            {
                codigo: "461",
                tipoDespesaId: 58,
                descricao: "BABY EASY CPAP NASAL INFANTIL N. 5 - IMPACTO"
            },
            {
                codigo: "575",
                tipoDespesaId: 58,
                descricao: "CANULA BIOPSIA ASP.MED.OSSEA 08GX15CM BCUT - VIGEO"
            },
            {
                codigo: "569",
                tipoDespesaId: 58,
                descricao: "CATETER PARA DRENAGEM PERC. - MULTICAT - 8.5FR X 30CM - KFF"
            },
            {
                codigo: "467",
                tipoDespesaId: 58,
                descricao: "CATETER VENOSO CENTRAL 4 FR X 13 CM DUPLO LUMEN INFANTIL CVC - KFF"
            },
            {
                codigo: "491",
                tipoDespesaId: 58,
                descricao: "CATETER VENOSO CENTRAL 5 FR X 13 CM 21G DUPLO LUMEN INFANTIL CVC - KFF"
            },
        ]
    },
    {
        cnpj: "58426628000133",
        razao: "Samtronic Industria e Comercio Ltda",
        itens: [
            {
                codigo: "PB006190",
                tipoDespesaId: 58,
                descricao: "BOMBA DE INFUSAO ICATU S 3ED PORTUGUES"
            },
            {
                codigo: "PB006370",
                tipoDespesaId: 58,
                descricao: "BOMBA DE INFUSAO ICATU S INTELLI 3ED PORTUGUES"
            },
        ]
    },
    {
        cnpj: "58426628000800",
        razao: "Samtronic Industria e Comercio Ltda.",
        itens: [
            {
                codigo: "EE703800",
                tipoDespesaId: 58,
                descricao: "EQUIPO ICASET EI 0323 0000 (ESTERILIZADO)"
            },
            {
                codigo: "EE700100",
                tipoDespesaId: 58,
                descricao: "EQUIPO ICASET EI 0421 0000 (ESTERILIZADO)"
            },
            {
                codigo: "EE700200",
                tipoDespesaId: 58,
                descricao: "EQUIPO ICASET EI 0422 0000 (ESTERILIZADO)"
            },
            {
                codigo: "EE520160",
                tipoDespesaId: 58,
                descricao: "EXTENSOR EXTENSET EE 0201 0000 (120 CM) (ESTERILIZADO)"
            },
        ]
    },
    {
        cnpj: "61100244000130",
        razao: "FANEM LTDA",
        itens: [
            {
                codigo: "089206600",
                tipoDespesaId: 58,
                descricao: "FILTRO HIDROFOBICO EMBAL. C/5 UNIDADES [ROHS]"
            },
        ]
    },
    {
        cnpj: "61418042000131",
        razao: "CIRURGICA FERNANDES C.MAT.CIR.HO.SO.LTDA",
        itens: [
            {
                codigo: "ZSZ2613",
                tipoDespesaId: 58,
                descricao: "AG.HIP. 13X4,5 (26GX1/2) CX/100 WILTEX"
            },
            {
                codigo: "MDL2230",
                tipoDespesaId: 58,
                descricao: "AG.HIP.30X7 (22GX1 1/4) CX/100 WILTEX"
            },
            {
                codigo: "4362962",
                tipoDespesaId: 58,
                descricao: "AGULHA P/ ANEST. DE PLEXO 21GX100MM UNIEVER UNISIS"
            },
            {
                codigo: "KNSPQ20G90",
                tipoDespesaId: 58,
                descricao: "AGULHA RAQUI LANCETA (QUINCKE) 20G X 3 1/2- 90x09 KDL"
            },
            {
                codigo: "KNSPQ25G90",
                tipoDespesaId: 58,
                descricao: "AGULHA RAQUI LANCETA (QUINCKE) 25GX3 1/2 - 90X05 KDL"
            },
            {
                codigo: "KNSPQIN27G90",
                tipoDespesaId: 58,
                descricao: "AGULHA RAQUI LANCETA (QUINCKE) 27GX3 1/2-90X04 C/INTROD. KDL"
            },
            {
                codigo: "9406",
                tipoDespesaId: 58,
                descricao: "CAL SODADA 5 LITROS ATRASORB"
            },
            {
                codigo: "FY3903-2",
                tipoDespesaId: 58,
                descricao: "CANETA MARCADORA PONTA DUPLA ESTERIL WILTEX"
            },
            {
                codigo: "11105",
                tipoDespesaId: 58,
                descricao: "CATETER IV PERIF.SEG.C/AG.20GX32MM PUR C/ FILTRO POLYMED"
            },
            {
                codigo: "11106",
                tipoDespesaId: 58,
                descricao: "CATETER IV PERIF.SEG.C/AG.22GX25MM PUR C/ FILTRO POLYMED"
            },
            {
                codigo: "75212",
                tipoDespesaId: 58,
                descricao: "COBERTURA DE MESA IMPERMEAVEL ESTERIL 2,00X2,00 HN DESC"
            },
            {
                codigo: "10101-2",
                tipoDespesaId: 58,
                descricao: "COL. URINA ADULTO 2LT PT/100 3P MEDICAL"
            },
            {
                codigo: "825604",
                tipoDespesaId: 58,
                descricao: "COLCHAO HOSP.CAIXA OVO (80 X 1,88) 4CM D28 LUCKSPUMA"
            },
            {
                codigo: "PRFS1012",
                tipoDespesaId: 58,
                descricao: "CURATIVO TRANSP. COM BORDA10X12 CX/50 FRAME STYLE"
            },
            {
                codigo: "IVFS.67",
                tipoDespesaId: 58,
                descricao: "CURATIVO TRANSP. IV 6X7CM CX/100 PHARMAPORE"
            },
            {
                codigo: "FY024510F",
                tipoDespesaId: 58,
                descricao: "DRENO SUC. PENROSE NR 3 SILICONE 10MMX30CMFOYOMED"
            },
            {
                codigo: "91068",
                tipoDespesaId: 58,
                descricao: "DRENO SUCCAO SANFONADO 4.8MM (3/16 500ML WILTEX"
            },
            {
                codigo: "AP1000",
                tipoDespesaId: 58,
                descricao: "ESPONJA PARA BANHO N/ESTERIL PT/24 AVANT CARE"
            },
            {
                codigo: "KKNWTPB033",
                tipoDespesaId: 58,
                descricao: "FITA MICROP. 25X10 C/CARR WILTEX"
            },
            {
                codigo: "KKNWTPB034",
                tipoDespesaId: 58,
                descricao: "FITA MICROP. 50X10 C/CARR WILTEX"
            },
            {
                codigo: "KKNWTPB036",
                tipoDespesaId: 58,
                descricao: "FITA MICROP.100X10 C/CARR WILTEX"
            },
            {
                codigo: "8015",
                tipoDespesaId: 58,
                descricao: "FIXADOR DE CANULA TRAQ. ADULTO FRADEL"
            },
            {
                codigo: "8077",
                tipoDespesaId: 58,
                descricao: "FIXADOR DE TUBO ENDOTRAQUEAL ADULTO FRADEL"
            },
            {
                codigo: "GRL36",
                tipoDespesaId: 58,
                descricao: "GARROTE DESCARTAVEL C/25 TIRAS 36CM CRAL"
            },
            {
                codigo: "8048A14",
                tipoDespesaId: 58,
                descricao: "GUIA INTUBACAO 4.7MM (14FR) GCMEDICA"
            },
            {
                codigo: "51328H",
                tipoDespesaId: 58,
                descricao: "LENCOL PAPEL HOSP.DESC.50X70 ECO CX/10 HNDESC"
            },
            {
                codigo: "110004C",
                tipoDespesaId: 58,
                descricao: "MASCARA ANESTESIA PVC C/ COXIM INFL. ADULTO MD COMPER"
            },
            {
                codigo: "GD11-0509T",
                tipoDespesaId: 58,
                descricao: "MASCARA DESC. TRIPLA C/ ELASTICO PCT/ 50 WILTEX"
            },
            {
                codigo: "LB151002",
                tipoDespesaId: 58,
                descricao: "MASCARA TRAQUEOSTOMIA ADULTO FOYOMED"
            },
            {
                codigo: "LB151001",
                tipoDespesaId: 58,
                descricao: "MASCARA TRAQUEOSTOMIA PEDIATRICA FOYOMED"
            },
            {
                codigo: "I2900",
                tipoDespesaId: 58,
                descricao: "PLACA ELETROCIRURGICA DUAL REM UNIVERSAL BLAYCO"
            },
            {
                codigo: "ZSQ3060CT0000",
                tipoDespesaId: 58,
                descricao: "SER.DESC.60ML BICO CATETER WILTEX"
            },
            {
                codigo: "OSY1403",
                tipoDespesaId: 58,
                descricao: "SERINGA DOSADORA ORAL 3ML PT C/150 WILTEX MEDICAL"
            },
            {
                codigo: "11701",
                tipoDespesaId: 58,
                descricao: "SIST.DRENAGEM MEDIASTINAL 2000ML 3P MEDICAL"
            },
            {
                codigo: "LB624008",
                tipoDespesaId: 58,
                descricao: "SONDA ASP. TRAQ. C/ VALVULA NR.08FR FOYOMED"
            },
            {
                codigo: "LB624012",
                tipoDespesaId: 58,
                descricao: "SONDA ASP. TRAQ. C/ VALVULA NR.12FR FOYOMED"
            },
            {
                codigo: "LB624014",
                tipoDespesaId: 58,
                descricao: "SONDA ASP. TRAQ. C/ VALVULA NR.14FR FOYOMED"
            },
            {
                codigo: "LB641016",
                tipoDespesaId: 58,
                descricao: "SONDA GASTRICA LEVINE 16FR FOYOMED"
            },
            {
                codigo: "LB661010",
                tipoDespesaId: 58,
                descricao: "SONDA URETRAL VESICAL PVC FR10 FOYOMED"
            },
            {
                codigo: "LB661012",
                tipoDespesaId: 58,
                descricao: "SONDA URETRAL VESICAL PVC FR12 FOYOMED"
            },
            {
                codigo: "LB661018",
                tipoDespesaId: 58,
                descricao: "SONDA URETRAL VESICAL PVC FR18 FOYOMED"
            },
            {
                codigo: "GC101301",
                tipoDespesaId: 58,
                descricao: "TAMPA P/ SONDA FOLEY GC MEDICA"
            },
            {
                codigo: "5010005",
                tipoDespesaId: 58,
                descricao: "TELA INORG. CIRURGICA 15X15 INTRACORP VENKURI"
            },
        ]
    },
    {
        cnpj: "66786047000130",
        razao: "LBGS GRUPOS DE SERVICOS LTDA",
        itens: [
            {
                codigo: "M1065",
                tipoDespesaId: 251,
                descricao: "DESJEJUM DIETA GERAL ADULTO"
            },
            {
                codigo: "M1006",
                tipoDespesaId: 251,
                descricao: "ALMOCO DIETA GERAL"
            },
            {
                codigo: "M1110",
                tipoDespesaId: 251,
                descricao: "MERENDA DIETA GERAL"
            },
            {
                codigo: "M1086",
                tipoDespesaId: 251,
                descricao: "JANTAR DIETA GERAL"
            },
            {
                codigo: "M1027",
                tipoDespesaId: 251,
                descricao: "CEIA DIETA GERAL"
            },
            {
                codigo: "M1070",
                tipoDespesaId: 251,
                descricao: "DESJEJUM DIETA LEVE"
            },
            {
                codigo: "M1193",
                tipoDespesaId: 251,
                descricao: "ALMOCO DIETA LEVE"
            },
            {
                codigo: "M1194",
                tipoDespesaId: 251,
                descricao: "MERENDA DIETA LEVE"
            },
            {
                codigo: "M1195",
                tipoDespesaId: 251,
                descricao: "JANTAR DIETA LEVE"
            },
            {
                codigo: "M1075",
                tipoDespesaId: 251,
                descricao: "DESJEJUM DIETA LIQUIDA"
            },
            {
                codigo: "M1019",
                tipoDespesaId: 251,
                descricao: "ALMOCO DIETA LIQUIDA"
            },
            {
                codigo: "M1116",
                tipoDespesaId: 251,
                descricao: "MERENDA DIETA LIQUIDA"
            },
            {
                codigo: "M1099",
                tipoDespesaId: 251,
                descricao: "JANTAR DIETA LIQUIDA"
            },
            {
                codigo: "M1197",
                tipoDespesaId: 251,
                descricao: "DESJEJUM DIETA HIPER HIPER"
            },
            {
                codigo: "M1199",
                tipoDespesaId: 251,
                descricao: "ALMOCO DIETA HIPER HIPER"
            },
            {
                codigo: "M1112",
                tipoDespesaId: 251,
                descricao: "MERENDA DIETA HIPER-HIPER ADULTO"
            },
            {
                codigo: "M1201",
                tipoDespesaId: 251,
                descricao: "JANTAR DIETA HIPER HIPER"
            },
            {
                codigo: "M2564",
                tipoDespesaId: 251,
                descricao: "DESJEJUM DIABETICO ADULTO"
            },
            {
                codigo: "M2566",
                tipoDespesaId: 251,
                descricao: "ALMOCO DIABETICO ADULTO"
            },
            {
                codigo: "M2567",
                tipoDespesaId: 251,
                descricao: "MERENDA DIABETICO ADULTO"
            },
            {
                codigo: "M2568",
                tipoDespesaId: 251,
                descricao: "JANTAR DIABETICO ADULTO"
            },
            {
                codigo: "M1066",
                tipoDespesaId: 251,
                descricao: "DESJEJUM DIETA GERAL INFANTIL"
            },
            {
                codigo: "M1011",
                tipoDespesaId: 251,
                descricao: "ALMOCO DIETA GERAL INFANTIL"
            },
            {
                codigo: "M1111",
                tipoDespesaId: 251,
                descricao: "MERENDA DIETA GERAL INFANTIL"
            },
            {
                codigo: "M1091",
                tipoDespesaId: 251,
                descricao: "JANTAR DIETA GERAL INFANTIL"
            },
            {
                codigo: "M1073",
                tipoDespesaId: 251,
                descricao: "DESJEJUM DIETA LEVE INFANTIL"
            },
            {
                codigo: "M1017",
                tipoDespesaId: 251,
                descricao: "ALMOCO DIETA LEVE INFANTIL"
            },
            {
                codigo: "M1115",
                tipoDespesaId: 251,
                descricao: "MERENDA DIETA LEVE INFANTIL"
            },
            {
                codigo: "M1097",
                tipoDespesaId: 251,
                descricao: "JANTAR DIETA LEVE INFANTIL"
            },
            {
                codigo: "M1020",
                tipoDespesaId: 251,
                descricao: "ALMOCO DIETA LIQUIDA INFANTIL"
            },
            {
                codigo: "M1117",
                tipoDespesaId: 251,
                descricao: "MERENDA DIETA LIQUIDA INFANTIL"
            },
            {
                codigo: "M1100",
                tipoDespesaId: 251,
                descricao: "JANTAR DIETA LIQUIDA INFANTIL"
            },
            {
                codigo: "M2588",
                tipoDespesaId: 251,
                descricao: "ALMOCO DIABETICO INFANTIL"
            },
            {
                codigo: "M1001",
                tipoDespesaId: 251,
                descricao: "AGUA MINERAL (1,5L)"
            },
            {
                codigo: "M1063",
                tipoDespesaId: 251,
                descricao: "DESJEJUM ACOMPANHANTE"
            },
            {
                codigo: "M1007",
                tipoDespesaId: 251,
                descricao: "ALMOCO ACOMPANHANTE"
            },
            {
                codigo: "M1087",
                tipoDespesaId: 251,
                descricao: "JANTAR ACOMPANHANTE"
            },
            {
                codigo: "M1077",
                tipoDespesaId: 251,
                descricao: "DESJEJUM FUNCIONARIOS"
            },
            {
                codigo: "M1021",
                tipoDespesaId: 251,
                descricao: "ALMOCO FUNC"
            },
            {
                codigo: "M1084",
                tipoDespesaId: 251,
                descricao: "JANTAR FUNC"
            },
            {
                codigo: "M1438",
                tipoDespesaId: 251,
                descricao: "BOLACHA SACHE"
            },
            {
                codigo: "M1363",
                tipoDespesaId: 251,
                descricao: "CAFE"
            },
            {
                codigo: "M1044",
                tipoDespesaId: 251,
                descricao: "CHA DE ERVAS"
            },
            {
                codigo: "M1272",
                tipoDespesaId: 251,
                descricao: "SALADA DE FRUTAS"
            },
            {
                codigo: "M1267",
                tipoDespesaId: 251,
                descricao: "SUCO DE FRUTAS NATURAL"
            },
        ]
    },
    {
        cnpj: "67729178000491",
        razao: "COMERCIAL CIRURGICA RIOCLARENSE LTDA",
        itens: [
            {
                codigo: "013918",
                tipoDespesaId: 57,
                descricao: "ACETILCISTEINA 300MG (UNIAO QUIMICA)   L: 2522770 Q:      100,0000 F: 09/05/25 V: 31/05/2027"
            },
            {
                codigo: "033571",
                tipoDespesaId: 57,
                descricao: "ACICLOVIR 200MG (CIMED)  (ITEM GENERICO) L: 2507891 Q:      120,0000 F: 18/03/25 V: 18/03/2027"
            },
            {
                codigo: "010705",
                tipoDespesaId: 57,
                descricao: "ADRENALINA (EPINEFRINA) 1MG/ML (HIPOLABOR)   L: D-002/25M Q:    1.000,0000 F: 07/05/25 V: 31/10/2026, nFCI: 431004C0-B0C"
            },
            {
                codigo: "035879",
                tipoDespesaId: 58,
                descricao: "ALGODAO ORTOPEDICO 20CMX1,8M (BRAGANCA TEXTIL)   L: 360425 Q:      120,0000 F: 01/04/25 V: 30/04/2030"
            },
            {
                codigo: "034871",
                tipoDespesaId: 57,
                descricao: "BROMETO DE N-BUTILESCOPOLAMINA 10MG (NEO Q/COSMED)   L: J24L0020 Q:      300,0000 F: 08/11/24 V: 08/11/2026"
            },
            {
                codigo: "022733",
                tipoDespesaId: 57,
                descricao: "BUPIVACAINA 20MG CLORIDRATO,GLICOSE ANID (HIPOLABOR)  (ITEM GENERICO) L: AR-022/24 Q:      100,0000 F: 05/11/24 V: 31/10"
            },
            {
                codigo: "006642",
                tipoDespesaId: 57,
                descricao: "BUPIVACAINA 20MG,CLORIDRATO (CRISTALIA)   L: 50021893 Q:       80,0000 F: 14/11/24 V: 14/11/2027"
            },
            {
                codigo: "030624",
                tipoDespesaId: 57,
                descricao: "CEFAZOLINA SODICA 1G (BIOCHIMICO)  (ITEM GENERICO) L: 010580 Q:      400,0000 F: 11/03/25 V: 28/02/2027"
            },
            {
                codigo: "028656",
                tipoDespesaId: 57,
                descricao: "CEFUROXIMA SODICA 750MG (BIOCHIMICO)  (ITEM GENERICO) L: 010615 Q:       50,0000 F: 02/04/25 V: 31/03/2027, nFCI: EC8BBA"
            },
            {
                codigo: "030020",
                tipoDespesaId: 57,
                descricao: "CETOPROFENO 100MG IM (HIPOLABOR)  (ITEM GENERICO) L: BG-016/25 Q:    1.000,0000 F: 19/02/25 V: 31/01/2027, nFCI: 131C442"
            },
            {
                codigo: "017140",
                tipoDespesaId: 57,
                descricao: "CETOPROFENO 100MG IV (CRISTALIA)  (ITEM GENERICO) L: 50026722 Q:    1.200,0000 F: 06/04/25 V: 06/04/2027"
            },
            {
                codigo: "027260",
                tipoDespesaId: 57,
                descricao: "CLORETO DE POTASSIO 19,1% 10ML (FARMACE)   L: 24F20173G Q:      600,0000 F: 18/06/24 V: 18/05/2026"
            },
            {
                codigo: "027263",
                tipoDespesaId: 57,
                descricao: "CLORETO DE SODIO 20% 10ML (FARMACE)   L: 25A10069D Q:    1.000,0000 F: 22/01/25 V: 22/12/2026"
            },
            {
                codigo: "028946",
                tipoDespesaId: 57,
                descricao: "COLAGENASE 0,06 U/G S/ CLORANFENICOL (CRISTALIA)   L: 50022902 Q:       10,0000 F: 01/12/24 V: 30/12/2026"
            },
            {
                codigo: "033696",
                tipoDespesaId: 57,
                descricao: "DEXAMETASONA 1MG, ACETATO (HIPOLABOR)  (ITEM GENERICO) L: 569/24 Q:       50,0000 F: 11/11/24 V: 31/10/2026"
            },
            {
                codigo: "033053",
                tipoDespesaId: 57,
                descricao: "DIMENIDRINATO 25MG/ML + PIRIDOXINA 5MG/ML, CLORIDRATO (NEO Q/COSMED)   L: 559024 Q:       10,0000 F: 14/05/24 V: 14/04/2"
            },
            {
                codigo: "014058",
                tipoDespesaId: 57,
                descricao: "DOPAMINA 50MG, CLORIDRATO (HIPOLABOR)  (ITEM GENERICO) L: AJ-001/25M Q:      100,0000 F: 24/04/25 V: 31/03/2027"
            },
            {
                codigo: "033522",
                tipoDespesaId: 57,
                descricao: "ENOXAPARINA SODICA 40MG/0,4ML (ACHE)   L: 3045971 Q:      800,0000 F: 23/06/24 V: 30/06/2026"
            },
            {
                codigo: "021942",
                tipoDespesaId: 57,
                descricao: "FENTANILA, CITRATO 78,5MCG 10ML EQUIVALE (HIPOLABOR)  (ITEM GENERICO) L: AS-089/24M Q:      250,0000 F: 12/12/24 V: 30/1"
            },
            {
                codigo: "017434",
                tipoDespesaId: 57,
                descricao: "FENTANILA, CITRATO 78,5MCG 2ML EQUIVALEN (HIPOLABOR)  (ITEM GENERICO) L: AS-045/25M Q:      200,0000 F: 22/04/25 V: 31/0"
            },
            {
                codigo: "035618",
                tipoDespesaId: 57,
                descricao: "FLUMAZENIL 0,1MG/ML (HIPOLABOR)  (ITEM GENERICO) L: BF-001/25 Q:       50,0000 F: 23/04/25 V: 30/09/2026 *** Portaria 34"
            },
            {
                codigo: "015313",
                tipoDespesaId: 57,
                descricao: "GENTAMICINA 80MG, SULFATO (HYPOFARMA)   L: 25030154 Q:      500,0000 F: 13/05/25 V: 31/03/2027"
            },
            {
                codigo: "029516",
                tipoDespesaId: 57,
                descricao: "GENTAMICINA 80MG, SULFATO (SANTISA)   L: 20500725 Q:      300,0000 F: 04/02/25 V: 20/02/2027"
            },
            {
                codigo: "021147",
                tipoDespesaId: 57,
                descricao: "GLICOSE 10% 250ML S. FECHADO (FRESENIUS KABI)   L: 74UB0743 Q:       48,0000 F: 15/02/25 V: 15/01/2027"
            },
            {
                codigo: "012998",
                tipoDespesaId: 57,
                descricao: "HALOPERIDOL 5MG/ML (UNIAO QUIMICA)   L: 2520693 Q:       50,0000 F: 13/05/25 V: 31/05/2027 *** Portaria 344/98 C1, nFCI:"
            },
            {
                codigo: "033217",
                tipoDespesaId: 57,
                descricao: "HEPARINA SODICA 5.000UI/0,25ML SUBCUTANE (HIPOLABOR)   L: U001/25M Q:    2.600,0000 F: 04/02/25 V: 31/07/2026"
            },
            {
                codigo: "006709",
                tipoDespesaId: 57,
                descricao: "HIDRALAZINA 20MG,CLORIDRATO (CRISTALIA)   L: 50025216 Q:      100,0000 F: 27/02/25 V: 27/08/2026"
            },
            {
                codigo: "035107",
                tipoDespesaId: 57,
                descricao: "HIDROXIDO DE ALUMINIO 6% 100ML (IMEC)  (ITEM GENERICO) L: 03250010 Q:       50,0000 F: 26/03/25 V: 26/03/2027"
            },
            {
                codigo: "014025",
                tipoDespesaId: 57,
                descricao: "LEVOBUPIVACAINA 0,5%, CLORIDRATO C/V (CRISTALIA)   L: 50020279 Q:       10,0000 F: 08/10/24 V: 08/04/2026"
            },
            {
                codigo: "017209",
                tipoDespesaId: 57,
                descricao: "LIDOCAINA 2% S/V 5ML, CLORIDRATO (HIPOLABOR)  (ITEM GENERICO) L: L-003/25 Q:      100,0000 F: 15/03/25 V: 28/02/2027"
            },
            {
                codigo: "035583",
                tipoDespesaId: 58,
                descricao: "LUVA CIRURGICA ESTERIL 6,5 (BE CARE)   L: 060125 Q:      200,0000 F: 01/01/25 V: 30/01/2030"
            },
            {
                codigo: "035582",
                tipoDespesaId: 58,
                descricao: "LUVA CIRURGICA ESTERIL 7,5 (BE CARE)   L: 161024 Q:    4.600,0000 F: 01/10/24 V: 30/10/2029"
            },
            {
                codigo: "035584",
                tipoDespesaId: 58,
                descricao: "LUVA CIRURGICA ESTERIL 8,0 (BE CARE)   L: 041224 Q:      800,0000 F: 01/12/24 V: 30/12/2029"
            },
            {
                codigo: "030467",
                tipoDespesaId: 58,
                descricao: "MANTA TERMICA CORPO INTEIRO POS OPERATORIO (3M/SOLVENTUM)   L: 2503500096 Q:       20,0000 F: 01/12/24 V: 30/12/2027"
            },
            {
                codigo: "006178",
                tipoDespesaId: 57,
                descricao: "METADONA 5MG,CLORIDRATO (CRISTALIA)   L: 50020671 Q:       60,0000 F: 18/10/24 V: 18/10/2026 *** Portaria 344/98 A1"
            },
            {
                codigo: "028232",
                tipoDespesaId: 57,
                descricao: "METOCLOPRAMIDA 10MG/2ML,CLORIDRATO (FARMACE)   L: mt25b013 Q:      700,0000 F: 06/03/25 V: 31/01/2027"
            },
            {
                codigo: "029072",
                tipoDespesaId: 57,
                descricao: "METOPROLOL 1MG/ML, TARTARATO (CRISTALIA)   L: 50024026 Q:       40,0000 F: 24/01/25 V: 24/01/2027"
            },
            {
                codigo: "035301",
                tipoDespesaId: 57,
                descricao: "METRONIDAZOL 500MG S.FECHADO (HALEX ISTAR)  (ITEM GENERICO) L: 5020089 Q:      420,0000 F: 13/02/25 V: 13/02/2027"
            },
            {
                codigo: "020958",
                tipoDespesaId: 57,
                descricao: "MIDAZOLAM 15MG (HIPOLABOR)  (ITEM GENERICO) L: AP-028/25 Q:      400,0000 F: 31/03/25 V: 28/02/2027 *** Portaria 344/98"
            },
            {
                codigo: "010756",
                tipoDespesaId: 57,
                descricao: "MORFINA 0,2MG/ML,SULFATO (CRISTALIA)   L: 50022960 Q:      100,0000 F: 16/12/24 V: 16/12/2026 L: 50024615 Q:      100,00"
            },
            {
                codigo: "023507",
                tipoDespesaId: 57,
                descricao: "MORFINA 1MG/ML,SULFATO (CRISTALIA)   L: 50019535 Q:      150,0000 F: 18/09/24 V: 18/09/2026 *** Portaria 344/98 A1"
            },
            {
                codigo: "011262",
                tipoDespesaId: 57,
                descricao: "NITROPRUSSIATO DE SODIO DIIDRATADO 50MG (CRISTALIA)   L: 50024377 Q:       20,0000 F: 03/02/25 V: 03/08/2026"
            },
            {
                codigo: "028290",
                tipoDespesaId: 57,
                descricao: "PARACETAMOL 500MG,FOSFATO DE CODEINA 30M (GEOLAB)  (ITEM GENERICO) L: 2501927 Q:      384,0000 F: 25/02/25 V: 28/02/2027"
            },
            {
                codigo: "027506",
                tipoDespesaId: 57,
                descricao: "PERMETRINA 5% LOCAO (NATIVITA)   L: 250001 Q:       50,0000 F: 01/01/25 V: 01/01/2027"
            },
            {
                codigo: "010752",
                tipoDespesaId: 57,
                descricao: "PROMETAZINA 50MG/2ML,CLORIDRATO (CRISTALIA)   L: 50027075 Q:      300,0000 F: 11/04/25 V: 11/04/2027"
            },
            {
                codigo: "033386",
                tipoDespesaId: 57,
                descricao: "PROMETAZINA 50MG/2ML,CLORIDRATO (HIPOLABOR)   L: BL-006/25 Q:      100,0000 F: 17/03/25 V: 28/02/2027"
            },
            {
                codigo: "028087",
                tipoDespesaId: 57,
                descricao: "REMIFENTANILA 2MG, CLORIDRATO (CRISTALIA)  (ITEM GENERICO) L: 50022379 Q:       15,0000 F: 02/12/24 V: 02/12/2026 *** Po"
            },
            {
                codigo: "035593",
                tipoDespesaId: 57,
                descricao: "ROCURONIO 10MG/ML, BROMETO (VOLPHARMA DISTR)  (ITEM GENERICO) L: A0830089 Q:      100,0000 F: 01/02/25 V: 31/01/2027"
            },
            {
                codigo: "023612",
                tipoDespesaId: 57,
                descricao: "TENOXICAM 20MG INJ (CRISTALIA)  (ITEM GENERICO) L: 50023875 Q:       50,0000 F: 20/01/25 V: 20/01/2027"
            },
            {
                codigo: "035657",
                tipoDespesaId: 57,
                descricao: "TIAMINA 100MG, CLORIDRATO (HIPOLABOR)   L: BM-002/24M Q:      400,0000 F: 24/07/24 V: 30/06/2026"
            },
            {
                codigo: "023638",
                tipoDespesaId: 57,
                descricao: "VASOPRESSINA SINTETICA 20U (BIOLAB SANUS)   L: 41105844 Q:      250,0000 F: 06/02/25 V: 28/02/2027, nFCI: 4AF75F3D-2D05-"
            },
        ]
    },
    {
        cnpj: "90347840000380",
        razao: "TK ELEVADORES BRASIL LTDA",
        itens: [
            {
                codigo: "RB-3Z.0598.BZ.1",
                tipoDespesaId: 236,
                descricao: "MODULO MACB FDNFDGAC2 MODULO DE ACIONA"
            },
        ]
    },
];

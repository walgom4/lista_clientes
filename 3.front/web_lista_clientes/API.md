# Api de listas de valores para mostrar

Invocar el método de búsqueda con tamaño 0

```
GET /empresas/_search?size=0
{
  "size": 0,
  "aggregations":
    {
    "Estado": {   //Nombre de la etiqueta en la salida
      "terms": {
        "field": "Estado.keyword"   //Nombre del campo a mostrar
        }
      }
    }
}
```

## Campos con filtros

Estado.keyword
actividadesEconomicas.actividad0.keyword
actividadesEconomicas.actividad1.keyword
ciudad.keyword
departamento.keyword
macroSector.keyword
region.keyword
sector.keyword

## Ejemplo de response

```
{
  "took" : 3,
  "timed_out" : false,
  "_shards" : {
    "total" : 5,
    "successful" : 5,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 1000,
      "relation" : "eq"
    },
    "max_score" : null,
    "hits" : [ ]
  },
  "aggregations" : {
    "Estado" : {
      "doc_count_error_upper_bound" : 0,
      "sum_other_doc_count" : 0,
      "buckets" : [
        {
          "key" : "Activa",
          "doc_count" : 801
        },
        {
          "key" : "Inactiva",
          "doc_count" : 199
        }
      ]
    }
  }
}
```

# Api de búsqueda

## Parámetros get:

- **size**: tamaño de la lista resultante
- **from**: fila inicial a traer, útil para mostrar resultados paginados

## Parámetros del body:

- **quer**: texto a buscar, incluir los \* para hacer búsqueda full text
- **query_string.fields**: campos sobre los cuáles se aplica el query
- **filter.term**: nombre del campo agregado, concatenar el texto .keyword
- **range**: filtro por rango

```
curl -XGET "http://localhost:9200/empresas/_search?size=10" -H 'Content-Type: application/json' -d'
{
  "query": {
    "bool": {
      "must": [
        {
          "query_string": {
            "fields": ["NIT", "nombreEmpresa"],
            "query": "*avi*"
          }}
      ],
      "filter": [
        { "term":  { "Estado.keyword": "Activa" }},
        { "term":  { "actividadesEconomicas.actividad0.keyword": "H5111 - TRANSPORTE AEREO NACIONAL DE PASAJEROS" }},
        { "term":  { "actividadesEconomicas.actividad1.keyword": "H5112 - COMERCIALIZACION AEREO" }},
        { "term":  { "ciudad.keyword": "Cartagena de Indias" }},
        { "term":  { "departamento.keyword": "Atl�ntico" }},
        { "term":  { "macroSector.keyword": "Comercio" }},
        { "term":  { "region.keyword": "Caribe" }},
        { "term":  { "sector.keyword": "Viajes y turismo" }},
        { "range": { "financieros.ingresosEmpresa": { "gte": 120000,
          "lte": 1000000}}}

      ]
    }
  }
}'
```

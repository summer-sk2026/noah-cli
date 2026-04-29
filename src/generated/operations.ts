import type { GeneratedOperation } from './types.js'

export const operations: GeneratedOperation[] = [
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "POST",
    "path": "/wealth/fixed_income",
    "operationId": "postWealthFixedIncome",
    "commandName": "market fixed-income",
    "commandPath": [
      "market",
      "fixed-income"
    ],
    "displayName": "market fixed-income",
    "resource": "fixed-income",
    "summary": "用户固收类资产通用查询接口",
    "description": "用户固收类资产通用查询接口",
    "tags": [
      "wealth Data"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": {
      "required": true,
      "mediaType": "application/json",
      "schemaRef": "entity.yaml#/components/schemas/WealthFixedIncomeQueryBody",
      "tsType": "EntityWealthFixedIncomeQueryBody",
      "typeName": "EntityWealthFixedIncomeQueryBody",
      "requiredProperties": [],
      "enumValues": [],
      "itemType": ""
    },
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data为列表，元素类型 WealthGetDate",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market fixed-income\n摘要: 用户固收类资产通用查询接口\n描述: 用户固收类资产通用查询接口\n请求: POST /wealth/fixed_income\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: postWealthFixedIncome\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  类型: EntityWealthFixedIncomeQueryBody\n  必填: 是\n  媒体类型: application/json\n  schemaRef: entity.yaml#/components/schemas/WealthFixedIncomeQueryBody\n  必填字段: 无\n响应:\n  200: EntitySecResponseData - 成功，data为列表，元素类型 WealthGetDate\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/wealth/total_asset",
    "operationId": "getWealthTotalAsset",
    "commandName": "market total-asset",
    "commandPath": [
      "market",
      "total-asset"
    ],
    "displayName": "market total-asset",
    "resource": "total-asset",
    "summary": "资产信息汇总",
    "description": "资产信息汇总",
    "tags": [
      "wealth Data"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "toCurrency",
        "required": true,
        "description": "币种",
        "schemaType": "string",
        "schemaRef": "entity.yaml#/components/schemas/CashCurrencyCode",
        "tsType": "EntityCashCurrencyCode",
        "typeName": "EntityCashCurrencyCode",
        "enumValues": [
          "CNY",
          "HKD",
          "USD",
          "EUR",
          "JPY",
          "GBP",
          "TWD",
          "KRW",
          "CAD",
          "CNH",
          "CHF",
          "SEK",
          "SGD",
          "AUD",
          "ZAR",
          "NZD",
          "OTH"
        ],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data为列表，元素类型 TotalAsset",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market total-asset\n摘要: 资产信息汇总\n描述: 资产信息汇总\n请求: GET /wealth/total_asset\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getWealthTotalAsset\n\nPath 参数:\n  无\nQuery 参数:\n  --toCurrency <EntityCashCurrencyCode> [必填] 币种 可选值: \"CNY\", \"HKD\", \"USD\", \"EUR\", \"JPY\", \"GBP\", \"TWD\", \"KRW\", \"CAD\", \"CNH\", \"CHF\", \"SEK\", \"SGD\", \"AUD\", \"ZAR\", \"NZD\", \"OTH\"\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseData - 成功，data为列表，元素类型 TotalAsset\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/wealth/hold_share_list",
    "operationId": "getWealthHoldShareList",
    "commandName": "market hold-share-list",
    "commandPath": [
      "market",
      "hold-share-list"
    ],
    "displayName": "market hold-share-list",
    "resource": "hold-share-list",
    "summary": "公募信息获取",
    "description": "公募信息获取",
    "tags": [
      "wealth Data"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "toCurrency",
        "required": true,
        "description": "币种",
        "schemaType": "string",
        "schemaRef": "entity.yaml#/components/schemas/CashCurrencyCode",
        "tsType": "EntityCashCurrencyCode",
        "typeName": "EntityCashCurrencyCode",
        "enumValues": [
          "CNY",
          "HKD",
          "USD",
          "EUR",
          "JPY",
          "GBP",
          "TWD",
          "KRW",
          "CAD",
          "CNH",
          "CHF",
          "SEK",
          "SGD",
          "AUD",
          "ZAR",
          "NZD",
          "OTH"
        ],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data为列表，元素类型 HoldShareList",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market hold-share-list\n摘要: 公募信息获取\n描述: 公募信息获取\n请求: GET /wealth/hold_share_list\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getWealthHoldShareList\n\nPath 参数:\n  无\nQuery 参数:\n  --toCurrency <EntityCashCurrencyCode> [必填] 币种 可选值: \"CNY\", \"HKD\", \"USD\", \"EUR\", \"JPY\", \"GBP\", \"TWD\", \"KRW\", \"CAD\", \"CNH\", \"CHF\", \"SEK\", \"SGD\", \"AUD\", \"ZAR\", \"NZD\", \"OTH\"\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseData - 成功，data为列表，元素类型 HoldShareList\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "POST",
    "path": "/wealth/query_private_contract_asset_list",
    "operationId": "postWealthQueryPrivateContractAssetList",
    "commandName": "market query-private-contract-asset-list",
    "commandPath": [
      "market",
      "query-private-contract-asset-list"
    ],
    "displayName": "market query-private-contract-asset-list",
    "resource": "query-private-contract-asset-list",
    "summary": "私募查询接口",
    "description": "私募查询接口",
    "tags": [
      "wealth Data"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": {
      "required": false,
      "mediaType": "application/json",
      "schemaRef": "entity.yaml#/components/schemas/PrivateContractAssetQueryBodyV2",
      "tsType": "EntityPrivateContractAssetQueryBodyV2",
      "typeName": "EntityPrivateContractAssetQueryBodyV2",
      "requiredProperties": [
        "toCurrency",
        "queryType",
        "positionStatus",
        "isPaging"
      ],
      "enumValues": [],
      "itemType": ""
    },
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data为列表，元素类型 PrivateContractAssetSummaryV3",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market query-private-contract-asset-list\n摘要: 私募查询接口\n描述: 私募查询接口\n请求: POST /wealth/query_private_contract_asset_list\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: postWealthQueryPrivateContractAssetList\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  类型: EntityPrivateContractAssetQueryBodyV2\n  必填: 否\n  媒体类型: application/json\n  schemaRef: entity.yaml#/components/schemas/PrivateContractAssetQueryBodyV2\n  必填字段: toCurrency, queryType, positionStatus, isPaging\n响应:\n  200: EntitySecResponseData - 成功，data为列表，元素类型 PrivateContractAssetSummaryV3\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/wealth/cash_total_asset",
    "operationId": "getWealthCashTotalAsset",
    "commandName": "market cash-total-asset",
    "commandPath": [
      "market",
      "cash-total-asset"
    ],
    "displayName": "market cash-total-asset",
    "resource": "cash-total-asset",
    "summary": "现金宝",
    "description": "现金宝",
    "tags": [
      "wealth Data"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data为列表，元素类型 HoldShareListV2",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market cash-total-asset\n摘要: 现金宝\n描述: 现金宝\n请求: GET /wealth/cash_total_asset\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getWealthCashTotalAsset\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseData - 成功，data为列表，元素类型 HoldShareListV2\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/wealth/bank_deposit_hold_detail",
    "operationId": "getWealthBankDepositHoldDetail",
    "commandName": "market bank-deposit-hold-detail",
    "commandPath": [
      "market",
      "bank-deposit-hold-detail"
    ],
    "displayName": "market bank-deposit-hold-detail",
    "resource": "bank-deposit-hold-detail",
    "summary": "银行定存存续或到期详情",
    "description": "银行定存存续或到期详情",
    "tags": [
      "wealth Data"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "purchaseSubOrderNo",
        "required": true,
        "description": "买入子订单号",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "redeemSubOrderNo",
        "required": false,
        "description": "赎回订单号 非必须",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data为列表，元素类型 BankDepositHoldDetail",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market bank-deposit-hold-detail\n摘要: 银行定存存续或到期详情\n描述: 银行定存存续或到期详情\n请求: GET /wealth/bank_deposit_hold_detail\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getWealthBankDepositHoldDetail\n\nPath 参数:\n  无\nQuery 参数:\n  --purchaseSubOrderNo <string> [必填] 买入子订单号\n  --redeemSubOrderNo <string> [可选] 赎回订单号 非必须\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseData - 成功，data为列表，元素类型 BankDepositHoldDetail\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "POST",
    "path": "/wealth/user_asset_query_detail",
    "operationId": "postWealthUserAssetQueryDetail",
    "commandName": "market user-asset-query-detail",
    "commandPath": [
      "market",
      "user-asset-query-detail"
    ],
    "displayName": "market user-asset-query-detail",
    "resource": "user-asset-query-detail",
    "summary": "用户固收类存量-存续详情接口",
    "description": "用户固收类存量-存续详情接口",
    "tags": [
      "wealth Data"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": {
      "required": true,
      "mediaType": "application/json",
      "schemaRef": "entity.yaml#/components/schemas/WealthFixedIncomeDetailQueryBody",
      "tsType": "EntityWealthFixedIncomeDetailQueryBody",
      "typeName": "EntityWealthFixedIncomeDetailQueryBody",
      "requiredProperties": [
        "groupNo"
      ],
      "enumValues": [],
      "itemType": ""
    },
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data为列表，元素类型 WealthFixedIncomeDetailResp",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market user-asset-query-detail\n摘要: 用户固收类存量-存续详情接口\n描述: 用户固收类存量-存续详情接口\n请求: POST /wealth/user_asset_query_detail\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: postWealthUserAssetQueryDetail\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  类型: EntityWealthFixedIncomeDetailQueryBody\n  必填: 是\n  媒体类型: application/json\n  schemaRef: entity.yaml#/components/schemas/WealthFixedIncomeDetailQueryBody\n  必填字段: groupNo\n响应:\n  200: EntitySecResponseData - 成功，data为列表，元素类型 WealthFixedIncomeDetailResp\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/wealth/balance_list",
    "operationId": "getWealthBalanceList",
    "commandName": "market balance-list",
    "commandPath": [
      "market",
      "balance-list"
    ],
    "displayName": "market balance-list",
    "resource": "balance-list",
    "summary": "用户余额列表",
    "description": "用户余额列表",
    "tags": [
      "wealth Data"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data为列表，元素类型 CashBalanceListResponse",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market balance-list\n摘要: 用户余额列表\n描述: 用户余额列表\n请求: GET /wealth/balance_list\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getWealthBalanceList\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseData - 成功，data为列表，元素类型 CashBalanceListResponse\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/rank/get_stock_rank",
    "operationId": "getRankGetStockRank",
    "commandName": "market get-stock-rank",
    "commandPath": [
      "market",
      "get-stock-rank"
    ],
    "displayName": "market get-stock-rank",
    "resource": "get-stock-rank",
    "summary": "获取排行榜数据",
    "description": "获取排行榜数据",
    "tags": [
      "Rank Data"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "market_codes",
        "required": true,
        "description": "市场代码",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/Markets",
        "tsType": "EnumMarkets",
        "typeName": "EnumMarkets",
        "enumValues": [
          "HK",
          "SG",
          "US"
        ],
        "itemType": ""
      },
      {
        "name": "rank_field",
        "required": true,
        "description": "排行字段",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/QuoteSortField",
        "tsType": "EnumQuoteSortField",
        "typeName": "EnumQuoteSortField",
        "enumValues": [
          "lastPrice",
          "raisePercent",
          "raise",
          "exchange",
          "raiseSpeed",
          "mainNetInflow",
          "totalTradeVol",
          "totalTurnover",
          "volumeRatio",
          "entrustRatio",
          "amplitude",
          "highPrice",
          "lowPrice",
          "openPrice",
          "preClose",
          "peDynamic",
          "peRatio",
          "circulationValue",
          "marketValue",
          "iopv",
          "nominalPrice",
          "stockRaisePercent",
          "increaseNum",
          "roe",
          "pnaRatio",
          "raisePercentOneYear",
          "leverageRatio",
          "maturityDay",
          "exercisePrice",
          "percOfStillOut",
          "premiumRatio",
          "effectiveGearing",
          "pStrPrice",
          "pStrPriceSpread",
          "bid1Price",
          "ask1Price",
          "currencyOneCode",
          "currencySecondCode",
          "orderNum",
          "baseOrderNum",
          "raisePercent1y",
          "raisePercent1m",
          "raisePercentYtd",
          "assetSize",
          "shareIssued"
        ],
        "itemType": ""
      },
      {
        "name": "ascend",
        "required": true,
        "description": "排行顺序",
        "schemaType": "boolean",
        "schemaRef": "",
        "tsType": "boolean",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page",
        "required": true,
        "description": "页码",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page_size",
        "required": true,
        "description": "每页数据",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 SecQuoteExtendIndexDto",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-stock-rank\n摘要: 获取排行榜数据\n描述: 获取排行榜数据\n请求: GET /rank/get_stock_rank\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getRankGetStockRank\n\nPath 参数:\n  无\nQuery 参数:\n  --market_codes <EnumMarkets> [必填] 市场代码 可选值: \"HK\", \"SG\", \"US\"\n  --rank_field <EnumQuoteSortField> [必填] 排行字段 可选值: \"lastPrice\", \"raisePercent\", \"raise\", \"exchange\", \"raiseSpeed\", \"mainNetInflow\", \"totalTradeVol\", \"totalTurnover\", \"volumeRatio\", \"entrustRatio\", \"amplitude\", \"highPrice\", \"lowPrice\", \"openPrice\", \"preClose\", \"peDynamic\", \"peRatio\", \"circulationValue\", \"marketValue\", \"iopv\", \"nominalPrice\", \"stockRaisePercent\", \"increaseNum\", \"roe\", \"pnaRatio\", \"raisePercentOneYear\", \"leverageRatio\", \"maturityDay\", \"exercisePrice\", \"percOfStillOut\", \"premiumRatio\", \"effectiveGearing\", \"pStrPrice\", \"pStrPriceSpread\", \"bid1Price\", \"ask1Price\", \"currencyOneCode\", \"currencySecondCode\", \"orderNum\", \"baseOrderNum\", \"raisePercent1y\", \"raisePercent1m\", \"raisePercentYtd\", \"assetSize\", \"shareIssued\"\n  --ascend <boolean> [必填] 排行顺序\n  --page <number> [必填] 页码\n  --page_size <number> [必填] 每页数据\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 SecQuoteExtendIndexDto\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/infos/shareholder_inc_red_hold",
    "operationId": "getInfosShareholderIncRedHold",
    "commandName": "market shareholder-inc-red-hold",
    "commandPath": [
      "market",
      "shareholder-inc-red-hold"
    ],
    "displayName": "market shareholder-inc-red-hold",
    "resource": "shareholder-inc-red-hold",
    "summary": "股东增减持明细榜单按市场范围",
    "description": "股东增减持明细榜单按市场范围",
    "tags": [
      "F10 Infos"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "current_page",
        "required": true,
        "description": "页码",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page_size",
        "required": true,
        "description": "页数",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "market",
        "required": true,
        "description": "市场",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/Markets",
        "tsType": "EnumMarkets",
        "typeName": "EnumMarkets",
        "enumValues": [
          "HK",
          "SG",
          "US"
        ],
        "itemType": ""
      },
      {
        "name": "shareholder",
        "required": true,
        "description": "排序字段",
        "schemaType": "integer",
        "schemaRef": "enum.yaml#/ShareholderRedHoldEnum",
        "tsType": "EnumShareholderRedHoldEnum",
        "typeName": "EnumShareholderRedHoldEnum",
        "enumValues": [
          1001,
          1002,
          1003,
          1004
        ],
        "itemType": ""
      },
      {
        "name": "order_code",
        "required": true,
        "description": "排序顺序",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/SortDir",
        "tsType": "EnumSortDir",
        "typeName": "EnumSortDir",
        "enumValues": [
          "ASCEND",
          "DESCEND"
        ],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，详细信息，元素类型 MxShareholderOpenApiIncRedHoldResp",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market shareholder-inc-red-hold\n摘要: 股东增减持明细榜单按市场范围\n描述: 股东增减持明细榜单按市场范围\n请求: GET /infos/shareholder_inc_red_hold\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getInfosShareholderIncRedHold\n\nPath 参数:\n  无\nQuery 参数:\n  --current_page <number> [必填] 页码\n  --page_size <number> [必填] 页数\n  --market <EnumMarkets> [必填] 市场 可选值: \"HK\", \"SG\", \"US\"\n  --shareholder <EnumShareholderRedHoldEnum> [必填] 排序字段 可选值: 1001, 1002, 1003, 1004\n  --order_code <EnumSortDir> [必填] 排序顺序 可选值: \"ASCEND\", \"DESCEND\"\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，详细信息，元素类型 MxShareholderOpenApiIncRedHoldResp\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/infos/shareholder_inc_red_hold_by_date",
    "operationId": "getInfosShareholderIncRedHoldByDate",
    "commandName": "market shareholder-inc-red-hold-by-date",
    "commandPath": [
      "market",
      "shareholder-inc-red-hold-by-date"
    ],
    "displayName": "market shareholder-inc-red-hold-by-date",
    "resource": "shareholder-inc-red-hold-by-date",
    "summary": "股东增减持明细榜单按时间范围",
    "description": "股东增减持明细榜单按时间范围",
    "tags": [
      "F10 Infos"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "current_page",
        "required": true,
        "description": "页码",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page_size",
        "required": true,
        "description": "页数",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "market",
        "required": true,
        "description": "市场",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/Markets",
        "tsType": "EnumMarkets",
        "typeName": "EnumMarkets",
        "enumValues": [
          "HK",
          "SG",
          "US"
        ],
        "itemType": ""
      },
      {
        "name": "from",
        "required": true,
        "description": "开始日期 yyyyMMdd",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "to",
        "required": true,
        "description": "结束日期 yyyyMMdd",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，详细信息，元素类型 MxShareholderOpenApiIncRedHoldResp",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market shareholder-inc-red-hold-by-date\n摘要: 股东增减持明细榜单按时间范围\n描述: 股东增减持明细榜单按时间范围\n请求: GET /infos/shareholder_inc_red_hold_by_date\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getInfosShareholderIncRedHoldByDate\n\nPath 参数:\n  无\nQuery 参数:\n  --current_page <number> [必填] 页码\n  --page_size <number> [必填] 页数\n  --market <EnumMarkets> [必填] 市场 可选值: \"HK\", \"SG\", \"US\"\n  --from <string> [必填] 开始日期 yyyyMMdd\n  --to <string> [必填] 结束日期 yyyyMMdd\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，详细信息，元素类型 MxShareholderOpenApiIncRedHoldResp\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/infos/shareholder_inc_red_hold_by_ucode",
    "operationId": "getInfosShareholderIncRedHoldByUcode",
    "commandName": "market shareholder-inc-red-hold-by-ucode",
    "commandPath": [
      "market",
      "shareholder-inc-red-hold-by-ucode"
    ],
    "displayName": "market shareholder-inc-red-hold-by-ucode",
    "resource": "shareholder-inc-red-hold-by-ucode",
    "summary": "股东增减持明细榜单按股票代码范围",
    "description": "股东增减持明细榜单按股票代码范围",
    "tags": [
      "F10 Infos"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "current_page",
        "required": true,
        "description": "页码",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page_size",
        "required": true,
        "description": "页数",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "stock_code",
        "required": true,
        "description": "股票代码",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "shareholder",
        "required": true,
        "description": "排序字段",
        "schemaType": "integer",
        "schemaRef": "enum.yaml#/ShareholderRedHoldEnum",
        "tsType": "EnumShareholderRedHoldEnum",
        "typeName": "EnumShareholderRedHoldEnum",
        "enumValues": [
          1001,
          1002,
          1003,
          1004
        ],
        "itemType": ""
      },
      {
        "name": "order_code",
        "required": true,
        "description": "排序顺序",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/SortDir",
        "tsType": "EnumSortDir",
        "typeName": "EnumSortDir",
        "enumValues": [
          "ASCEND",
          "DESCEND"
        ],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，详细信息，元素类型 MxShareholderOpenApiIncRedHoldResp",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market shareholder-inc-red-hold-by-ucode\n摘要: 股东增减持明细榜单按股票代码范围\n描述: 股东增减持明细榜单按股票代码范围\n请求: GET /infos/shareholder_inc_red_hold_by_ucode\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getInfosShareholderIncRedHoldByUcode\n\nPath 参数:\n  无\nQuery 参数:\n  --current_page <number> [必填] 页码\n  --page_size <number> [必填] 页数\n  --stock_code <string> [必填] 股票代码\n  --shareholder <EnumShareholderRedHoldEnum> [必填] 排序字段 可选值: 1001, 1002, 1003, 1004\n  --order_code <EnumSortDir> [必填] 排序顺序 可选值: \"ASCEND\", \"DESCEND\"\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，详细信息，元素类型 MxShareholderOpenApiIncRedHoldResp\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/infos/get_finance_us_infos",
    "operationId": "getInfosGetFinanceUsInfos",
    "commandName": "market get-finance-us-infos",
    "commandPath": [
      "market",
      "get-finance-us-infos"
    ],
    "displayName": "market get-finance-us-infos",
    "resource": "get-finance-us-infos",
    "summary": "获取美股财务数据",
    "description": "获取美股财务数据",
    "tags": [
      "F10 Infos"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "stock_code",
        "required": true,
        "description": "股票代码",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "type_code",
        "required": true,
        "description": "数据类型",
        "schemaType": "integer",
        "schemaRef": "enum.yaml#/DateTypeConvertUtil",
        "tsType": "EnumDateTypeConvertUtil",
        "typeName": "EnumDateTypeConvertUtil",
        "enumValues": [
          1,
          2,
          3,
          4,
          5,
          7
        ],
        "itemType": ""
      },
      {
        "name": "year",
        "required": true,
        "description": "年份",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，详细信息，元素类型 USStockFinancial",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-finance-us-infos\n摘要: 获取美股财务数据\n描述: 获取美股财务数据\n请求: GET /infos/get_finance_us_infos\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getInfosGetFinanceUsInfos\n\nPath 参数:\n  无\nQuery 参数:\n  --stock_code <string> [必填] 股票代码\n  --type_code <EnumDateTypeConvertUtil> [必填] 数据类型 可选值: 1, 2, 3, 4, 5, 7\n  --year <number> [必填] 年份\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseData - 成功，详细信息，元素类型 USStockFinancial\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/infos/get_finance_hk_infos",
    "operationId": "getInfosGetFinanceHkInfos",
    "commandName": "market get-finance-hk-infos",
    "commandPath": [
      "market",
      "get-finance-hk-infos"
    ],
    "displayName": "market get-finance-hk-infos",
    "resource": "get-finance-hk-infos",
    "summary": "获取港股财务数据",
    "description": "获取港股财务数据",
    "tags": [
      "F10 Infos"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "stock_code",
        "required": true,
        "description": "股票代码",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "type_code",
        "required": true,
        "description": "数据类型",
        "schemaType": "integer",
        "schemaRef": "enum.yaml#/DateTypeConvertUtil",
        "tsType": "EnumDateTypeConvertUtil",
        "typeName": "EnumDateTypeConvertUtil",
        "enumValues": [
          1,
          2,
          3,
          4,
          5,
          7
        ],
        "itemType": ""
      },
      {
        "name": "year",
        "required": true,
        "description": "年份",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，详细信息，元素类型 HKStockFinancial",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-finance-hk-infos\n摘要: 获取港股财务数据\n描述: 获取港股财务数据\n请求: GET /infos/get_finance_hk_infos\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getInfosGetFinanceHkInfos\n\nPath 参数:\n  无\nQuery 参数:\n  --stock_code <string> [必填] 股票代码\n  --type_code <EnumDateTypeConvertUtil> [必填] 数据类型 可选值: 1, 2, 3, 4, 5, 7\n  --year <number> [必填] 年份\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseData - 成功，详细信息，元素类型 HKStockFinancial\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/infos/get_us_analysis",
    "operationId": "getInfosGetUsAnalysis",
    "commandName": "market get-us-analysis",
    "commandPath": [
      "market",
      "get-us-analysis"
    ],
    "displayName": "market get-us-analysis",
    "resource": "get-us-analysis",
    "summary": "获取美股分析信息",
    "description": "获取美股分析信息",
    "tags": [
      "F10 Infos"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "stock_code",
        "required": true,
        "description": "股票代码",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，详细信息，元素类型 AnalysisUSStocks",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-us-analysis\n摘要: 获取美股分析信息\n描述: 获取美股分析信息\n请求: GET /infos/get_us_analysis\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getInfosGetUsAnalysis\n\nPath 参数:\n  无\nQuery 参数:\n  --stock_code <string> [必填] 股票代码\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseData - 成功，详细信息，元素类型 AnalysisUSStocks\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/infos/get_capital_flow",
    "operationId": "getInfosGetCapitalFlow",
    "commandName": "market get-capital-flow",
    "commandPath": [
      "market",
      "get-capital-flow"
    ],
    "displayName": "market get-capital-flow",
    "resource": "get-capital-flow",
    "summary": "获取个股资金流向",
    "description": "获取个股资金流向",
    "tags": [
      "Basic Data"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "stock_code",
        "required": true,
        "description": "股票代码",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "num",
        "required": true,
        "description": "数量",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 CapitalFlowItem",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-capital-flow\n摘要: 获取个股资金流向\n描述: 获取个股资金流向\n请求: GET /infos/get_capital_flow\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getInfosGetCapitalFlow\n\nPath 参数:\n  无\nQuery 参数:\n  --stock_code <string> [必填] 股票代码\n  --num <number> [必填] 数量\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 CapitalFlowItem\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/infos/get_market_state",
    "operationId": "getInfosGetMarketState",
    "commandName": "market get-market-state",
    "commandPath": [
      "market",
      "get-market-state"
    ],
    "displayName": "market get-market-state",
    "resource": "get-market-state",
    "summary": "获取股票对应市场的市场状态",
    "description": "获取股票对应市场的市场状态",
    "tags": [
      "Basic Data"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code_list",
        "required": true,
        "description": "",
        "schemaType": "array",
        "schemaRef": "entity.yaml#/components/schemas/CodeList",
        "tsType": "EntityCodeList",
        "typeName": "EntityCodeList",
        "enumValues": [],
        "itemType": "string"
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "返回对应市场的市场状态，data 为列表，元素类型 MarketStatus",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-market-state\n摘要: 获取股票对应市场的市场状态\n描述: 获取股票对应市场的市场状态\n请求: GET /infos/get_market_state\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getInfosGetMarketState\n\nPath 参数:\n  无\nQuery 参数:\n  --code_list <EntityCodeList> [必填]\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 返回对应市场的市场状态，data 为列表，元素类型 MarketStatus\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quotes/get_market_snapshot",
    "operationId": "getQuotesGetMarketSnapshot",
    "commandName": "market get-market-snapshot",
    "commandPath": [
      "market",
      "get-market-snapshot"
    ],
    "displayName": "market get-market-snapshot",
    "resource": "get-market-snapshot",
    "summary": "获取市场快照信息",
    "description": "获取市场快照信息",
    "tags": [
      "Real Time Quotes"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code_list",
        "required": true,
        "description": "",
        "schemaType": "array",
        "schemaRef": "entity.yaml#/components/schemas/CodeList",
        "tsType": "EntityCodeList",
        "typeName": "EntityCodeList",
        "enumValues": [],
        "itemType": "string"
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功返回市场快照信息，data 为列表，元素类型 MarketQuote",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-market-snapshot\n摘要: 获取市场快照信息\n描述: 获取市场快照信息\n请求: GET /quotes/get_market_snapshot\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getQuotesGetMarketSnapshot\n\nPath 参数:\n  无\nQuery 参数:\n  --code_list <EntityCodeList> [必填]\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功返回市场快照信息，data 为列表，元素类型 MarketQuote\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quotes/get_rt_data",
    "operationId": "getQuotesGetRtData",
    "commandName": "market get-rt-data",
    "commandPath": [
      "market",
      "get-rt-data"
    ],
    "displayName": "market get-rt-data",
    "resource": "get-rt-data",
    "summary": "获取实时分时",
    "description": "获取实时分时",
    "tags": [
      "Real Time Quotes"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": true,
        "description": "",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 StockTimeData",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-rt-data\n摘要: 获取实时分时\n描述: 获取实时分时\n请求: GET /quotes/get_rt_data\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getQuotesGetRtData\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [必填]\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 StockTimeData\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quotes/get_cur_kline",
    "operationId": "getQuotesGetCurKline",
    "commandName": "market get-cur-kline",
    "commandPath": [
      "market",
      "get-cur-kline"
    ],
    "displayName": "market get-cur-kline",
    "resource": "get-cur-kline",
    "summary": "获取实时 K 线",
    "description": "获取实时 K 线",
    "tags": [
      "Real Time Quotes"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": false,
        "description": "",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "name",
        "required": false,
        "description": "",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "num",
        "required": true,
        "description": "K线个数, 负数为向前查询",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "ktype",
        "required": true,
        "description": "",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/KLType",
        "tsType": "EnumKLType",
        "typeName": "EnumKLType",
        "enumValues": [
          "NONE",
          "K_1_M",
          "K_DAY",
          "K_WEEK",
          "K_MON",
          "K_YEAR",
          "K_5_M",
          "K_15_M",
          "K_30_M",
          "K_60_M",
          "K_120_M",
          "K_QUARTER"
        ],
        "itemType": ""
      },
      {
        "name": "autype",
        "required": true,
        "description": "",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/AuType",
        "tsType": "EnumAuType",
        "typeName": "EnumAuType",
        "enumValues": [
          "NONE",
          "QFQ",
          "HFQ"
        ],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 KlineItem",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-cur-kline\n摘要: 获取实时 K 线\n描述: 获取实时 K 线\n请求: GET /quotes/get_cur_kline\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getQuotesGetCurKline\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [可选]\n  --name <string> [可选]\n  --num <number> [必填] K线个数, 负数为向前查询\n  --ktype <EnumKLType> [必填] 可选值: \"NONE\", \"K_1_M\", \"K_DAY\", \"K_WEEK\", \"K_MON\", \"K_YEAR\", \"K_5_M\", \"K_15_M\", \"K_30_M\", \"K_60_M\", \"K_120_M\", \"K_QUARTER\"\n  --autype <EnumAuType> [必填] 可选值: \"NONE\", \"QFQ\", \"HFQ\"\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 KlineItem\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quotes/get_cur_kline_date",
    "operationId": "getQuotesGetCurKlineDate",
    "commandName": "market get-cur-kline-date",
    "commandPath": [
      "market",
      "get-cur-kline-date"
    ],
    "displayName": "market get-cur-kline-date",
    "resource": "get-cur-kline-date",
    "summary": "获取实时 K 线,根据时间范围筛选",
    "description": "获取实时 K 线,根据时间范围筛选",
    "tags": [
      "Real Time Quotes"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": false,
        "description": "",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "name",
        "required": false,
        "description": "",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "from",
        "required": true,
        "description": "时间范围查询 yyyyMMddHHmmssSSS",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "to",
        "required": true,
        "description": "时间范围查询 yyyyMMddHHmmssSSS",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "ktype",
        "required": true,
        "description": "",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/KLType",
        "tsType": "EnumKLType",
        "typeName": "EnumKLType",
        "enumValues": [
          "NONE",
          "K_1_M",
          "K_DAY",
          "K_WEEK",
          "K_MON",
          "K_YEAR",
          "K_5_M",
          "K_15_M",
          "K_30_M",
          "K_60_M",
          "K_120_M",
          "K_QUARTER"
        ],
        "itemType": ""
      },
      {
        "name": "autype",
        "required": true,
        "description": "",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/AuType",
        "tsType": "EnumAuType",
        "typeName": "EnumAuType",
        "enumValues": [
          "NONE",
          "QFQ",
          "HFQ"
        ],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 CandleOpenApiDotResp",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-cur-kline-date\n摘要: 获取实时 K 线,根据时间范围筛选\n描述: 获取实时 K 线,根据时间范围筛选\n请求: GET /quotes/get_cur_kline_date\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getQuotesGetCurKlineDate\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [可选]\n  --name <string> [可选]\n  --from <string> [必填] 时间范围查询 yyyyMMddHHmmssSSS\n  --to <string> [必填] 时间范围查询 yyyyMMddHHmmssSSS\n  --ktype <EnumKLType> [必填] 可选值: \"NONE\", \"K_1_M\", \"K_DAY\", \"K_WEEK\", \"K_MON\", \"K_YEAR\", \"K_5_M\", \"K_15_M\", \"K_30_M\", \"K_60_M\", \"K_120_M\", \"K_QUARTER\"\n  --autype <EnumAuType> [必填] 可选值: \"NONE\", \"QFQ\", \"HFQ\"\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 CandleOpenApiDotResp\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quotes/get_rt_ticker",
    "operationId": "getQuotesGetRtTicker",
    "commandName": "market get-rt-ticker",
    "commandPath": [
      "market",
      "get-rt-ticker"
    ],
    "displayName": "market get-rt-ticker",
    "resource": "get-rt-ticker",
    "summary": "获取实时逐笔",
    "description": "获取实时逐笔",
    "tags": [
      "Real Time Quotes"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": true,
        "description": "",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "num",
        "required": true,
        "description": "",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 TickerItem",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-rt-ticker\n摘要: 获取实时逐笔\n描述: 获取实时逐笔\n请求: GET /quotes/get_rt_ticker\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getQuotesGetRtTicker\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [必填]\n  --num <number> [必填]\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 TickerItem\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quotes/get_broker_queue",
    "operationId": "getQuotesGetBrokerQueue",
    "commandName": "market get-broker-queue",
    "commandPath": [
      "market",
      "get-broker-queue"
    ],
    "displayName": "market get-broker-queue",
    "resource": "get-broker-queue",
    "summary": "获取实时经纪队列",
    "description": "获取实时经纪队列",
    "tags": [
      "Real Time Quotes"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": true,
        "description": "",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为单个对象（非列表），类型 BrokerQueue",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseData",
        "tsType": "EntitySecResponseData",
        "typeName": "EntitySecResponseData"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-broker-queue\n摘要: 获取实时经纪队列\n描述: 获取实时经纪队列\n请求: GET /quotes/get_broker_queue\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getQuotesGetBrokerQueue\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [必填]\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseData - 成功，data 为单个对象（非列表），类型 BrokerQueue\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quote/get_stock_basicinfo",
    "operationId": "getStockBasicInfo",
    "commandName": "market get-stock-basicinfo",
    "commandPath": [
      "market",
      "get-stock-basicinfo"
    ],
    "displayName": "market get-stock-basicinfo",
    "resource": "get-stock-basicinfo",
    "summary": "获取指定市场中特定类型或特定股票的基本信息",
    "description": "对应 Futu get_stock_basicinfo / GetStaticInfo",
    "tags": [
      "Market"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "market",
        "required": true,
        "description": "市场",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/Market",
        "tsType": "EnumMarket",
        "typeName": "EnumMarket",
        "enumValues": [
          "HK",
          "US",
          "SH",
          "SZ",
          "BK",
          "SG",
          "JPN",
          "FRA",
          "GER",
          "FX",
          "BKHK",
          "BKUS",
          "UK",
          "CC",
          "PJ"
        ],
        "itemType": ""
      },
      {
        "name": "stock_type",
        "required": false,
        "description": "证券类型，不传则返回全部",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/SecurityType",
        "tsType": "EnumSecurityType",
        "typeName": "EnumSecurityType",
        "enumValues": [
          "STOCK",
          "IDX",
          "ETF",
          "WARRANT",
          "BOND",
          "ALL"
        ],
        "itemType": ""
      },
      {
        "name": "code_list",
        "required": false,
        "description": "股票代码列表，逗号分隔；不传则返回该市场该类型下全部",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 StockBasicInfoItem",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-stock-basicinfo\n摘要: 获取指定市场中特定类型或特定股票的基本信息\n描述: 对应 Futu get_stock_basicinfo / GetStaticInfo\n请求: GET /quote/get_stock_basicinfo\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getStockBasicInfo\n\nPath 参数:\n  无\nQuery 参数:\n  --market <EnumMarket> [必填] 市场 可选值: \"HK\", \"US\", \"SH\", \"SZ\", \"BK\", \"SG\", \"JPN\", \"FRA\", \"GER\", \"FX\", \"BKHK\", \"BKUS\", \"UK\", \"CC\", \"PJ\"\n  --stock_type <EnumSecurityType> [可选] 证券类型，不传则返回全部 可选值: \"STOCK\", \"IDX\", \"ETF\", \"WARRANT\", \"BOND\", \"ALL\"\n  --code_list <string> [可选] 股票代码列表，逗号分隔；不传则返回该市场该类型下全部\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 StockBasicInfoItem\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "POST",
    "path": "/quote/get_stock_filter",
    "operationId": "getStockFilter",
    "commandName": "market get-stock-filter",
    "commandPath": [
      "market",
      "get-stock-filter"
    ],
    "displayName": "market get-stock-filter",
    "resource": "get-stock-filter",
    "summary": "条件选股",
    "description": "对应 Futu get_stock_filter / StockFilter。\n请求参数通过 JSON 请求体（application/json）传递，避免 GET query 无法绑定复杂筛选列表的问题。\n",
    "tags": [
      "Market"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": {
      "required": true,
      "mediaType": "application/json",
      "schemaRef": "entity.yaml#/components/schemas/StockFilterConfig",
      "tsType": "EntityStockFilterConfig",
      "typeName": "EntityStockFilterConfig",
      "requiredProperties": [
        "market"
      ],
      "enumValues": [],
      "itemType": ""
    },
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 SecStockFilter（合并量化策略与扩展行情字段）",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-stock-filter\n摘要: 条件选股\n描述: 对应 Futu get_stock_filter / StockFilter。\n请求参数通过 JSON 请求体（application/json）传递，避免 GET query 无法绑定复杂筛选列表的问题。\n\n请求: POST /quote/get_stock_filter\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getStockFilter\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  类型: EntityStockFilterConfig\n  必填: 是\n  媒体类型: application/json\n  schemaRef: entity.yaml#/components/schemas/StockFilterConfig\n  必填字段: market\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 SecStockFilter（合并量化策略与扩展行情字段）\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quote/get_ipo_list",
    "operationId": "getIpoList",
    "commandName": "market get-ipo-list",
    "commandPath": [
      "market",
      "get-ipo-list"
    ],
    "displayName": "market get-ipo-list",
    "resource": "get-ipo-list",
    "summary": "获取指定市场的 IPO 列表",
    "description": "对应 Futu get_ipo_list / GetIpoList",
    "tags": [
      "Market"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "market",
        "required": true,
        "description": "市场",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/Market",
        "tsType": "EnumMarket",
        "typeName": "EnumMarket",
        "enumValues": [
          "HK",
          "US",
          "SH",
          "SZ",
          "BK",
          "SG",
          "JPN",
          "FRA",
          "GER",
          "FX",
          "BKHK",
          "BKUS",
          "UK",
          "CC",
          "PJ"
        ],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 IpoItem",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-ipo-list\n摘要: 获取指定市场的 IPO 列表\n描述: 对应 Futu get_ipo_list / GetIpoList\n请求: GET /quote/get_ipo_list\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getIpoList\n\nPath 参数:\n  无\nQuery 参数:\n  --market <EnumMarket> [必填] 市场 可选值: \"HK\", \"US\", \"SH\", \"SZ\", \"BK\", \"SG\", \"JPN\", \"FRA\", \"GER\", \"FX\", \"BKHK\", \"BKUS\", \"UK\", \"CC\", \"PJ\"\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 IpoItem\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quote/get_global_state",
    "operationId": "getGlobalState",
    "commandName": "market get-global-state",
    "commandPath": [
      "market",
      "get-global-state"
    ],
    "displayName": "market get-global-state",
    "resource": "get-global-state",
    "summary": "获取全局市场状态",
    "description": "对应 Futu get_global_state / GetGlobalState",
    "tags": [
      "Market"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 GlobalStateItem",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market get-global-state\n摘要: 获取全局市场状态\n描述: 对应 Futu get_global_state / GetGlobalState\n请求: GET /quote/get_global_state\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getGlobalState\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 GlobalStateItem\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "market",
    "specTitle": "market",
    "sourceFile": "openapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/quote/request_trading_days",
    "operationId": "requestTradingDays",
    "commandName": "market request-trading-days",
    "commandPath": [
      "market",
      "request-trading-days"
    ],
    "displayName": "market request-trading-days",
    "resource": "request-trading-days",
    "summary": "获取交易日历",
    "description": "对应 Futu request_trading_days / RequestTradeDate",
    "tags": [
      "Market"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "market",
        "required": true,
        "description": "市场",
        "schemaType": "string",
        "schemaRef": "enum.yaml#/Market",
        "tsType": "EnumMarket",
        "typeName": "EnumMarket",
        "enumValues": [
          "HK",
          "US",
          "SH",
          "SZ",
          "BK",
          "SG",
          "JPN",
          "FRA",
          "GER",
          "FX",
          "BKHK",
          "BKUS",
          "UK",
          "CC",
          "PJ"
        ],
        "itemType": ""
      },
      {
        "name": "start",
        "required": true,
        "description": "开始日期 yyyyMMdd",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "end",
        "required": true,
        "description": "结束日期 yyyyMMdd",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "成功，data 为列表，元素类型 TradingDayItem",
        "mediaType": "application/json",
        "schemaRef": "entity.yaml#/components/schemas/SecResponseList",
        "tsType": "EntitySecResponseList",
        "typeName": "EntitySecResponseList"
      },
      {
        "statusCode": "404",
        "description": "查询数据不存在",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      },
      {
        "statusCode": "500",
        "description": "服务器内部错误",
        "mediaType": "",
        "schemaRef": "",
        "tsType": "unknown",
        "typeName": ""
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: market request-trading-days\n摘要: 获取交易日历\n描述: 对应 Futu request_trading_days / RequestTradeDate\n请求: GET /quote/request_trading_days\n命名空间: market\n来源规范: openapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: requestTradingDays\n\nPath 参数:\n  无\nQuery 参数:\n  --market <EnumMarket> [必填] 市场 可选值: \"HK\", \"US\", \"SH\", \"SZ\", \"BK\", \"SG\", \"JPN\", \"FRA\", \"GER\", \"FX\", \"BKHK\", \"BKUS\", \"UK\", \"CC\", \"PJ\"\n  --start <string> [必填] 开始日期 yyyyMMdd\n  --end <string> [必填] 结束日期 yyyyMMdd\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: EntitySecResponseList - 成功，data 为列表，元素类型 TradingDayItem\n  404: unknown - 查询数据不存在\n  500: unknown - 服务器内部错误\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_account_info",
    "operationId": "getAccountInfo",
    "commandName": "trade get-account-info",
    "commandPath": [
      "trade",
      "get-account-info"
    ],
    "displayName": "trade get-account-info",
    "resource": "get-account-info",
    "summary": "获取账户信息",
    "description": "返回当前交易账户的基础信息以及开户状态。\n请求 header 需传入 `Authorization: Bearer <token>`。\n统一响应中的业务结果位于 `data` 字段。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回账户信息。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/AccountInfoApiResponse",
        "tsType": "TradeopenapiAccountInfoApiResponse",
        "typeName": "TradeopenapiAccountInfoApiResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-account-info\n摘要: 获取账户信息\n描述: 返回当前交易账户的基础信息以及开户状态。\n请求 header 需传入 `Authorization: Bearer <token>`。\n统一响应中的业务结果位于 `data` 字段。\n\n请求: GET /trade/get_account_info\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getAccountInfo\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiAccountInfoApiResponse - 查询成功，`data` 中返回账户信息。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_positions",
    "operationId": "getPositions",
    "commandName": "trade get-positions",
    "commandPath": [
      "trade",
      "get-positions"
    ],
    "displayName": "trade get-positions",
    "resource": "get-positions",
    "summary": "获取持仓列表",
    "description": "查询当前持仓数据。\n请求 header 需传入 `Authorization: Bearer <token>`。\n`market` 为必填参数，用于向下游传递查询市场并返回对应市场持仓。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "market",
        "required": true,
        "description": "必填交易市场，支持 `HK`、`US`、`SH`、`SZ`。",
        "schemaType": "string",
        "schemaRef": "#/components/schemas/Market",
        "tsType": "TradeopenapiMarket",
        "typeName": "TradeopenapiMarket",
        "enumValues": [
          "HK",
          "US",
          "SH",
          "SZ"
        ],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回持仓列表。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/PositionListApiResponse",
        "tsType": "TradeopenapiPositionListApiResponse",
        "typeName": "TradeopenapiPositionListApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-positions\n摘要: 获取持仓列表\n描述: 查询当前持仓数据。\n请求 header 需传入 `Authorization: Bearer <token>`。\n`market` 为必填参数，用于向下游传递查询市场并返回对应市场持仓。\n\n请求: GET /trade/get_positions\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getPositions\n\nPath 参数:\n  无\nQuery 参数:\n  --market <TradeopenapiMarket> [必填] 必填交易市场，支持 `HK`、`US`、`SH`、`SZ`。 可选值: \"HK\", \"US\", \"SH\", \"SZ\"\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiPositionListApiResponse - 查询成功，`data` 中返回持仓列表。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_stock_amount",
    "operationId": "getStockAmount",
    "commandName": "trade get-stock-amount",
    "commandPath": [
      "trade",
      "get-stock-amount"
    ],
    "displayName": "trade get-stock-amount",
    "resource": "get-stock-amount",
    "summary": "获取证券可买可卖数量",
    "description": "查询指定证券在指定委托属性和交易时段下的可买数量、可卖数量。\n请求 header 需传入 `Authorization: Bearer <token>`。\n`code` 使用开放接口格式 `MARKET.CODE`，内部会转换为 sec-trade 所需的市场和证券代码。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": true,
        "description": "证券代码，格式为 `MARKET.CODE`，例如 `HK.00700`、`US.AAPL`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_type",
        "required": true,
        "description": "委托属性，取值对应 `EntrustPropEnum.code`。\n`LO` 限价单，\n`ELO` 增强限价单，\n`SLO` 特别限价单，\n`AO` 竞价市价单，\n`ALO` 竞价限价单，\n`TLO` 条件单专用限价单，\n`MO` 市价单，\n`ODD` 碎股单。\n",
        "schemaType": "string",
        "schemaRef": "#/components/schemas/EntrustProp",
        "tsType": "TradeopenapiEntrustProp",
        "typeName": "TradeopenapiEntrustProp",
        "enumValues": [
          "LO",
          "ELO",
          "SLO",
          "AO",
          "ALO",
          "TLO",
          "MO",
          "ODD"
        ],
        "itemType": ""
      },
      {
        "name": "session_type",
        "required": false,
        "description": "交易时段。\n`0` 常规市场，\n`1` 灰色市场，\n`2` 盘前，\n`3` 盘后。\n",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回证券可买可卖数量。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/StockAmountApiResponse",
        "tsType": "TradeopenapiStockAmountApiResponse",
        "typeName": "TradeopenapiStockAmountApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-stock-amount\n摘要: 获取证券可买可卖数量\n描述: 查询指定证券在指定委托属性和交易时段下的可买数量、可卖数量。\n请求 header 需传入 `Authorization: Bearer <token>`。\n`code` 使用开放接口格式 `MARKET.CODE`，内部会转换为 sec-trade 所需的市场和证券代码。\n\n请求: GET /trade/get_stock_amount\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getStockAmount\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [必填] 证券代码，格式为 `MARKET.CODE`，例如 `HK.00700`、`US.AAPL`。\n  --order_type <TradeopenapiEntrustProp> [必填] 委托属性，取值对应 `EntrustPropEnum.code`。\n`LO` 限价单，\n`ELO` 增强限价单，\n`SLO` 特别限价单，\n`AO` 竞价市价单，\n`ALO` 竞价限价单，\n`TLO` 条件单专用限价单，\n`MO` 市价单，\n`ODD` 碎股单。\n 可选值: \"LO\", \"ELO\", \"SLO\", \"AO\", \"ALO\", \"TLO\", \"MO\", \"ODD\"\n  --session_type <number> [可选] 交易时段。\n`0` 常规市场，\n`1` 灰色市场，\n`2` 盘前，\n`3` 盘后。\n\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiStockAmountApiResponse - 查询成功，`data` 中返回证券可买可卖数量。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/max_enable_buy_amt",
    "operationId": "getMaxEnableBuyAmt",
    "commandName": "trade max-enable-buy-amt",
    "commandPath": [
      "trade",
      "max-enable-buy-amt"
    ],
    "displayName": "trade max-enable-buy-amt",
    "resource": "max-enable-buy-amt",
    "summary": "查询融资最大可买数量",
    "description": "查询指定证券在指定委托属性、委托价格和交易时段下的融资最大可买数量。\n请求 header 需传入 `Authorization: Bearer <token>`。\n`code` 使用开放接口格式 `MARKET.CODE`，内部会转换为 sec-trade 所需的市场和证券代码。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": true,
        "description": "证券代码，格式为 `MARKET.CODE`，例如 `HK.00700`、`US.AAPL`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_type",
        "required": true,
        "description": "委托属性，取值对应 `EntrustPropEnum.code`。\n`LO` 限价单，\n`ELO` 增强限价单，\n`SLO` 特别限价单，\n`AO` 竞价市价单，\n`ALO` 竞价限价单，\n`TLO` 条件单专用限价单，\n`MO` 市价单，\n`ODD` 碎股单。\n",
        "schemaType": "string",
        "schemaRef": "#/components/schemas/EntrustProp",
        "tsType": "TradeopenapiEntrustProp",
        "typeName": "TradeopenapiEntrustProp",
        "enumValues": [
          "LO",
          "ELO",
          "SLO",
          "AO",
          "ALO",
          "TLO",
          "MO",
          "ODD"
        ],
        "itemType": ""
      },
      {
        "name": "entrust_price",
        "required": true,
        "description": "委托价格。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "session_type",
        "required": false,
        "description": "交易时段。\n`0` 常规市场，\n`1` 灰色市场，\n`2` 盘前，\n`3` 盘后。\n",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回融资最大可买数量。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/MaxEnableBuyAmtApiResponse",
        "tsType": "TradeopenapiMaxEnableBuyAmtApiResponse",
        "typeName": "TradeopenapiMaxEnableBuyAmtApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade max-enable-buy-amt\n摘要: 查询融资最大可买数量\n描述: 查询指定证券在指定委托属性、委托价格和交易时段下的融资最大可买数量。\n请求 header 需传入 `Authorization: Bearer <token>`。\n`code` 使用开放接口格式 `MARKET.CODE`，内部会转换为 sec-trade 所需的市场和证券代码。\n\n请求: GET /trade/max_enable_buy_amt\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getMaxEnableBuyAmt\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [必填] 证券代码，格式为 `MARKET.CODE`，例如 `HK.00700`、`US.AAPL`。\n  --order_type <TradeopenapiEntrustProp> [必填] 委托属性，取值对应 `EntrustPropEnum.code`。\n`LO` 限价单，\n`ELO` 增强限价单，\n`SLO` 特别限价单，\n`AO` 竞价市价单，\n`ALO` 竞价限价单，\n`TLO` 条件单专用限价单，\n`MO` 市价单，\n`ODD` 碎股单。\n 可选值: \"LO\", \"ELO\", \"SLO\", \"AO\", \"ALO\", \"TLO\", \"MO\", \"ODD\"\n  --entrust_price <string> [必填] 委托价格。\n  --session_type <number> [可选] 交易时段。\n`0` 常规市场，\n`1` 灰色市场，\n`2` 盘前，\n`3` 盘后。\n\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiMaxEnableBuyAmtApiResponse - 查询成功，`data` 中返回融资最大可买数量。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_sec_asset",
    "operationId": "getSecAsset",
    "commandName": "trade get-sec-asset",
    "commandPath": [
      "trade",
      "get-sec-asset"
    ],
    "displayName": "trade get-sec-asset",
    "resource": "get-sec-asset",
    "summary": "获取证券资产",
    "description": "查询当前交易账户对应分组下的证券资产信息。\n请求 header 需传入 `Authorization: Bearer <token>`。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回证券资产列表。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/SecAssetListApiResponse",
        "tsType": "TradeopenapiSecAssetListApiResponse",
        "typeName": "TradeopenapiSecAssetListApiResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-sec-asset\n摘要: 获取证券资产\n描述: 查询当前交易账户对应分组下的证券资产信息。\n请求 header 需传入 `Authorization: Bearer <token>`。\n\n请求: GET /trade/get_sec_asset\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getSecAsset\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiSecAssetListApiResponse - 查询成功，`data` 中返回证券资产列表。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_sec_capital_flow",
    "operationId": "getSecCapitalFlow",
    "commandName": "trade get-sec-capital-flow",
    "commandPath": [
      "trade",
      "get-sec-capital-flow"
    ],
    "displayName": "trade get-sec-capital-flow",
    "resource": "get-sec-capital-flow",
    "summary": "获取证券资金流水",
    "description": "查询当前交易账户对应分组下的证券资金流水明细。\n请求 header 需传入 `Authorization: Bearer <token>`。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "start_date",
        "required": false,
        "description": "开始日期，格式为 `yyyyMMdd`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "end_date",
        "required": false,
        "description": "结束日期，格式为 `yyyyMMdd`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "business_type",
        "required": false,
        "description": "业务类型。",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "fund_direction",
        "required": false,
        "description": "资金方向。\n常见值：`0` 流入，`1` 流出。\n",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page",
        "required": false,
        "description": "页码，从 1 开始。",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page_size",
        "required": false,
        "description": "每页返回记录数。",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "last_id",
        "required": false,
        "description": "上一页最后一条记录标识，透传 sec-trade `lastId`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "record_last_id",
        "required": false,
        "description": "记录游标，透传 sec-trade `recordLastId`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "trade_code",
        "required": false,
        "description": "证券交易代码，格式为 `MARKET-CODE` 或由下游直接识别的交易代码。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "unique_code",
        "required": false,
        "description": "业务唯一标识，透传 sec-trade `uniqueCode`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回资金流水结果。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/SecCapitalFlowApiResponse",
        "tsType": "TradeopenapiSecCapitalFlowApiResponse",
        "typeName": "TradeopenapiSecCapitalFlowApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-sec-capital-flow\n摘要: 获取证券资金流水\n描述: 查询当前交易账户对应分组下的证券资金流水明细。\n请求 header 需传入 `Authorization: Bearer <token>`。\n\n请求: GET /trade/get_sec_capital_flow\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getSecCapitalFlow\n\nPath 参数:\n  无\nQuery 参数:\n  --start_date <string> [可选] 开始日期，格式为 `yyyyMMdd`。\n  --end_date <string> [可选] 结束日期，格式为 `yyyyMMdd`。\n  --business_type <number> [可选] 业务类型。\n  --fund_direction <number> [可选] 资金方向。\n常见值：`0` 流入，`1` 流出。\n\n  --page <number> [可选] 页码，从 1 开始。\n  --page_size <number> [可选] 每页返回记录数。\n  --last_id <string> [可选] 上一页最后一条记录标识，透传 sec-trade `lastId`。\n  --record_last_id <string> [可选] 记录游标，透传 sec-trade `recordLastId`。\n  --trade_code <string> [可选] 证券交易代码，格式为 `MARKET-CODE` 或由下游直接识别的交易代码。\n  --unique_code <string> [可选] 业务唯一标识，透传 sec-trade `uniqueCode`。\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiSecCapitalFlowApiResponse - 查询成功，`data` 中返回资金流水结果。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_order_list",
    "operationId": "getOrderList",
    "commandName": "trade get-order-list",
    "commandPath": [
      "trade",
      "get-order-list"
    ],
    "displayName": "trade get-order-list",
    "resource": "get-order-list",
    "summary": "获取当日订单列表",
    "description": "查询当前当日有效订单或当日订单记录。\n请求 header 需传入 `Authorization: Bearer <token>`。\n`market` 为必填参数，用于向下游传递查询市场。\n返回结果经过统一封装，订单数组位于 `data` 字段。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "market",
        "required": true,
        "description": "必填交易市场，支持 `HK`、`US`、`SH`、`SZ`。",
        "schemaType": "string",
        "schemaRef": "#/components/schemas/Market",
        "tsType": "TradeopenapiMarket",
        "typeName": "TradeopenapiMarket",
        "enumValues": [
          "HK",
          "US",
          "SH",
          "SZ"
        ],
        "itemType": ""
      },
      {
        "name": "code",
        "required": false,
        "description": "可选证券代码过滤条件，格式为 `MARKET.CODE`，且需与 `market` 一致。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page",
        "required": false,
        "description": "页码，从 1 开始。",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page_size",
        "required": false,
        "description": "每页返回记录数。",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回订单摘要列表。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/OrderSummaryListApiResponse",
        "tsType": "TradeopenapiOrderSummaryListApiResponse",
        "typeName": "TradeopenapiOrderSummaryListApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-order-list\n摘要: 获取当日订单列表\n描述: 查询当前当日有效订单或当日订单记录。\n请求 header 需传入 `Authorization: Bearer <token>`。\n`market` 为必填参数，用于向下游传递查询市场。\n返回结果经过统一封装，订单数组位于 `data` 字段。\n\n请求: GET /trade/get_order_list\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getOrderList\n\nPath 参数:\n  无\nQuery 参数:\n  --market <TradeopenapiMarket> [必填] 必填交易市场，支持 `HK`、`US`、`SH`、`SZ`。 可选值: \"HK\", \"US\", \"SH\", \"SZ\"\n  --code <string> [可选] 可选证券代码过滤条件，格式为 `MARKET.CODE`，且需与 `market` 一致。\n  --page <number> [可选] 页码，从 1 开始。\n  --page_size <number> [可选] 每页返回记录数。\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiOrderSummaryListApiResponse - 查询成功，`data` 中返回订单摘要列表。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_today_order_list",
    "operationId": "getTodayOrderList",
    "commandName": "trade get-today-order-list",
    "commandPath": [
      "trade",
      "get-today-order-list"
    ],
    "displayName": "trade get-today-order-list",
    "resource": "get-today-order-list",
    "summary": "获取当日未完成委托订单列表",
    "description": "查询当日未完成委托订单列表。\n请求 header 需传入 `Authorization: Bearer <token>`。\n当未传 `order_status` 时，默认按未完成状态集合过滤：`0,1,2,3,4,7,A,B,C,D,E,H,W,N,O,P`。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": false,
        "description": "可选证券代码过滤条件，格式为 `MARKET.CODE`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_id",
        "required": false,
        "description": "可选内部订单号过滤条件。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_no",
        "required": false,
        "description": "可选券商订单号过滤条件。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_status",
        "required": false,
        "description": "可选底层原始委托状态码过滤条件，支持逗号分隔多个状态。\n各状态含义如下：\n`0` 未成，\n`1` 待报，\n`2` 已报，\n`3` 已报待撤，\n`4` 部成待撤，\n`5` 部撤，\n`6` 已撤，\n`7` 部成，\n`8` 已成，\n`9` 废单，\n`A` 已报待改，\n`B` 待复核【人手买方待确认】，\n`C` 重新检查中，\n`D` 待触发，\n`E` 部成待改，\n`F` 撤单(过期)，\n`G` 部撤(过期)，\n`H` 待复核，\n`J` 复核未通过，\n`W` 待确认，\n`N` 修改待复核，\n`O` 修改待复核【部成】，\n`P` 修改确认。\n",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回订单摘要列表。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/OrderSummaryListApiResponse",
        "tsType": "TradeopenapiOrderSummaryListApiResponse",
        "typeName": "TradeopenapiOrderSummaryListApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-today-order-list\n摘要: 获取当日未完成委托订单列表\n描述: 查询当日未完成委托订单列表。\n请求 header 需传入 `Authorization: Bearer <token>`。\n当未传 `order_status` 时，默认按未完成状态集合过滤：`0,1,2,3,4,7,A,B,C,D,E,H,W,N,O,P`。\n\n请求: GET /trade/get_today_order_list\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getTodayOrderList\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [可选] 可选证券代码过滤条件，格式为 `MARKET.CODE`。\n  --order_id <string> [可选] 可选内部订单号过滤条件。\n  --order_no <string> [可选] 可选券商订单号过滤条件。\n  --order_status <string> [可选] 可选底层原始委托状态码过滤条件，支持逗号分隔多个状态。\n各状态含义如下：\n`0` 未成，\n`1` 待报，\n`2` 已报，\n`3` 已报待撤，\n`4` 部成待撤，\n`5` 部撤，\n`6` 已撤，\n`7` 部成，\n`8` 已成，\n`9` 废单，\n`A` 已报待改，\n`B` 待复核【人手买方待确认】，\n`C` 重新检查中，\n`D` 待触发，\n`E` 部成待改，\n`F` 撤单(过期)，\n`G` 部撤(过期)，\n`H` 待复核，\n`J` 复核未通过，\n`W` 待确认，\n`N` 修改待复核，\n`O` 修改待复核【部成】，\n`P` 修改确认。\n\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiOrderSummaryListApiResponse - 查询成功，`data` 中返回订单摘要列表。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_history_order_list",
    "operationId": "getHistoryOrderList",
    "commandName": "trade get-history-order-list",
    "commandPath": [
      "trade",
      "get-history-order-list"
    ],
    "displayName": "trade get-history-order-list",
    "resource": "get-history-order-list",
    "summary": "获取历史订单列表",
    "description": "查询历史委托订单列表。\n请求 header 需传入 `Authorization: Bearer <token>`。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": false,
        "description": "可选证券代码过滤条件，格式为 `MARKET.CODE`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "start_date",
        "required": true,
        "description": "开始日期，格式为 `yyyyMMdd`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "end_date",
        "required": true,
        "description": "结束日期，格式为 `yyyyMMdd`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_id",
        "required": false,
        "description": "可选内部订单号过滤条件。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_no",
        "required": false,
        "description": "可选券商订单号过滤条件。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_status",
        "required": false,
        "description": "可选委托状态码过滤条件，支持逗号分隔多个状态。\n各状态含义如下：\n`0` 未成，\n`1` 待报，\n`2` 已报，\n`3` 已报待撤，\n`4` 部成待撤，\n`5` 部撤，\n`6` 已撤，\n`7` 部成，\n`8` 已成，\n`9` 废单，\n`A` 已报待改，\n`B` 待复核【人手买方待确认】，\n`C` 重新检查中，\n`D` 待触发，\n`E` 部成待改，\n`F` 撤单(过期)，\n`G` 部撤(过期)，\n`H` 待复核，\n`J` 复核未通过，\n`W` 待确认，\n`N` 修改待复核，\n`O` 修改待复核【部成】，\n`P` 修改确认。\n",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回订单摘要列表。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/OrderSummaryListApiResponse",
        "tsType": "TradeopenapiOrderSummaryListApiResponse",
        "typeName": "TradeopenapiOrderSummaryListApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-history-order-list\n摘要: 获取历史订单列表\n描述: 查询历史委托订单列表。\n请求 header 需传入 `Authorization: Bearer <token>`。\n\n请求: GET /trade/get_history_order_list\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getHistoryOrderList\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [可选] 可选证券代码过滤条件，格式为 `MARKET.CODE`。\n  --start_date <string> [必填] 开始日期，格式为 `yyyyMMdd`。\n  --end_date <string> [必填] 结束日期，格式为 `yyyyMMdd`。\n  --order_id <string> [可选] 可选内部订单号过滤条件。\n  --order_no <string> [可选] 可选券商订单号过滤条件。\n  --order_status <string> [可选] 可选委托状态码过滤条件，支持逗号分隔多个状态。\n各状态含义如下：\n`0` 未成，\n`1` 待报，\n`2` 已报，\n`3` 已报待撤，\n`4` 部成待撤，\n`5` 部撤，\n`6` 已撤，\n`7` 部成，\n`8` 已成，\n`9` 废单，\n`A` 已报待改，\n`B` 待复核【人手买方待确认】，\n`C` 重新检查中，\n`D` 待触发，\n`E` 部成待改，\n`F` 撤单(过期)，\n`G` 部撤(过期)，\n`H` 待复核，\n`J` 复核未通过，\n`W` 待确认，\n`N` 修改待复核，\n`O` 修改待复核【部成】，\n`P` 修改确认。\n\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiOrderSummaryListApiResponse - 查询成功，`data` 中返回订单摘要列表。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_today_deal_list",
    "operationId": "getTodayDealList",
    "commandName": "trade get-today-deal-list",
    "commandPath": [
      "trade",
      "get-today-deal-list"
    ],
    "displayName": "trade get-today-deal-list",
    "resource": "get-today-deal-list",
    "summary": "获取当日成交列表",
    "description": "查询当日成交数据。\n请求 header 需传入 `Authorization: Bearer <token>`。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": false,
        "description": "可选证券代码过滤条件，格式为 `MARKET.CODE`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回成交摘要列表。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/OrderSummaryListApiResponse",
        "tsType": "TradeopenapiOrderSummaryListApiResponse",
        "typeName": "TradeopenapiOrderSummaryListApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-today-deal-list\n摘要: 获取当日成交列表\n描述: 查询当日成交数据。\n请求 header 需传入 `Authorization: Bearer <token>`。\n\n请求: GET /trade/get_today_deal_list\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getTodayDealList\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [可选] 可选证券代码过滤条件，格式为 `MARKET.CODE`。\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiOrderSummaryListApiResponse - 查询成功，`data` 中返回成交摘要列表。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_history_deal_list",
    "operationId": "getHistoryDealList",
    "commandName": "trade get-history-deal-list",
    "commandPath": [
      "trade",
      "get-history-deal-list"
    ],
    "displayName": "trade get-history-deal-list",
    "resource": "get-history-deal-list",
    "summary": "获取历史成交列表",
    "description": "查询历史成交数据。\n请求 header 需传入 `Authorization: Bearer <token>`。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": false,
        "description": "可选证券代码过滤条件，格式为 `MARKET.CODE`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "start_date",
        "required": true,
        "description": "开始日期，格式为 `yyyyMMdd`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "end_date",
        "required": true,
        "description": "结束日期，格式为 `yyyyMMdd`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回成交摘要列表。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/OrderSummaryListApiResponse",
        "tsType": "TradeopenapiOrderSummaryListApiResponse",
        "typeName": "TradeopenapiOrderSummaryListApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-history-deal-list\n摘要: 获取历史成交列表\n描述: 查询历史成交数据。\n请求 header 需传入 `Authorization: Bearer <token>`。\n\n请求: GET /trade/get_history_deal_list\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getHistoryDealList\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [可选] 可选证券代码过滤条件，格式为 `MARKET.CODE`。\n  --start_date <string> [必填] 开始日期，格式为 `yyyyMMdd`。\n  --end_date <string> [必填] 结束日期，格式为 `yyyyMMdd`。\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiOrderSummaryListApiResponse - 查询成功，`data` 中返回成交摘要列表。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_finished_order_list",
    "operationId": "getFinishedOrderList",
    "commandName": "trade get-finished-order-list",
    "commandPath": [
      "trade",
      "get-finished-order-list"
    ],
    "displayName": "trade get-finished-order-list",
    "resource": "get-finished-order-list",
    "summary": "获取已完成订单列表",
    "description": "查询指定日期范围内的已完成订单记录。\n请求 header 需传入 `Authorization: Bearer <token>`。\n本接口提供分页参数，并同时支持常用过滤条件。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "code",
        "required": false,
        "description": "可选证券代码过滤条件，格式为 `MARKET.CODE`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "start_date",
        "required": false,
        "description": "开始日期，格式为 `yyyyMMdd`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "end_date",
        "required": false,
        "description": "结束日期，格式为 `yyyyMMdd`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page",
        "required": false,
        "description": "页码，从 1 开始。",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "page_size",
        "required": false,
        "description": "每页返回记录数。",
        "schemaType": "integer",
        "schemaRef": "",
        "tsType": "number",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_id",
        "required": false,
        "description": "可选内部订单号过滤条件。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_no",
        "required": false,
        "description": "可选券商订单号过滤条件。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_status",
        "required": false,
        "description": "可选委托状态码过滤条件，支持逗号分隔多个状态。\n各状态含义如下：\n`0` 未成，\n`1` 待报，\n`2` 已报，\n`3` 已报待撤，\n`4` 部成待撤，\n`5` 部撤，\n`6` 已撤，\n`7` 部成，\n`8` 已成，\n`9` 废单，\n`A` 已报待改，\n`B` 待复核【人手买方待确认】，\n`C` 重新检查中，\n`D` 待触发，\n`E` 部成待改，\n`F` 撤单(过期)，\n`G` 部撤(过期)，\n`H` 待复核，\n`J` 复核未通过，\n`W` 待确认，\n`N` 修改待复核，\n`O` 修改待复核【部成】，\n`P` 修改确认。\n",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_side",
        "required": false,
        "description": "可选买卖方向过滤条件，支持 `BUY`、`SELL`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "\"BUY\" | \"SELL\"",
        "typeName": "",
        "enumValues": [
          "BUY",
          "SELL"
        ],
        "itemType": ""
      },
      {
        "name": "order_type",
        "required": false,
        "description": "可选订单类型过滤条件，支持 `LIMIT`、`MARKET`。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "\"LIMIT\" | \"MARKET\"",
        "typeName": "",
        "enumValues": [
          "LIMIT",
          "MARKET"
        ],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回已完成订单摘要列表。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/OrderSummaryListApiResponse",
        "tsType": "TradeopenapiOrderSummaryListApiResponse",
        "typeName": "TradeopenapiOrderSummaryListApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-finished-order-list\n摘要: 获取已完成订单列表\n描述: 查询指定日期范围内的已完成订单记录。\n请求 header 需传入 `Authorization: Bearer <token>`。\n本接口提供分页参数，并同时支持常用过滤条件。\n\n请求: GET /trade/get_finished_order_list\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getFinishedOrderList\n\nPath 参数:\n  无\nQuery 参数:\n  --code <string> [可选] 可选证券代码过滤条件，格式为 `MARKET.CODE`。\n  --start_date <string> [可选] 开始日期，格式为 `yyyyMMdd`。\n  --end_date <string> [可选] 结束日期，格式为 `yyyyMMdd`。\n  --page <number> [可选] 页码，从 1 开始。\n  --page_size <number> [可选] 每页返回记录数。\n  --order_id <string> [可选] 可选内部订单号过滤条件。\n  --order_no <string> [可选] 可选券商订单号过滤条件。\n  --order_status <string> [可选] 可选委托状态码过滤条件，支持逗号分隔多个状态。\n各状态含义如下：\n`0` 未成，\n`1` 待报，\n`2` 已报，\n`3` 已报待撤，\n`4` 部成待撤，\n`5` 部撤，\n`6` 已撤，\n`7` 部成，\n`8` 已成，\n`9` 废单，\n`A` 已报待改，\n`B` 待复核【人手买方待确认】，\n`C` 重新检查中，\n`D` 待触发，\n`E` 部成待改，\n`F` 撤单(过期)，\n`G` 部撤(过期)，\n`H` 待复核，\n`J` 复核未通过，\n`W` 待确认，\n`N` 修改待复核，\n`O` 修改待复核【部成】，\n`P` 修改确认。\n\n  --order_side <\"BUY\" | \"SELL\"> [可选] 可选买卖方向过滤条件，支持 `BUY`、`SELL`。 可选值: \"BUY\", \"SELL\"\n  --order_type <\"LIMIT\" | \"MARKET\"> [可选] 可选订单类型过滤条件，支持 `LIMIT`、`MARKET`。 可选值: \"LIMIT\", \"MARKET\"\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiOrderSummaryListApiResponse - 查询成功，`data` 中返回已完成订单摘要列表。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_order_detail",
    "operationId": "getOrderDetail",
    "commandName": "trade get-order-detail",
    "commandPath": [
      "trade",
      "get-order-detail"
    ],
    "displayName": "trade get-order-detail",
    "resource": "get-order-detail",
    "summary": "获取订单详情",
    "description": "查询指定订单的详细信息，包括成交记录、费用明细和时间线。\n请求 header 需传入 `Authorization: Bearer <token>`。\n订单详情统一封装在 `data` 字段中返回。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "order_id",
        "required": true,
        "description": "下单流程返回的内部订单标识。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_no",
        "required": false,
        "description": "可选的券商侧订单号。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "is_history",
        "required": false,
        "description": "是否从历史订单集合中查询。",
        "schemaType": "boolean",
        "schemaRef": "",
        "tsType": "boolean",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回订单详情。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/OrderDetailApiResponse",
        "tsType": "TradeopenapiOrderDetailApiResponse",
        "typeName": "TradeopenapiOrderDetailApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-order-detail\n摘要: 获取订单详情\n描述: 查询指定订单的详细信息，包括成交记录、费用明细和时间线。\n请求 header 需传入 `Authorization: Bearer <token>`。\n订单详情统一封装在 `data` 字段中返回。\n\n请求: GET /trade/get_order_detail\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getOrderDetail\n\nPath 参数:\n  无\nQuery 参数:\n  --order_id <string> [必填] 下单流程返回的内部订单标识。\n  --order_no <string> [可选] 可选的券商侧订单号。\n  --is_history <boolean> [可选] 是否从历史订单集合中查询。\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiOrderDetailApiResponse - 查询成功，`data` 中返回订单详情。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "GET",
    "path": "/trade/get_order_fee_detail",
    "operationId": "getOrderFeeDetail",
    "commandName": "trade get-order-fee-detail",
    "commandPath": [
      "trade",
      "get-order-fee-detail"
    ],
    "displayName": "trade get-order-fee-detail",
    "resource": "get-order-fee-detail",
    "summary": "获取订单费用详情",
    "description": "查询指定订单的费用信息。\n请求 header 需传入 `Authorization: Bearer <token>`。\n成功时仅返回订单 ID、总费用和费用明细。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [
      {
        "name": "order_id",
        "required": true,
        "description": "下单流程返回的内部订单标识。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "order_no",
        "required": false,
        "description": "可选的券商侧订单号。",
        "schemaType": "string",
        "schemaRef": "",
        "tsType": "string",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      },
      {
        "name": "is_history",
        "required": false,
        "description": "是否从历史订单集合中查询。",
        "schemaType": "boolean",
        "schemaRef": "",
        "tsType": "boolean",
        "typeName": "",
        "enumValues": [],
        "itemType": ""
      }
    ],
    "headerParams": [],
    "requestBody": null,
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回订单费用详情。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/OrderFeeDetailApiResponse",
        "tsType": "TradeopenapiOrderFeeDetailApiResponse",
        "typeName": "TradeopenapiOrderFeeDetailApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade get-order-fee-detail\n摘要: 获取订单费用详情\n描述: 查询指定订单的费用信息。\n请求 header 需传入 `Authorization: Bearer <token>`。\n成功时仅返回订单 ID、总费用和费用明细。\n\n请求: GET /trade/get_order_fee_detail\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: getOrderFeeDetail\n\nPath 参数:\n  无\nQuery 参数:\n  --order_id <string> [必填] 下单流程返回的内部订单标识。\n  --order_no <string> [可选] 可选的券商侧订单号。\n  --is_history <boolean> [可选] 是否从历史订单集合中查询。\nHeader 参数:\n  无\nBody:\n  无\n响应:\n  200: TradeopenapiOrderFeeDetailApiResponse - 查询成功，`data` 中返回订单费用详情。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "POST",
    "path": "/trade/order_fee_query",
    "operationId": "orderFeeQuery",
    "commandName": "trade order-fee-query",
    "commandPath": [
      "trade",
      "order-fee-query"
    ],
    "displayName": "trade order-fee-query",
    "resource": "order-fee-query",
    "summary": "查询下单预估费用",
    "description": "在正式下单前预估交易费用。\n请求 header 需传入 `Authorization: Bearer <token>`。\n成功时返回市场、证券代码、数量、价格、费用明细以及总费用。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": {
      "required": true,
      "mediaType": "application/json",
      "schemaRef": "#/components/schemas/OrderFeeQueryRequest",
      "tsType": "TradeopenapiOrderFeeQueryRequest",
      "typeName": "TradeopenapiOrderFeeQueryRequest",
      "requiredProperties": [
        "code",
        "order_side",
        "order_type",
        "quantity"
      ],
      "enumValues": [],
      "itemType": ""
    },
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回费用预估结果。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/OrderFeeQueryApiResponse",
        "tsType": "TradeopenapiOrderFeeQueryApiResponse",
        "typeName": "TradeopenapiOrderFeeQueryApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade order-fee-query\n摘要: 查询下单预估费用\n描述: 在正式下单前预估交易费用。\n请求 header 需传入 `Authorization: Bearer <token>`。\n成功时返回市场、证券代码、数量、价格、费用明细以及总费用。\n\n请求: POST /trade/order_fee_query\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: orderFeeQuery\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  类型: TradeopenapiOrderFeeQueryRequest\n  必填: 是\n  媒体类型: application/json\n  schemaRef: #/components/schemas/OrderFeeQueryRequest\n  必填字段: code, order_side, order_type, quantity\n响应:\n  200: TradeopenapiOrderFeeQueryApiResponse - 查询成功，`data` 中返回费用预估结果。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "POST",
    "path": "/trade/convert_ufg_money_balance",
    "operationId": "convertUfgMoneyBalance",
    "commandName": "trade convert-ufg-money-balance",
    "commandPath": [
      "trade",
      "convert-ufg-money-balance"
    ],
    "displayName": "trade convert-ufg-money-balance",
    "resource": "convert-ufg-money-balance",
    "summary": "不同币种汇率换算",
    "description": "根据源币种、目标币种和金额，基于结算汇率进行换算。\n请求 header 需传入 `Authorization: Bearer <token>`。\n成功时返回换算后的金额。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": {
      "required": true,
      "mediaType": "application/json",
      "schemaRef": "#/components/schemas/ConvertUfgMoneyBalanceRequest",
      "tsType": "TradeopenapiConvertUfgMoneyBalanceRequest",
      "typeName": "TradeopenapiConvertUfgMoneyBalanceRequest",
      "requiredProperties": [
        "from_money_type",
        "to_money_type",
        "balance"
      ],
      "enumValues": [],
      "itemType": ""
    },
    "responses": [
      {
        "statusCode": "200",
        "description": "换算成功，`data` 中返回换算结果。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ConvertUfgMoneyBalanceApiResponse",
        "tsType": "TradeopenapiConvertUfgMoneyBalanceApiResponse",
        "typeName": "TradeopenapiConvertUfgMoneyBalanceApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade convert-ufg-money-balance\n摘要: 不同币种汇率换算\n描述: 根据源币种、目标币种和金额，基于结算汇率进行换算。\n请求 header 需传入 `Authorization: Bearer <token>`。\n成功时返回换算后的金额。\n\n请求: POST /trade/convert_ufg_money_balance\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: convertUfgMoneyBalance\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  类型: TradeopenapiConvertUfgMoneyBalanceRequest\n  必填: 是\n  媒体类型: application/json\n  schemaRef: #/components/schemas/ConvertUfgMoneyBalanceRequest\n  必填字段: from_money_type, to_money_type, balance\n响应:\n  200: TradeopenapiConvertUfgMoneyBalanceApiResponse - 换算成功，`data` 中返回换算结果。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  },
  {
    "namespace": "trade",
    "specTitle": "trade",
    "sourceFile": "tradeopenapi.yaml",
    "baseUrl": "https://securities-open-api.t2.test.noahgrouptest.com",
    "method": "POST",
    "path": "/trade/query_push_data",
    "operationId": "queryPushData",
    "commandName": "trade query-push-data",
    "commandPath": [
      "trade",
      "query-push-data"
    ],
    "displayName": "trade query-push-data",
    "resource": "query-push-data",
    "summary": "查询推送数据",
    "description": "查询 sec-trade 推送数据。\n请求 header 需传入 `Authorization: Bearer <token>`。\n成功时返回底层推送记录列表。\n",
    "tags": [
      "Trade"
    ],
    "pathParams": [],
    "queryParams": [],
    "headerParams": [],
    "requestBody": {
      "required": true,
      "mediaType": "application/json",
      "schemaRef": "#/components/schemas/QueryPushDataRequest",
      "tsType": "TradeopenapiQueryPushDataRequest",
      "typeName": "TradeopenapiQueryPushDataRequest",
      "requiredProperties": [
        "init_date",
        "begin_serial_no",
        "end_serial_no"
      ],
      "enumValues": [],
      "itemType": ""
    },
    "responses": [
      {
        "statusCode": "200",
        "description": "查询成功，`data` 中返回推送数据列表。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/PushDataListApiResponse",
        "tsType": "TradeopenapiPushDataListApiResponse",
        "typeName": "TradeopenapiPushDataListApiResponse"
      },
      {
        "statusCode": "400",
        "description": "请求参数非法或业务参数格式不符合要求。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "404",
        "description": "请求已处理，但未查询到对应业务数据。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "500",
        "description": "服务端发生未预期异常。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      },
      {
        "statusCode": "502",
        "description": "下游 RPC 服务调用失败，或下游返回失败状态。",
        "mediaType": "application/json",
        "schemaRef": "#/components/schemas/ApiFailureResponse",
        "tsType": "TradeopenapiApiFailureResponse",
        "typeName": "TradeopenapiApiFailureResponse"
      }
    ],
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "inspectText": "命令: trade query-push-data\n摘要: 查询推送数据\n描述: 查询 sec-trade 推送数据。\n请求 header 需传入 `Authorization: Bearer <token>`。\n成功时返回底层推送记录列表。\n\n请求: POST /trade/query_push_data\n命名空间: trade\n来源规范: tradeopenapi.yaml\n默认 Base URL: https://securities-open-api.t2.test.noahgrouptest.com\noperationId: queryPushData\n\nPath 参数:\n  无\nQuery 参数:\n  无\nHeader 参数:\n  无\nBody:\n  类型: TradeopenapiQueryPushDataRequest\n  必填: 是\n  媒体类型: application/json\n  schemaRef: #/components/schemas/QueryPushDataRequest\n  必填字段: init_date, begin_serial_no, end_serial_no\n响应:\n  200: TradeopenapiPushDataListApiResponse - 查询成功，`data` 中返回推送数据列表。\n  400: TradeopenapiApiFailureResponse - 请求参数非法或业务参数格式不符合要求。\n  404: TradeopenapiApiFailureResponse - 请求已处理，但未查询到对应业务数据。\n  500: TradeopenapiApiFailureResponse - 服务端发生未预期异常。\n  502: TradeopenapiApiFailureResponse - 下游 RPC 服务调用失败，或下游返回失败状态。\n鉴权:\n  {\"bearerAuth\":[]}"
  }
]

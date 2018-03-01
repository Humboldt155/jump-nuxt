import Vuex from 'vuex'


const excludeAtt = [
  'Current national selling price has a promotion',
  'Язык упаковки',
  'Код ОКПД',
  'International ID',
  'Тип поставщика',
  'Source country code',
  'Тип AEE:',
  'На какой склад?',
  'Название',
  'Модель продукта',
  'Срок действия серт. пожарн. безоп. (до)',
  'Производство Европейский Союз',
  'Unit capacity',
  'Current national selling price, taking into account the national promotions, including VAT',
  'Current standard national selling price (not taking into account the promotions), including VAT',
  'Current standard store selling price (not taking into account the promotions), including VAT',
  'Current store selling price has a promotion',
  'Current store selling price, taking into account the store promotions, including VAT',
  'Administrative label',
  'Available for sale stock',
  'Base VAT code of the product for a specific store',
  'Category ID of the management nomenclature',
  'Customer short label',
  'Date when the product status will be change to "to be removed"',
  'Date when the storage of the product in warehouse is stopped',
  'Department ID of the management nomenclature',
  'Enabled GTIN values',
  'GTIN links',
  'IS eligible for web publication?',
  'Is a LM store brand ?',
  'Is a store brand ?',
  'Is new ?',
  'Is ranged product ?',
  'Last store stock update date',
  'Last update date',
  'Letter range (Gamme)',
  'Link to the base VAT code of the product',
  'Link to the selling prices currency',
  'Logistic depth',
  'Logistic height',
  'Logistic net weight',
  'Номер модели',
  'Logistic width',
  'Management maturity level',
  'Maturity level quality',
  'Next standard national selling price (not taking into account the promotions), including VAT',
  'Next standard store selling price (not taking into account the promotions), including VAT',
  'Price repartition per quartile',
  'Product status',
  'Product typology',
  'Publication maturity level',
  'Re-stocking',
  'Re-stocking recommendation',
  'Sale status for the product',
  'Selling prices currency',
  'Start date of the next standard national selling price (not taking into account the promotions)',
  'Start date of the next standard store selling price (not taking into account the promotions)',
  'Sub-category ID of the management nomenclature',
  'Sub-department ID of the management nomenclature',
  'Substitution Products',
  'Unit sale (for consumer)',
  'Web publishing real status coming from publishing system',
  'Квартиль',
  'Классификация',
  'Короткое наименование товара для клиента',
  'Международ. Клас 1',
  'Модель Адео',
  'Область распространения',
  'Поток',
  'Стоп-Заказ',
  'Тип гаммы',
  'Ценник',
  'Центральный сток',
  'Additional links to accessory products',
  'Additional links to consumables',
  'Additional links to customer purchases',
  'Additional links to implementations',
  'Additional links to maintenance',
  'Additional links to services',
  'Additional links to tools',
  'Amount of discount on the unit price, including VAT for the next (or current) store promotion',
  'Capacity quantity',
  'Current store selling price alternative capacity unit code',
  'Current store selling price, expressed by alternative capacity unit',
  'Distribution region',
  'End date of the next (or current) store promotion',
  'Flash sale category',
  'Gap code of the next (or current) store promotion',
  'Identifier of the commercial operation (OPECOM) linked to the next (or current) store promotion',
  'Is 20/80 ?',
  'Is part of composition ?',
  'Links from product to samples',
  'New unit price (including VAT) for the next (or current) store promotion',
  'Percentage of discount of the next (or current) store promotion',
  'Price category',
  'Publication maturity level',
  'Complementary products (cross sell)',
  'Image',
  'Searchable',
  'Visible',
  'Срок действия санит. епидем. (до)',
  'Срок действия сертиф. соотв.(до)',
  '№ Санитарно епидемиологич. заключение',
  '№ Сертификат пожарной безопасности',
  '№ Сертификата соответствия',
  'LAD Category',
  'Is editable selling price by store?',
  'Is the product removed ?',
  'ADR Risk classification',
  'Expiration date category',
  'Number of package (if multi package product)',
  'Specific transport family',
  'Start date of the next (or current) store promotion',
  'Type of discount for the next (or current) store promotion',
  'Comment for order lock reason',
  'Order lock reason',
  'Sale lock reason',
  'Link from product to sample',
  'Store stock recommendation',
]

const firstCols = ['Код продукта', 'Название на сайте', 'Отдел', 'Дата AVS', 'Описание']

const att_code_slice = '/foundation/v2/attributes/'.length

const createStore = () => {
  return new Vuex.Store({

    state: {
      products: [],
      modelId: '',
      model: [],
      modelOPUS: [],
      columns: [],
      fields: [],
      models: [],
    },

    mutations: {
      setModel(state, model) {
      },
      setModelId(state, modelId) {
        state.modelId = modelId
      },
      setProducts(state, products) {
        state.products = products
      },
      setModelOPUS(state, modelOPUS) {
        state.modelOPUS = modelOPUS
      },
      setColumns(state, columns) {
        state.columns = columns
      },
      setFields(state, fields) {
        state.fields = fields
      }
    },

    actions: {
      setModel(vuexContext, model) {
        vuexContext.commit('setModel', model)
      },
      setModelId(vuexContext, modelId) {
        vuexContext.commit('setModelId', modelId)
      },
      setProducts(vuexContext, products) {
        // Финальный лист всех продуктов в формате {key: value}
        let productsNew = []

        // Временный сет, в котором будем хранить все возможные значения атрибутов
        let att = new Set()

        // Проходим циклом через все продукты, которые получили из БД Опуса
        for (let i = 0; i < products.length; i++) {

          //Создаем объект, в котором будем хранить аттрибуты и значения выбранного продукта
          let product = {}

          // Лист всех атрибутов выбранного продукта
          let attributes = products[i].attribute
          for (let j = 0; j < attributes.length; j++) {
            let att_name = attributes[j].displayName

            // Пропускаем все атрибуты, находящиеся в списке 'excludeAtt'
            if (excludeAtt.includes(att_name)) { continue }

            // Вырезаем код атрибута из параметра href
            let att_code = 'ATT_'.concat(attributes[j].href.slice(att_code_slice)).split('@')[0]
            if (att_code === 'ATT_maturityLevelPublication') { continue }
            if (att_code === 'ATT_marketingDescription') { continue }
            let att_concat = att_code.concat(" - ", att_name)

            if (att_code === 'ATT_logistic-grossWeight') { att_concat = 'Вес, кг' }
            if (att_code === 'ATT_productID') { att_concat = 'Код продукта' }
            if (att_code === 'ATT_3') { att_concat = 'Отдел' }
            if (att_code === 'ATT_6') { att_concat = 'Дата AVS' }
            if (att_code === 'ATT_12963') { att_concat = 'Название на сайте' }
            if (att_code === 'ATT_marketingDescription') { att_concat = 'Описание' }
            if (att_code === 'ATT_01022') { att_concat = 'Описание' }

            let att_value = attributes[j].value[0]
              product[att_concat] = att_value
              att.add(att_concat)
          }
          productsNew.push(product)
        }

        // Вставляем пустые значения по тем артикулам, которые не заполнены
        for (let i = 0; i < productsNew.length; i++) {
          let product = productsNew[i]
          for (let key of att) {
            if (!(key in product)) {
              if (key === 'Описание') {
                productsNew[i][key] = "Нет описания"
              }
              else {
                productsNew[i][key] = ""
              }
            }
          }
        }
        let columns = ['Код продукта', 'Название на сайте', 'Отдел', 'Дата AVS', 'Описание']
        let fields = [
          {
            key: 'Код продукта',
            label: 'Код продукта',
            sortable: true
          },
          {
            key: 'Название на сайте',
            label: 'Название на сайте ________________________________________________',
            sortable: true
          },
          {
            key: 'Отдел',
            label: 'Отдел',
            sortable: true
          },
          {
            key: 'Дата AVS',
            label: 'Дата AVS',
            sortable: true
          },
          'Описание'
        ]
        for (let key of att) {
            if (!(firstCols.includes(key))) {
              columns.push(key)
              fields.push({
                key: key,
                label: key.concat(' __________________________________'),
                sortable: true
              })
            }
          }

        vuexContext.commit('setColumns', columns)
        vuexContext.commit('setFields', fields)
        vuexContext.commit('setProducts', productsNew)
      },

      setModelOPUS(vuexContext, ModelOPUS) {
        vuexContext.commit('setModelOPUS', ModelOPUS)
      }
    },

    getters: {
      model(state) {
        return state.model
      },
      products(state) {
        return state.products
      },
      modelId(state) {
        return state.modelId
      },
      modelOPUS(state) {
        return state.modelOPUS
      },
      columns(state) {
        return state.columns
      },
      fields(state) {
        return state.fields
      }
    }
  })
}

export default createStore

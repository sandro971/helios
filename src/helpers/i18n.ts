import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import intervalPlural from 'i18next-intervalplural-postprocessor';
import translationEn from '../languages/en'
import translationFr from '../languages/fr'
import moment from 'moment';
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')

i18n.use(initReactI18next)
	.use(intervalPlural)
	.init({
		resources: {
			en: { translation: translationEn },
			fr: { translation: translationFr }
		},
		lng: 'fr',
		fallbackLng: 'en',
		interpolation: { escapeValue: false }
	})


export default i18n
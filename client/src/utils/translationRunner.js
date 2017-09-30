const manageTranslations = require('react-intl-translations-manager').default;

// es2015 import
// import manageTranslations from 'react-intl-translations-manager';

manageTranslations({
  messagesDirectory: '../../output/messages.json',
  translationsDirectory: 'build/locales/',
  languages: ['de'], // any language you need
});

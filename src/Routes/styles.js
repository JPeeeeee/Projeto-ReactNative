import theme from "../Global/theme"

const headerStyle = {
    Login: {
      title: 'Faça login.',
      headerStyle:{
        backgroundColor: theme.colors.creamWhite,
      },
      headerTitleStyle: {
        color: theme.colors.graphite,
        fontWeight: theme.fonts.media,
        fontSize: 20
      },
      headerTitleAlign: 'center',
      statusBarTranslucent: true
    },

    Home: {
        title: 'Você está em casa.',
        headerStyle:{
          backgroundColor: theme.colors.creamWhite,
        },
        headerTitleStyle: {
          color: theme.colors.graphite,
          fontWeight: theme.fonts.media,
          fontSize: 20
        },
        headerTitleAlign: 'center',
        statusBarTranslucent: true
    },

    Cadastro: {
        title: 'Efetue o cadastro.',
        headerStyle:{
          backgroundColor: theme.colors.creamWhite,
        },
        headerTitleStyle: {
          color: theme.colors.graphite,
          fontWeight: theme.fonts.media,
          fontSize: 20
        },
        headerTitleAlign: 'center',
        statusBarTranslucent: true
    }
}

export default headerStyle
import theme from "../Global/theme"

const headerStyle = {
    Login: {
      title: 'Faça o Login.',
      headerStyle:{
        backgroundColor: theme.colors.creamWhite,
      },
      headerTitleStyle: {
        color: theme.colors.graphite,
        fontSize: 20,
        fontFamily: theme.fonts.bold
      },
      headerTitleAlign: 'center',
      statusBarTranslucent: true
    },

    Home: {
        title: '20 gatos massa',
        headerStyle:{
          backgroundColor: theme.colors.creamWhite,
        },
        headerTitleStyle: {
          color: theme.colors.graphite,
          fontSize: 20,
          fontFamily: theme.fonts.bold
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
          fontSize: 20,
          fontFamily: theme.fonts.bold
        },
        headerTitleAlign: 'center',
        statusBarTranslucent: true
    }
}

export default headerStyle
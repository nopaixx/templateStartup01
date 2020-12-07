const logInRequest = async (user, pwd) => {
  return {
    success: true,
    data: {
      userName: 'user1',
      email: 'user@holaluz.com',
      metadata: {
        zohoToken: 'OIUYTRE6543GFDSHGFDS45321FDS',
      },
    },
  }
}

const logOut = () => {}
export { logInRequest, logOut }

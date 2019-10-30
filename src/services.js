const baseUrl = 'http://localhost:3001/users';

export const loginService = async ({ email, password }) => {
  try {
    const response = await fetch(`${baseUrl}?email=${email}`);
    const result = await response.json();

    return new Promise(async (resolve, reject) => {
      if (!result.length) {
        return reject({ email: 'Email does not exist' });
      }

      const [user] = result;
      if (user.password !== password) {
        return reject({ password: 'Wrong password' });
      }

      if (!response.ok) {
        return reject({ server: "It's not you" });
      }

      const { id, firstName, lastName } = user;

      // change the auth state of the user server-side
      await fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isAuthenticated: true }),
      });

      return resolve({
        id,
        firstName,
        lastName,
        isAuthenticated: true,
      });
    });
  } catch (err) {
    console.log('Login service error', err);
    return new Promise((resolve, reject) =>
      reject({ error: 'Server not responding' })
    );
  }
};

export const logoutService = async id => {
  try {
    await fetch(`${baseUrl}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isAuthenticated: false }),
    });
  } catch (err) {
    console.log('Logout service error', err);
  }
};

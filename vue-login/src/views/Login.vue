<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-12 col-sm-8">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="input-group">
            <span
              class="input-group-text"
              id="basic-addon1"
            ><svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM16.33 2L10 6.75L3.67 2H16.33ZM17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3.25L9.4 8.8C9.5731 8.92982 9.78363 9 10 9C10.2164 9 10.4269 8.92982 10.6 8.8L18 3.25V13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14Z"
                  fill="#777777"
                  fill-opacity="0.6"
                />
              </svg>
            </span>
            <input
              type="email"
              class="form-control"
              v-model.trim.lazy="$v.user.email.$model"
              placeholder="Digite o seu e-mail"
              aria-label="Digite o seu e-mail"
              aria-describedby="basic-addon1"
            >
          </div>
          <small
            class="text-danger"
            v-if="!$v.user.email.email"
          >
            Digite um e-mail válido.
          </small>
          <div class="input-group mt-3">
            <span class="input-group-text">
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 11C7.69555 10.9964 7.39732 11.0862 7.14544 11.2573C6.89357 11.4284 6.70015 11.6725 6.59121 11.9568C6.48228 12.2411 6.46306 12.552 6.53615 12.8476C6.60923 13.1431 6.77111 13.4092 7 13.61V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V13.61C9.22889 13.4092 9.39077 13.1431 9.46385 12.8476C9.53694 12.552 9.51772 12.2411 9.40879 11.9568C9.29985 11.6725 9.10643 11.4284 8.85456 11.2573C8.60268 11.0862 8.30445 10.9964 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z"
                  fill="#777777"
                  fill-opacity="0.6"
                />
              </svg>
            </span>
            <input
              type="password"
              class="form-control"
              id="input-password"
              v-model.trim.lazy="$v.user.password.$model"
              placeholder="Digite a sua senha"
              aria-label="Digite a sua senha"
            >
            <span class="input-group-text show-password">
              <button
                class="btn"
                @click="showPassword"
              >
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.818 15 3.236 10.987 1.743 9.038C1.51238 8.74113 1.38719 8.37592 1.38719 8C1.38719 7.62408 1.51238 7.25887 1.743 6.962C3.236 5.013 6.818 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
                    stroke="#4ECB71"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
                    stroke="#4ECB71"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </span>
          </div>
          <small
            class="text-danger"
            v-if="!$v.user.password.minLength"
          >
            A senha deve conter no mínimo 6 carateres.
          </small>
          <router-link
            to="/esqueci-senha"
            class="forgot-password"
          >Esqueci minha senha</router-link>
          <button
            class="btn btn-submit shadow-none mt-3"
            @click="submit"
          >
            <div
              class="btn-sumbit-text"
              v-if="!isLoading"
            >Entrar</div>
            <div v-else>
              <div class="loader">Loading...</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { required, email, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      isLoading: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  validations () {
    return {
      user: {
        email: { required, email },
        password: { required, minLength: minLength(6) }
      }
    }
  },
  computed: {
    ...mapState({
      serverUser: state => state.user
    })
  },
  methods: {
    ...mapActions([
      'searchUser'
    ]),
    showPassword () {
      let input = document.getElementById("input-password");
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    },
    async submit () {
      this.isLoading = true
        this.$v.$touch()
        if (this.$v.$invalid) {
          alert('Erro ao tentar conectar, verifique os campos e tente novamente!')
          this.isLoading = false
        } else {
          // eslint-disable-next-line no-unused-vars
          const user = await this.searchUser(this.user.email)
          if (this.serverUser === '') {
            alert('Email não cadastrado.')
            this.isLoading = false
          } else if (this.serverUser.email == this.user.email && this.serverUser.senha == this.user.password) {
            alert('Login efetuado com sucesso!')
            this.isLoading = false
          } else {
            alert('Senha incorreta.')
            this.isLoading = false
          }
        }
    }
  },
  mounted () {
    document.title = "Login"
  }
}
</script>

<style lang="scss">
.input-group {
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(119, 119, 119, 0.3);
  min-width: 270px;
  span {
    background-color: white;
    border: none;
    button {
      border: none;
    }
    button:focus {
      box-shadow: none;
    }
  }
  input {
    border: none;
    font-size: 14px;
    color: #777777;
  }
  input:focus {
    box-shadow: none;
  }
  .show-password {
    padding: 0;
    svg {
      cursor: pointer;
    }
  }
}
.input-group input:focus {
  border: 1px solid #4ad395;
}
.forgot-password {
  color: #4ad395;
  font-size: 14px;
  font-weight: 500;
  margin-left: auto;
  text-decoration: none;
}
.forgot-password:hover {
  color: #4ad395;
}
.btn-submit {
  background: #4ad395;
  width: 50%;
  height: 50px;
  .btn-sumbit-text {
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
}

// loading
.loader {
  font-size: 10px;
  margin: 7px auto;
  text-indent: -9999em;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.loader:after {
  background: #4ad395;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
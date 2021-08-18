<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-12 col-sm-8">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <p class="text-new-password me-auto">Crie uma nova senha</p>
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
              placeholder="Digite uma senha forte"
              aria-label="Digite uma senha forte"
            >
            <span class="input-group-text show-password">
              <button
                class="btn"
                @click="showPassword('input-password')"
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
              id="input-confirm-password"
              v-model.trim.lazy="$v.user.confirmPassword.$model"
              placeholder="Digite a senha novamente"
              aria-label="Digite a senha novamente"
            >
            <span class="input-group-text show-password">
              <button
                class="btn"
                @click="showPassword('input-confirm-password')"
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
            v-if="user.confirmPassword && user.password !== user.confirmPassword"
          >
            As senhas digitadas não são iguais.
          </small>
          <div class="buttons-submit mt-4 d-flex justify-content-center">
            <button
              class="btn btn-submit"
              :disabled="isLoading"
              @click="submit"
            >
              <div v-if="!isLoading">Enviar</div>
              <div v-else>
                <div class="loader">Loading...</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'ForgotPassword',
  data () {
    return {
      isLoading: false,
      user: {
        password: '',
        confirmPassword: ''
      }
    }
  },
  validations () {
    return {
      user: {
        password: { required, minLength: minLength(6) },
        confirmPassword: { required, sameAsPassword: sameAs('password') }
      }
    }
  },
  methods: {
    showPassword (id) {
      let input = document.getElementById(id);
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    },
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.$v.$touch()
        if (this.$v.$invalid) {
          console.log(this.$v)
          alert('Erro ao tentar conectar, verifique os campos e tente novamente!')
          this.isLoading = false
        } else {
          alert('form enviado')
          this.isLoading = false
          this.$router.push('/login')
        }
      }, 1000)
    }
  },
  mounted () {
    document.title = "Nova Senha"
  }
}
</script>

<style lang="scss" scoped>
p.text-new-password {
  padding-top: 42px;
  font-size: 16px;
  font-weight: 600;
  color: #777777;
}
.buttons-submit {
  width: 100%;
  button {
    background: #4ad395;
    width: 60%;
    height: 50px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border: none;
  }
  button:focus {
    box-shadow: none;
  }
  button:hover {
    color: white;
  }
  button.btn-back {
    font-weight: 400;
    color: #777777;
    background: #e5e5e5;
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
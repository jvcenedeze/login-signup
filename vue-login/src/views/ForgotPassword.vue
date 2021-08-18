<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-12 col-sm-8">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <p class="text-forgot-header">Digite seu e-mail de cadastro</p>
          <p class="text-forgot-body">Você receberá, em seu e-mail, o link para redefinir a sua senha</p>
          <div class="input-group mt-1">
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
              placeholder="Digite seu e-mail cadastrado"
              aria-label="Digite seu e-mail cadastrado"
              aria-describedby="basic-addon1"
            >
          </div>
          <small
            class="text-danger"
            v-if="!$v.user.email.email"
          >
            Digite um e-mail válido.
          </small>
          <div class="buttons-submit mt-3 d-flex justify-content-between">
            <button
              class="btn btn-back"
              :disabled="isLoading"
              @click="hasHistory() ? $router.go(-1) : $router.push('/')"
            >
              Voltar
            </button>
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

import { required, email } from 'vuelidate/lib/validators'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ForgotPassword',
  data () {
    return {
      isLoading: false,
      user: {
        email: ''
      }
    }
  },
  validations () {
    return {
      user: {
        email: { required, email }
      }
    }
  },
  computed: {
    ...mapState({
      userEmail: state => state.userEmail
    })
  },
  methods: {
    ...mapActions([
      'searchEmail'
    ]),
    hasHistory () {
      return window.history.length > 2
    },
    async submit () {
      this.isLoading = true
        this.$v.$touch()
        if (this.$v.$invalid) {
          alert('Erro ao tentar conectar, verifique os campos e tente novamente!')
          this.isLoading = false
        } else {
          // eslint-disable-next-line no-unused-vars
          const email = await this.searchEmail(this.user.email)
          if (this.userEmail === '') {
            alert('Email não cadastrado.')
            this.isLoading = false
          } else {
            alert(`Redefinição de senha enviado para ${this.userEmail}`)
            this.isLoading = false
          }
        }
    }
  },
  mounted () {
    document.title = "Esqueci a Senha"
  }
}
</script>

<style lang="scss" scoped>
p.text-forgot-header {
  padding-top: 42px;
  font-size: 16px;
  font-weight: 600;
  color: #777777;
}
p.text-forgot-body {
  font-size: 16px;
  font-weight: 400;
  color: #777777;
}
.buttons-submit {
  width: 100%;
  button {
    background: #4ad395;
    width: 45%;
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
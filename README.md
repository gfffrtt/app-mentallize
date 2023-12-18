# Aplicativo Mentallize 🧠

Repositório oficial do aplicativo de psicanálise [mentallize](https://app.mentallize.com).

## ⚙️ Como rodar?

> 📌 É necessário que o SO seja uma distribuição Linux

Primeiro tenha certeza de que você tenha docker instalado em sua máquina (use o comando `docker ps` para verificar).

### 👨‍💻 **Desenvolvimento**:

- Para subir contâiners, e para contâiners:

```bash
$ make run
$ make migrate

$ make stop
```

### 🚀 **Produção**:

- Para subir contâiners, e para contâiners:

```bash
$ make deploy
$ make migrate

$ make shutdown
```

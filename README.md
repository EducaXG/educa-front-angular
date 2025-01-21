# Educa Front Angular

Este projeto é uma aplicação frontend construída com Angular. O objetivo principal é fornecer uma interface de usuário funcional e responsiva para uma plataforma educacional.

---

## **Configuração do Projeto**

### **Dependências principais**
- **Angular**: Framework para construção de aplicações web.
- **Tailwind CSS**: Utilizado para estilização da interface.
- **Prettier**: Ferramenta para padronização de código.
- **ESLint**: Ferramenta para análise estática de código.

---

## **Requisitos para executar o projeto**

Certifique-se de que você tenha as seguintes ferramentas instaladas:

1. [Node.js](https://nodejs.org/)
2. [Angular CLI](https://angular.io/cli)
3. Um gerenciador de pacotes como `npm` ou `yarn`

### **Instalação do Projeto**

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd educa-front-angular
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

A aplicação estará disponível em: `http://localhost:4200`

---

## **Principais Comandos Angular**

### **Criação de Componentes**
Para criar um novo componente, use o comando:
```bash
ng generate component nome-do-componente
```
Ou:
```bash
ng g c nome-do-componente
```
O Angular criará os arquivos relacionados ao componente em uma pasta específica.

### **Criação de Services**
Para criar um novo serviço, use o comando:
```bash
ng generate service nome-do-service
```
Ou:
```bash
ng g s nome-do-service
```
Isso criará um arquivo de serviço pronto para ser injetado em outros componentes ou módulos.

### **Criação de Módulos**
Para criar um novo módulo, utilize o comando:
```bash
ng generate module nome-do-modulo
```
Ou:
```bash
ng g m nome-do-modulo
```
Módulos ajudam a organizar sua aplicação em partes menores e reutilizáveis.

### **Criação de Diretivas**
Para criar uma diretiva personalizada:
```bash
ng generate directive nome-da-diretiva
```
Ou:
```bash
ng g d nome-da-diretiva
```

### **Criação de Pipes**
Para criar um pipe:
```bash
ng generate pipe nome-do-pipe
```
Ou:
```bash
ng g p nome-do-pipe
```

### **Criação de Guards**
Guards são usados para controlar o acesso a rotas. Para criar um:
```bash
ng generate guard nome-do-guard
```
Ou:
```bash
ng g g nome-do-guard
```

---

## **Tailwind CSS**

Este projeto utiliza o Tailwind CSS para estilização. Para criar estilos, utilize as classes utilitárias diretamente nos templates dos componentes. A configuração do Tailwind está no arquivo `tailwind.config.js`.

No arquivo global `styles.scss`, as diretivas do Tailwind estão configuradas:
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## **Formatador e Linter**

### **Prettier**
O Prettier está configurado para formatar o código automaticamente ao salvar. Para rodar manualmente:
```bash
npx prettier --write .
```

### **ESLint**
O ESLint é usado para manter a consistência do código. Para verificar erros:
```bash
npx eslint .
```

---

## **Estrutura do Projeto**

```plaintext
src/
├── app/               # Componentes principais
├── assets/            # Recursos estáticos (imagens, fontes, etc.)
├── environments/      # Configurações de ambiente
├── styles.scss        # Estilos globais (inclui Tailwind)
├── main.ts            # Arquivo principal de inicialização
├── angular.json       # Configuração do Angular CLI
├── package.json       # Dependências do projeto
```

---

## **Contribuição**

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Descrição das alterações"
   ```
4. Faça o push da branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request para revisão.

---

## **Licença**
Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.


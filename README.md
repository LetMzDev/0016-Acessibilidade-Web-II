# Estudando mais sobre acessibilidade web

## Bibliotecas
### inert atributte
- [`inert.js`](https://github.com/WICG/inert)
	- Uma propriedade de HTML5 que permite tornar elementos na página inacessíveis para interações de usuários e tecnologias assistivas, como leitores de tela. Quando um elemento está com o atributo inert, ele se comporta como se estivesse "desativado". Isso significa que:
		- O elemento não pode ser focado ou interagido por meio do teclado ou mouse.
		- Tecnologias assistivas ignoram completamente o elemento.
		- Eventos de clique e outros eventos de interação não serão disparados no elemento.

	- O atributo inert é útil em situações onde você precisa desativar interações temporariamente, como quando exibe um modal na tela e quer garantir que os usuários só possam interagir com o modal, ignorando o restante da página até que ele seja fechado.

	- **Acessibilidade**: Garantir que o inert seja removido adequadamente quando não for mais necessário, para não comprometer a experiência de usuários de tecnologias assistivas.
	- **Compatibilidade**: Como o inert não é suportado nativamente em todos os navegadores, a biblioteca inert-polyfill é essencial para garantir funcionalidade consistente.
___
- [SweetAlert2](https://sweetalert2.github.io/)
	- Permite criar caixas de diálogo (modais) personalizadas e atraentes em suas aplicações web.
	- Ela oferece uma ampla variedade de opções de personalização, permitindo que você crie alertas, confirmações e mensagens de erro com um design elegante e interativo.
___
- [Repositório inert do Google](https://github.com/GoogleChrome/inert-polyfill)
___
- [mailcheck][https://github.com/mailcheck/mailcheck]
___

## Outros
- [Padrões de componentes acessíveis do eBay](https://opensource.ebay.com/mindpatterns/)
- [Boas práticas em relação ao modal, recomendadas pela W3C](https://www.w3.org/WAI/ARIA/apg/#dialog_modal)
- [Exemplo de como fazer um modal, pela W3C](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/)
- [A11Y Style Guide](https://a11y-style-guide.com/style-guide/)
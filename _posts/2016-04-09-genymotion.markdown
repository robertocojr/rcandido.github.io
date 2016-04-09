---
published: true
title: Genymotion
layout: post
---
Hoje tive um problema para instalar o Genymotion no Debian 8.

Ontem começei a instalar o Genymotion em meu note para estudar um pouco de android, porém não conseguia executar o emulador de forma alguma. Ocorria um erro informando que não conseguiu obter o IP via DHCP.

Começou minha saga pela internet tentando solucionar esse problema, encontrei algumas soluções, basicamente uma configuração na VirtualBox (habilitar o DHCP no driver de rete virtual e liberar o promiscuous mode para VMs), uma outra solução era efetuar o downgrade da VirtualBox. Tentei as duas, primeiramente a cofiguração que já estava da foma correta, em um segundo momente o downgrade da versão 5 para a 4.3.* onde testei várias revisões novamente sem sucesso.
Então notei que quando eu criava um novo dispositivo ocorria um erro antes do problema com o IP.

Veja os erros:

- Erro informando que a tecnologia de virtualização não estáva habilitada na BIOS.
![Erro BIOS]({{ site.baseurl }}/images/20160408_erro-bios.png)
{: center }

- Erro informando que o dispositivo virtual não tem um endereço de ip.
![Erro IP]({{ site.baseurl }}/images/20160408_erro-ip.png)
{: center }

O erro de virtualização é infinitamente mais específico que o problema com IP, na mensagem já tenho a solução. Demorei a notar esse problema por essa popup sumir após alguns segundos acabava nem notando que ocorreu esse erro.


## Solução

Basta seguir a sugestão da popup e habilitar na BIOS, no meu caso a opção se chamava "Intel Virtual Technology" provavelmente será a mesma para vocês, ou algo bem parecido. Veja algumas imagens do meu Bios Manager:

- Configuração:
![Configuração BIOS]({{ site.baseurl }}/images/20160408_configuracao.png)
{: center }

- Descrição da Configuração:
![Descrição da Configuração]({{ site.baseurl }}/images/20160408_configuracao-descricao.png)
{: center }

Feito isso consegui abrir o emulador com sucesso. Veja que bonito :)
![Emulador Genymotion]({{ site.baseurl }}/images/20160408_genymotion-emulador.png)
{: center }

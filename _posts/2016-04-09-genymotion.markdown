---
published: false
title: Genymotion
layout: post
---
Hoje tive um problema para instalar o Genymotion no Debian 8.

Ontem começei a instalar o Genymotion em meu note para estudar um pouco de android, porém não conseguia executar o emulador de forma alguma. Ocorria um erro informando que não conseguiu obter o IP via DHCP. 

Começou minha saga pela internet tentando solucionar esse problema, encontrei algumas soluções, basicamente uma configuração na VirtualBox (habilitar o DHCP no driver de rete virtual e liberar o promiscuous mode para VMs), uma outra solução era efetuar o downgrade da VirtualBox. Tentei as duas, primeiramente a cofiguração que já estava da foma correta, em um segundo momente o downgrade da versão 5 para a 4.3.* onde testei várias revisões novamente sem sucesso.
Então notei que quando eu criava um novo dispositivo ocorria um erro antes do problema com o IP.

Veja os erros:
![HTTP inseguro]({{ site.baseurl }}/images/20160408_erro-bios.png)
{: center }
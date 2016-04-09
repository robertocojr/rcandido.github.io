---
published: true
title: Genymotion
layout: post
tags: [genymotion, debian, problema, ip, bios, virtualização, virtualizacao]
categories: [android, ios]
---
Hoje tive um problema para instalar o Genymotion no Debian 8.

Ontem começei a instalar o Genymotion em meu note para estudar um pouco de android, porém não conseguia executar o emulador de forma alguma. Ocorria um erro informando que não conseguiu obter o IP via DHCP.

Começou minha saga pela internet tentando solucionar esse problema, encontrei duas soluções para o problema do IP:
- Corrigir uma configuração na VirtualBox (habilitar o DHCP no driver de rete virtual e liberar o promiscuous mode para VMs);
- Efetuar o downgrade da VirtualBox.

Tentei as duas, primeiramente a cofiguração que já estava da forma correta, em seguida o downgrade da versão 5 para a 4.3.* onde testei várias revisões novamente sem sucesso. Então notei que quando eu criava um novo dispositivo ocorriam dois erros, um informando que a virtualizaçao não estava habilitada na BIOS e outro dizendo que o dispositivo não tinha um ip. Veja os erros:

- Erro informando que a tecnologia de virtualização não estava habilitada na BIOS.
![Erro BIOS]({{ site.baseurl }}/images/20160408_erro-bios.png)
{: center }

- Erro informando que o dispositivo virtual não tem um endereço de ip.
![Erro IP]({{ site.baseurl }}/images/20160408_erro-ip.png)
{: center }

O erro de virtualização é infinitamente mais específico que o problema com IP, na mensagem já tenho a solução. Demorei a notar esse problema por essa popup sumir após alguns segundos, acabava nem notando esse erro.


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

---
layout: base
title: Eventos
permalink: /eventos/
---

# Eventos WKC Uruguay

{% for evento in collections.eventos %}
## {{ evento.data.nombre }}

**📅 {{ evento.data.fecha }}** | **📍 {{ evento.data.lugar }}**

[Ver detalles →]({{ evento.url }})

---

{% endfor %}
<?php if(!defined('KIRBY')) exit ?>

title: Site
pages: default
fields:
  title:
    label: Titre
    type:  text
  description:
    label: Description (SEO)
    type:  textarea
  keywords:
    label: Mot-clés (SEO)
    type:  tags
  ga:
    label: Google Analytics
    placeholder: UA-XXXXX-X
    type: text
  copyright:
    label: Copyright
    type:  textarea
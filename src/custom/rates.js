(function($){$(document).ready(function(){var pathname=window.location.pathname;if(pathname=='/kursy_valut'){jQuery.ajax({url:"/rates/bank_converted.html",dataType:"html",type:"GET",success:function(data){var table=$(data).find('#cours_obl_tbl');$('<div class="big_rates_widget_container"></div>').insertAfter('.short p:eq(0)');$('.big_rates_widget_container').append(table);$('.big_rates_widget_container table').addClass('table table-striped table-hover');$('.big_rates_widget_container table tr td:last-child').removeAttr('style');},});}});})(jQuery);
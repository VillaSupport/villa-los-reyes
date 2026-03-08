import { Directive, ElementRef, Input, Renderer2, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
    selector: '[appMarkdownLinks]',
    standalone: true
})
export class MarkdownLinksDirective {
    private el = inject(ElementRef);
    private renderer = inject(Renderer2);
    private router = inject(Router);

    @Input() set appMarkdownLinks(content: string) {
        if (!content) return;

        // 1. Transformar Markdown [texto](url) a HTML <a>
        // Usamos una clase para identificar que es un link interno
        const html = content.replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a class="inner-link" data-link="$2"">$1</a>'
        );

        // 2. Inyectar el HTML en el elemento
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', html);
    }

    // 3. Escuchar clics en el elemento
    @HostListener('click', ['$event'])
    onClick(event: Event) {
        const target = event.target as HTMLElement;

        // Si el clic fue en uno de nuestros links generados
        if (target.classList.contains('inner-link')) {
            const link = target.getAttribute('data-link');
            if (link) {
                event.preventDefault();
                this.router.navigateByUrl(link); // Navegación interna de Angular
            }
        }
    }
}
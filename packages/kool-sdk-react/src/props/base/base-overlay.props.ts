import type { BaseCardProps } from "./base-card.props";

/**
 * Defines the modal type
 * 
 * mask: places a semi transparent background
 * 
 * none: displays nothing
 */
export type ModalType = 'mask' | 'none';
/**
 * Props applied to all overlay components
 */
export interface BaseOverlayProps<T=HTMLElement> extends BaseCardProps<T> {


    /**
     * === true, disables interacting with background elements
     * 
     * === false, can interact with the overlay and the background elements
     */
    modal?: boolean;

    /**
     * Displays the modal type
     */
    modalType?: ModalType;
}

import { motion } from "framer-motion"

export const containervar = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.2}}

}

export const cardvar = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: 'easeOut'}}
}
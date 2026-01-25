import { solutionsMetadata } from '@/seo/metadata'
import type { Metadata } from 'next'
import SolutionsList from '@/components/sections/SolutionsList'

export const metadata: Metadata = solutionsMetadata

export default function SolutionsPage() {
  return <SolutionsList />
}

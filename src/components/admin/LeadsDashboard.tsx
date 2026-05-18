'use client'

/**
 * 🔐 ADMIN DASHBOARD - Now uses server-side authentication!
 * 
 * What changed:
 * - Password is NO LONGER in this file (was previously visible in frontend code)
 * - Login goes through /api/auth/login which checks server environment variables
 * - Session is stored as HTTP-only cookie (JavaScript can't read it)
 * - All API calls automatically include the session cookie
 * - Session expires after 24 hours
 */

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  UserPlus,
  TrendingUp,
  Clock,
  Trash2,
  RefreshCw,
  LayoutDashboard,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Calendar,
  ArrowUpRight,
  Download,
  FileSpreadsheet,
  LogOut,
  Lock,
  X,
  Eye,
  EyeOff,
  AlertTriangle,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Lead {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  role: string | null
  service: string | null
  message: string | null
  source: string
  status: string
  createdAt: string
  updatedAt: string
}

interface AdminDashboardProps {
  isOpen: boolean
  onClose: () => void
}

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  new: { label: 'New', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
  contacted: { label: 'Contacted', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
  qualified: { label: 'Qualified', color: 'text-purple-700', bg: 'bg-purple-50 border-purple-200' },
  converted: { label: 'Converted', color: 'text-green-700', bg: 'bg-green-50 border-green-200' },
  lost: { label: 'Lost', color: 'text-red-700', bg: 'bg-red-50 border-red-200' },
}

const roleLabels: Record<string, string> = {
  realtor: 'Realtor',
  'loan-officer': 'Loan Officer',
  other: 'Other',
}

export default function AdminDashboard({ isOpen, onClose }: AdminDashboardProps) {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loginLoading, setLoginLoading] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)

  // Check if already authenticated on mount
  useEffect(() => {
    if (isOpen) {
      checkAuth()
    }
  }, [isOpen])

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/verify')
      const data = await res.json()
      setIsAuthenticated(data.authenticated)
      setAuthChecked(true)
    } catch {
      setIsAuthenticated(false)
      setAuthChecked(true)
    }
  }

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/leads')
      if (res.status === 401) {
        // Session expired
        setIsAuthenticated(false)
        toast.error('Session expired. Please log in again.')
        return
      }
      if (res.ok) {
        const data = await res.json()
        setLeads(data.leads || [])
      }
    } catch (err) {
      console.error('Error fetching leads:', err)
      toast.error('Failed to load leads')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      fetchLeads()
    }
  }, [isOpen, isAuthenticated, fetchLeads])

  const handleLogin = async () => {
    if (!passwordInput) {
      toast.error('Please enter a password')
      return
    }
    
    setLoginLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      })

      const data = await res.json()

      if (res.ok) {
        setIsAuthenticated(true)
        setPasswordInput('')
        toast.success('Access granted')
      } else if (res.status === 429) {
        toast.error('Too many attempts. Please wait a moment.', {
          description: `Try again in ${data.retryAfter || 60} seconds`,
        })
      } else {
        toast.error('Incorrect password')
        setPasswordInput('')
      }
    } catch {
      toast.error('Connection error. Please try again.')
    } finally {
      setLoginLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
    } catch {
      // Ignore errors on logout
    }
    setIsAuthenticated(false)
    setPasswordInput('')
    onClose()
    toast.success('Logged out')
  }

  const handleClose = () => {
    onClose()
    // Keep authentication so they don't have to re-enter password
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      if (res.status === 401) {
        setIsAuthenticated(false)
        toast.error('Session expired. Please log in again.')
        return
      }
      if (res.ok) {
        setLeads((prev) =>
          prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
        )
        if (selectedLead?.id === id) {
          setSelectedLead((prev) => (prev ? { ...prev, status } : null))
        }
        toast.success('Status updated')
      }
    } catch (err) {
      console.error('Error updating lead:', err)
    }
  }

  const deleteLead = async (id: string) => {
    try {
      const res = await fetch(`/api/leads?id=${id}`, { method: 'DELETE' })
      if (res.status === 401) {
        setIsAuthenticated(false)
        toast.error('Session expired. Please log in again.')
        return
      }
      if (res.ok) {
        setLeads((prev) => prev.filter((lead) => lead.id !== id))
        if (selectedLead?.id === id) {
          setSelectedLead(null)
          setIsDetailOpen(false)
        }
        toast.success('Lead deleted')
      }
    } catch (err) {
      console.error('Error deleting lead:', err)
    }
  }

  const exportCSV = () => {
    if (leads.length === 0) {
      toast.error('No leads to export')
      return
    }

    const headers = ['Name', 'Email', 'Phone', 'Company', 'Role', 'Service', 'Message', 'Source', 'Status', 'Date']
    const rows = leads.map((lead) => [
      `"${lead.name}"`,
      `"${lead.email}"`,
      `"${lead.phone || ''}"`,
      `"${lead.company || ''}"`,
      `"${roleLabels[lead.role || ''] || lead.role || ''}"`,
      `"${lead.service || ''}"`,
      `"${(lead.message || '').replace(/"/g, '""')}"`,
      `"${lead.source}"`,
      `"${lead.status}"`,
      `"${formatDate(lead.createdAt)}"`,
    ])

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `growthgo-leads-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    URL.revokeObjectURL(url)
    toast.success('CSV exported successfully!')
  }

  const totalLeads = leads.length
  const newLeads = leads.filter((l) => l.status === 'new').length
  const convertedLeads = leads.filter((l) => l.status === 'converted').length
  const conversionRate = totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0
  const realtors = leads.filter((l) => l.role === 'realtor').length
  const loanOfficers = leads.filter((l) => l.role === 'loan-officer').length

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  if (!isOpen) return null

  // Password protection screen
  if (!isAuthenticated) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0F172A]/95 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2563EB]/10 mb-6">
                <Lock className="h-8 w-8 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
                Admin Access
              </h2>
              <p className="text-[#64748B] text-sm">
                Enter the admin password to access the leads dashboard
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                  className="h-12 text-lg rounded-lg border-[#E2E8F0] focus:border-[#2563EB] focus:ring-[#2563EB]/20 pr-12"
                  autoFocus
                  disabled={loginLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <Button
                onClick={handleLogin}
                disabled={loginLoading}
                className="w-full h-12 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold"
              >
                {loginLoading ? (
                  <RefreshCw className="h-5 w-5 animate-spin" />
                ) : (
                  'Access Dashboard'
                )}
              </Button>
            </div>

            <div className="mt-6 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium text-amber-800">Security Notice</p>
                  <p className="text-xs text-amber-700 mt-0.5">
                    Failed login attempts are rate-limited. Your password is never sent to the frontend.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Authenticated dashboard - full screen overlay
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-white overflow-y-auto"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#0F172A] text-white shadow-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563EB]">
                  <LayoutDashboard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">GrowthGo Admin</h1>
                  <p className="text-xs text-slate-400">Leads Dashboard • Secured</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">Session Active</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-300 hover:bg-white/10"
                >
                  <LogOut className="h-4 w-4 mr-1.5" />
                  Logout
                </Button>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 sm:p-5 border-0 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-[#64748B] uppercase tracking-wider">Total Leads</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                  <Users className="h-4 w-4 text-[#2563EB]" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-[#0F172A]">{totalLeads}</p>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-3 w-3 text-[#10B981]" />
                <span className="text-xs text-[#10B981] font-medium">Active</span>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 border-0 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-[#64748B] uppercase tracking-wider">New</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                  <UserPlus className="h-4 w-4 text-amber-600" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-[#0F172A]">{newLeads}</p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="h-3 w-3 text-amber-500" />
                <span className="text-xs text-amber-600 font-medium">Awaiting contact</span>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 border-0 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-[#64748B] uppercase tracking-wider">Converted</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50">
                  <TrendingUp className="h-4 w-4 text-[#10B981]" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-[#0F172A]">{convertedLeads}</p>
              <div className="flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-3 w-3 text-[#10B981]" />
                <span className="text-xs text-[#10B981] font-medium">{conversionRate}% rate</span>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 border-0 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-[#64748B] uppercase tracking-wider">By Role</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50">
                  <Building2 className="h-4 w-4 text-purple-600" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
                {realtors}<span className="text-base text-[#64748B]">R</span> / {loanOfficers}<span className="text-base text-[#64748B]">LO</span>
              </p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-[#64748B]">Realtors / Loan Officers</span>
              </div>
            </Card>
          </div>

          {/* Leads Table */}
          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 flex-wrap gap-3">
              <h3 className="font-semibold text-[#0F172A]">Recent Leads</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportCSV}
                  className="text-[#10B981] hover:text-[#059669] hover:bg-green-50"
                >
                  <Download className="h-3.5 w-3.5 mr-1.5" />
                  Export CSV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={fetchLeads}
                  className="text-[#64748B] hover:text-[#2563EB]"
                >
                  <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </div>
            </div>

            {loading ? (
              <div className="p-12 text-center">
                <RefreshCw className="h-6 w-6 animate-spin text-[#2563EB] mx-auto mb-3" />
                <p className="text-[#64748B] text-sm">Loading leads...</p>
              </div>
            ) : leads.length === 0 ? (
              <div className="p-12 text-center">
                <Users className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                <p className="text-[#64748B] font-medium">No leads yet</p>
                <p className="text-[#94A3B8] text-sm mt-1">
                  Leads from the contact form will appear here
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 sticky top-0 z-10">
                    <tr>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 sm:px-6 py-3">Name</th>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 sm:px-6 py-3 hidden sm:table-cell">Role</th>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 sm:px-6 py-3 hidden md:table-cell">Service</th>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 sm:px-6 py-3">Status</th>
                      <th className="text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 sm:px-6 py-3 hidden lg:table-cell">Date</th>
                      <th className="text-right text-xs font-semibold text-[#64748B] uppercase tracking-wider px-4 sm:px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.map((lead) => {
                      const statusInfo = statusConfig[lead.status] || statusConfig.new
                      return (
                        <tr
                          key={lead.id}
                          className="hover:bg-slate-50/50 transition-colors cursor-pointer"
                          onClick={() => {
                            setSelectedLead(lead)
                            setIsDetailOpen(true)
                          }}
                        >
                          <td className="px-4 sm:px-6 py-4">
                            <div>
                              <p className="font-medium text-[#0F172A] text-sm">{lead.name}</p>
                              <p className="text-xs text-[#64748B]">{lead.email}</p>
                            </div>
                          </td>
                          <td className="px-4 sm:px-6 py-4 hidden sm:table-cell">
                            <Badge variant="outline" className="text-xs font-normal">
                              {roleLabels[lead.role || ''] || lead.role || '—'}
                            </Badge>
                          </td>
                          <td className="px-4 sm:px-6 py-4 hidden md:table-cell">
                            <span className="text-sm text-[#64748B]">{lead.service || '—'}</span>
                          </td>
                          <td className="px-4 sm:px-6 py-4">
                            <Select
                              value={lead.status}
                              onValueChange={(value) => updateStatus(lead.id, value)}
                            >
                              <SelectTrigger
                                className={`w-[130px] h-7 text-xs border ${statusInfo.bg} ${statusInfo.color}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="qualified">Qualified</SelectItem>
                                <SelectItem value="converted">Converted</SelectItem>
                                <SelectItem value="lost">Lost</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                          <td className="px-4 sm:px-6 py-4 hidden lg:table-cell">
                            <span className="text-sm text-[#64748B]">{formatDate(lead.createdAt)}</span>
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 text-[#94A3B8] hover:text-red-500"
                              onClick={(e) => {
                                e.stopPropagation()
                                deleteLead(lead.id)
                              }}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </Card>

          {/* Security Info */}
          <div className="mt-6">
            <Card className="p-4 sm:p-5 border border-green-200 bg-green-50/50">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">Secure Dashboard</p>
                  <p className="text-xs text-[#64748B] mt-1">
                    Your session is secured with an HTTP-only cookie. Password is verified server-side and never exposed to the frontend. 
                    Use <strong>Export CSV</strong> to download leads for Excel or Google Sheets.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Lead Detail Dialog */}
        <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#2563EB]" />
                Lead Details
              </DialogTitle>
            </DialogHeader>
            {selectedLead && (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#64748B] uppercase">Name</label>
                    <p className="font-medium text-[#0F172A] mt-0.5">{selectedLead.name}</p>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#64748B] uppercase">Role</label>
                    <p className="font-medium text-[#0F172A] mt-0.5">
                      {roleLabels[selectedLead.role || ''] || selectedLead.role || '—'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <Mail className="h-4 w-4 text-[#2563EB] mt-0.5" />
                  <div>
                    <label className="text-xs font-medium text-[#64748B]">Email</label>
                    <p className="text-sm text-[#0F172A]">{selectedLead.email}</p>
                  </div>
                </div>

                {selectedLead.phone && (
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Phone className="h-4 w-4 text-[#2563EB] mt-0.5" />
                    <div>
                      <label className="text-xs font-medium text-[#64748B]">Phone</label>
                      <p className="text-sm text-[#0F172A]">{selectedLead.phone}</p>
                    </div>
                  </div>
                )}

                {selectedLead.company && (
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Building2 className="h-4 w-4 text-[#2563EB] mt-0.5" />
                    <div>
                      <label className="text-xs font-medium text-[#64748B]">Company</label>
                      <p className="text-sm text-[#0F172A]">{selectedLead.company}</p>
                    </div>
                  </div>
                )}

                {selectedLead.service && (
                  <div>
                    <label className="text-xs font-medium text-[#64748B] uppercase">Service Interest</label>
                    <p className="text-sm text-[#0F172A] mt-0.5">{selectedLead.service}</p>
                  </div>
                )}

                {selectedLead.message && (
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <MessageSquare className="h-4 w-4 text-[#2563EB] mt-0.5" />
                    <div>
                      <label className="text-xs font-medium text-[#64748B]">Message</label>
                      <p className="text-sm text-[#0F172A]">{selectedLead.message}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center gap-2 text-xs text-[#64748B]">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(selectedLead.createdAt)}
                  </div>
                  <Select
                    value={selectedLead.status}
                    onValueChange={(value) => updateStatus(selectedLead.id, value)}
                  >
                    <SelectTrigger className="w-[130px] h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualified">Qualified</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </AnimatePresence>
  )
}

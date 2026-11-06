import React, { useState } from 'react';
import {
  Search,
  Compass,
  Layers,
  RotateCcw,
  Target,
  Cpu,
  Award
} from 'lucide-react';
import { CONCEPT_DETAILS } from '../data/mapData';

interface HeaderNavProps {
  activeFilter: string;
  onFilterChange: (branch: string) => void;
  onSearchSelect: (nodeId: string) => void;
  onStartTour: () => void;
  onResetView: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeFilter,
  onFilterChange,
  onSearchSelect,
  onStartTour,
  onResetView
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filterOptions = [
    { id: 'all', label: 'Todo el Mapa', icon: Layers, color: '#4f46e5' },
    { id: 'generales', label: '1. Prácticas Generales (12)', icon: Layers, color: '#059669' },
    { id: 'tecnicas', label: '2. Prácticas Técnicas & Despliegue', icon: Cpu, color: '#2563eb' },
    { id: 'certificacion', label: '3. Certificación ITIL & Estándares', icon: Award, color: '#d97706' },
    { id: 'practica', label: '4. Casos Prácticos UTP', icon: Target, color: '#7c3aed' }
  ];

  const searchResults = Object.values(CONCEPT_DETAILS).filter((item) => {
    if (!searchTerm.trim()) return false;
    const term = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(term)) ||
      item.shortDesc.toLowerCase().includes(term) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(term))) ||
      (item.standards && item.standards.some((s) => s.toLowerCase().includes(term)))
    );
  });

  return (
    <header className="main-header">
      <div className="header-card">
        {/* Brand & Titles */}
        <div className="header-brand">
          <div className="header-titles">
            <h1 className="header-title">
              PRÁCTICAS DE GESTIÓN ITIL & ESQUEMA DE CERTIFICACIÓN
            </h1>
            <p className="header-subtitle">
              Gestión de Servicios de TI · Semana 13, Sesión 2 (UTP) · Prácticas de Gestión, Certificación PeopleCert & Normas ISO/COBIT
            </p>
          </div>
        </div>

        {/* Filter Branches Pills (Scrollable horizontally on mobile) */}
        <div className="header-filters">
          {filterOptions.map((opt) => {
            const isActive = activeFilter === opt.id;
            const IconComp = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => onFilterChange(opt.id)}
                className={`filter-btn ${isActive ? 'filter-btn-active' : ''}`}
                style={{
                  background: isActive ? opt.color : 'transparent',
                  color: isActive ? '#ffffff' : '#475569'
                }}
              >
                <IconComp size={13} />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search & Action Buttons */}
        <div className="header-actions">
          {/* Live Search Input */}
          <div className="search-container">
            <div className="search-box">
              <Search size={14} color="#64748b" className="search-icon" />
              <input
                type="text"
                placeholder="Buscar práctica, certificación, estándar, RAID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="search-clear-btn"
                  title="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Autocomplete Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="search-dropdown">
                {searchResults.slice(0, 7).map((res) => (
                  <div
                    key={res.id}
                    onMouseDown={() => {
                      onSearchSelect(res.id);
                      setSearchTerm('');
                    }}
                    className="search-result-item"
                  >
                    <div className="search-result-title">{res.title}</div>
                    <div className="search-result-badge">{res.branchLabel}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Guided Tour Trigger */}
          <button
            onClick={onStartTour}
            className="action-btn tour-btn"
            title="Recorrido pedagógico guiado"
          >
            <Compass size={15} />
            <span>Tour Guiado</span>
          </button>

          {/* Reset View Button */}
          <button
            onClick={onResetView}
            className="action-btn reset-btn"
            title="Centrar y reajustar lienzo"
          >
            <RotateCcw size={15} />
            <span>Centrar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
